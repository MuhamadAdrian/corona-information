<template>
  <v-card flat class="my-shadow2">
    <v-card-title class="d-block">
      <p class="font-weight-light mb-0 text-center">Data Kasus di Indonesia</p>
      <v-img class="mx-auto drop-shadow rounded-circle mt-3" :src="require('../assets/indo.jpg')" height="60" width="60"></v-img>
    </v-card-title>
    <v-card-title class="d-block">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Cari Klaster(Provinsi)"
        single-line
        hide-details
        solo-inverted
        flat
        class="font-weight-light"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :loading="loading"
      loading-text="Loading... Please wait"
      :headers="headers"
      :items="allKasus"
      :search="search"
    >
    <template v-slot:item.gender="{ item }">
      <v-chip class="my-shadow" :color="getColorJk(item.gender)" dark>
        <v-avatar left color="light">
          <v-icon v-text="icon">mdi-account-circle</v-icon>
        </v-avatar>  
        {{ item.gender}}
      </v-chip>
    </template>
    <template v-slot:item.status="{ item }">
      <v-chip class="my-shadow"  :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
    </template>
    </v-data-table>
  </v-card>
</template>

<script>

import axios from 'axios'
export default {
    data(){
        return{
            allKasus: [],
            loading: true,
            search: '',
             headers: [
                 { text: 'Kasus', value: 'kasus' },
                  {
                    text: 'Umur',
                    align: 'start',
                    sortable: false,
                    value: 'umur',
                  },
              { text: 'Jenis Kelamin', value: 'gender' },
              { text: 'Klaster', value: 'klaster' },
              { text: 'Status', value: 'status' },
            ],
        }
    },

    methods: {
        loadKasus(){
            this.$Progress.start()
            axios.get('https://indonesia-covid-19.mathdro.id/api/kasus').then((res) => {
                this.loading = false
                this.allKasus = res.data.data.nodes
                this.$Progress.finish()
            }).catch(() => {
                this.$Progress.fail()
            })
        },
        getColorJk(jk){
          if (jk == 'Perempuan') return 'pink'
          else if (jk == 'Laki-laki' || jk == 'Laki-Laki') return 'blue'
          else return 'dark'
        },
                getColor(status){
          if (status == 'Dalam Perawatan') return 'warning'
          else if (status == 'Sembuh') return 'green'
          else if (status == 'Meninggal') return 'red'
        },
    },


    mounted() {
        this.loadKasus()
    },
}
</script>