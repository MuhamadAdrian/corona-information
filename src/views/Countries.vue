
<style lang="css">
    .sticky-top{
        position: sticky;
        top: 75px;
        z-index: 2;
    }
    .my-shadow3{
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.021) !important;
    }
</style>
<template>
    <div>
        <v-text-field
        id="search"
        class="sticky-top mb-4 mb-sm-0"
        flat
        hide-details
        label="Cari Negara"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
        v-model="search"
      ></v-text-field>
        <v-row>
            <v-col class="pb-sm-2 pb-0" v-for="(data, index) in filteredCountry" :key="index" md="3" cols="12">
                <v-skeleton-loader :loading="loading" :transition="transition" type="list-item-three-line">
                <v-card flat class="mb-0 my-shadow2" :to="'/countries/' + data.country">
                    <v-card-text>                        
                        <p class="mb-0 body-1 font-weight-medium">{{ data.country}}</p>
                        <p class="mb-0">Kasus : {{ data.cases }} | Meniggal Hari ini : {{ data.todayDeaths }}</p>
                        <p class="mb-0">Pulih : {{ data.recovered }} | Meniggal : {{ data.deaths }} | Kritis : {{ data.critical }}</p>
                    </v-card-text>
                </v-card>
                </v-skeleton-loader>
            </v-col>
        <scale-loader class="mx-auto my-auto mt-5" :loading="loading" :color="color" :size="size"></scale-loader>
        </v-row>
    </div>
</template>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
const axios = require('axios').default;
export default {
    name: 'Countries',
    components:{
        ScaleLoader
    },
    data()
    {
        return{
            size: '',
            allData: [],
            statistic: [],
            provinces: [],
            loading: true,
            transition: 'scale-transition',
            search: '',
            color: '#2196F3'
        }
    },

    methods: {
        loadAllData(){
            this.$Progress.start()
            axios.get('https://coronavirus-19-api.herokuapp.com/countries').then((data) => {
                this.loading = false
                this.$Progress.finish()
                this.allData = data.data
            }).catch(() => {
                this.$Progress.fail()
            })
        },
    },

    computed: {
        filteredCountry: function(){
            return this.allData.filter((data) => {
                return data.country.match(this.search.charAt(0).toUpperCase() + this.search.slice(1))
            })
        }
    },

    mounted() {
        this.loadAllData()
    },

}
</script>
