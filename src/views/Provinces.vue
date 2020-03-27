<style lang="css">
    .drop-shadow{
        filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.226)) !important;
    }
    .rounded-circle{
        border-radius: 50%;
    }
</style>

<template>
<div>
    <v-row class="mb-5">
        <v-col cols="6" class="pr-1">
            <v-card flat class="my-shadow" min-height="135" color="white--text primary" to="provinces/jawabarat/kasus">
                <v-card-text class="white--text text-center">
                    <v-img class="mx-auto drop-shadow" :src="require('../assets/jabar.png')" width="60"></v-img>
                    <div class="mt-3">Kasus di Jawa Barat <v-icon small color="white">mdi-arrow-right</v-icon></div> 
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="6" class="pl-1">
            <v-card flat class="my-shadow" min-height="135" color="white--text red" to="countries/indonesia/kasus">
                <v-card-text class="white--text text-center">
                    <v-img class="mx-auto rounded-circle drop-shadow" :src="require('../assets/indo.jpg')" height="60" width="60"></v-img>
                    <div class="mt-5">Kasus di Indonesia <v-icon small color="white">mdi-arrow-right</v-icon></div> 
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
        <v-text-field
        id="search"
        class="sticky-top mb-4 mb-sm-0"
        flat
        hide-details
        label="Cari Provinsi"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
        v-model="search"
      ></v-text-field>
        <v-row>
            <v-col class="pb-sm-2 pb-0" v-for="(province, index) in filteredProvince" :key="index" md="3" cols="12">
                <v-skeleton-loader :loading="loading" :transition="transition" type="list-item-three-line">
                <v-card flat class="mb-0 my-shadow2">
                    <v-card-text>                        
                        <p class="mb-0 body-1 font-weight-medium">{{ province.provinsi}}</p>
                        <p class="mb-0">Positif : {{ province.kasusPosi }}</p>
                        <p class="mb-0">Sembuh : {{ province.kasusSemb }}</p>
                        <p class="mb-0">Meninggal : {{ province.kasusMeni }}</p>

                    </v-card-text>
                </v-card>
                </v-skeleton-loader>
            </v-col>
        <scale-loader class="mx-auto my-auto mt-5" :loading="loading" :color="color" :size="size"></scale-loader>
        </v-row>
    </div>
</template>
<script>
//import Jabar from '../components/Patient'
import axios from 'axios'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
export default {
    components:{
        //Jabar
        ScaleLoader
    },

    data() {
        return {
            provinces: [],
            search: '',
            loading: true,
            transition: 'scale-transition',
            color: '#2196F3',
            size: ''
        }
    },

    methods:{
        loadProvinces(){
            this.$Progress.start()
            axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi').then((res) => {
                this.loading = false
                this.$Progress.finish()
                this.provinces = res.data.data

            }).catch(() => {
                this.$Progress.fail()
            })
        }
    },

    computed:{
        filteredProvince: function(){
            return this.provinces.filter((province) => {
                return province.provinsi.match(this.search.charAt(0).toUpperCase() + this.search.slice(1))
            })
        }
    },

    mounted() {
        this.loadProvinces()
    },
}
</script>