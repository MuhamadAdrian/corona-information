<template>
  <v-card flat class="my-shadow2">
    <v-card-title class="d-block">
      <p class="font-weight-light mb-0 text-center">Data Kasus ODP, PDP, Positif, Meninggal, dan Aktif di Jawa Barat</p>
      <p class="subtitle-2 text-center">Sumber: jabarprov.go.id</p>
      <v-img class="mx-auto" :src="require('../assets/jabar.png')" width="50"></v-img>
    </v-card-title>
    <v-card-title class="d-block">
      <p class="caption"><v-icon left small>mdi-calendar</v-icon> Terakhir update : {{ last_update }}</p>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Cari Kota/Kabupaten/Desa/Status"
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
      :items="allData"
      :search="search"
    >
    <template v-slot:item.status="{ item }">
      <v-chip class="my-shadow"  :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
    </template>
    <template v-slot:item.jenis_kelamin_str="{ item }">
      <v-chip class="my-shadow" :color="getColorJk(item.jenis_kelamin_str)" dark>
        <v-avatar left color="light">
          <v-icon v-text="icon">mdi-account-circle</v-icon>
        </v-avatar>  
        {{ item.jenis_kelamin_str }}
      </v-chip>
    </template>
    </v-data-table>
  </v-card>
</template>

<script>
const axios = require('axios').default;
export default {
    name: 'Patient',
    data() {
        return {
          loading: true,
            search: '',
            allData: [],
             headers: [
              {
                text: 'Umur',
                align: 'start',
                sortable: false,
                value: 'umur',
              },
              { text: 'Jenis Kelamin', value: 'jenis_kelamin_str' },
              { text: 'Desa', value: 'desa_str' },
              { text: 'Kecamatan', value: 'kecamatan_str' },
              { text: 'Kabupaten/Kota', value: 'kabkot_str' },
              { text: 'Status', value: 'status' },
              { text: 'Stage', value: 'stage' },
            ],
            last_update: {},
        }
    },
     methods: {
        loadPatients(){
            this.$Progress.start()
            axios.get('https://coredata.jabarprov.go.id/analytics/covid19/longlat.json').then((data) => {
                this.loading = false
                this.last_update = data.data.last_update
                this.allData = data.data.data
                this.$Progress.finish()
            }).catch(() => {
                this.$Progress.fail()
            })
        },

        getColor(status){
          if (status == 'ODP') return 'green'
          else if (status == 'PDP') return 'warning'
          else if (status == 'Positif') return 'red'
          else if (status == 'Aktif') return 'blue'
          else if (status == 'Meninggal') return 'dark'
          else if (status == '') return ''
        },

        getColorJk(jk){
          if (jk == 'Perempuan') return 'pink'
          else if (jk == 'Laki-laki') return 'blue'
          else return 'dark'
        }
    },
    mounted() {
        this.loadPatients()
    },

}
</script>