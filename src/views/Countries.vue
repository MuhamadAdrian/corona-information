
<style lang="css">
    .sticky-top{
        position: sticky;
        top: 8px;
        z-index: 2;
    }
</style>
<template>
    <div>
        <v-text-field
        id="search"
        class="sticky-top"
        flat
        hide-details
        label="Search Country"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
        v-model="search"
      ></v-text-field>
      <p class="body-2 mt-2 font-weight-light">make sure the first letter is a capital letter</p>
        <v-row>
            <v-col class="pb-sm-2 pb-0" v-for="(data, index) in filteredCountry" :key="index" md="3" cols="12">
                <v-skeleton-loader :loading="loading" :transition="transition" type="list-item-three-line">
                <v-card flat class="mb-0">
                    <v-card-text>                        
                        <p class="mb-0 body-1 font-weight-medium">{{ data.country }}</p>
                        <p class="mb-0">Kasus : {{ data.cases }} | Meniggal Hari ini : {{ data.todayDeaths }}</p>
                        <p class="mb-0">Pulih : {{ data.recovered }} | Meniggal : {{ data.deaths }} | Kritis : {{ data.critical }}</p>
                    </v-card-text>
                </v-card>
                </v-skeleton-loader>
            </v-col>
        <scale-loader class="mx-auto my-auto" :loading="loading" :color="color" :size="size"></scale-loader>
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
            loading: true,
            transition: 'scale-transition',
            search: '',
            color: '#45B0FE'
        }
    },

    methods: {
        loadAllData(){
            this.$Progress.start()
            axios.get('https://coronavirus-19-api.herokuapp.com/countries').then((data) => {
                this.$Progress.finish()
                this.loading = false
                this.allData = data.data
            }).catch(() => {
                this.$Progress.fail()
            })
        },
    },

    computed: {
        filteredCountry: function(){
            return this.allData.filter((data) => {
                return data.country.match(this.search)
            })
        }
    },

    mounted() {
        this.loadAllData()
    },

}
</script>
