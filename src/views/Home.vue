<style lang="css">
  .my-card{
    border: 2px solid #1ca0ff !important;
    background: transparent !important;
  }
  .text-blue{
    color: #1ca0ff;
  }
</style>

<template>
  <div class="home">
    <h1 class="headline font-weight-thin subtitle-1">Graphic</h1>
    <v-row>
      <v-col md="6" cols="12">
          <chart-corona-virus></chart-corona-virus>
          <p class="caption text-center">Press the chart for more</p>
      </v-col>
      <v-col md="6" cols="12"> 
        <h1 class="headline font-weight-thin subtitle-1">Data</h1>
        <v-skeleton-loader
          :loading="loading"
          :transition="transition"
          height="94"
          type="list-item-two-line"
        >
        <v-card outlined class="mx-auto my-card">
          <v-card-text class="d-flex align-center">
            <div>
              <p class="title mb-0">Dunia</p>
              <p class="subtitle-1 mb-0">Kasus</p>
            </div>
            <v-spacer></v-spacer>
            <v-icon left>mdi-phone-in-talk</v-icon>
            <p class="title font-weight-light text-blue mb-0">{{ this.value.cases | numFormat }} Kasus</p>
          </v-card-text>
        </v-card>
        </v-skeleton-loader>
        <v-skeleton-loader
          :loading="loading"
          :transition="transition"
          height="94"
          type="list-item-two-line"
        >
        <v-card outlined class="mx-auto my-card mt-3">
          <v-card-text class="d-flex align-center">
            <div>
              <p class="title mb-0">Dunia</p>
              <p class="subtitle-1 mb-0">Pulih</p>
            </div>
            <v-spacer></v-spacer>
            <v-icon left>mdi-refresh</v-icon>
            <p class="title font-weight-light text-blue mb-0">{{ this.value.recovered | numFormat }} Pulih</p>
          </v-card-text>
        </v-card>
        </v-skeleton-loader>
        <v-skeleton-loader
          :loading="loading"
          :transition="transition"
          height="94"
          type="list-item-two-line"
        >
        <v-card outlined class="mx-auto my-card mt-3">
          <v-card-text class="d-flex align-center">
            <div>
              <p class="title mb-0">Dunia</p>
              <p class="subtitle-1 mb-0">Meninggal</p>
            </div>
            <v-spacer></v-spacer>
            <v-icon left>mdi-bed</v-icon>
            <p class="title font-weight-light text-blue mb-0">{{ this.value.deaths | numFormat }} Meninggal</p>
          </v-card-text>
        </v-card>
        </v-skeleton-loader>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
const axios = require('axios').default;
// @ is an alias to /src
import ChartCoronaVirus from '../components/Chart';
export default {
  name: 'Home',
  components: {
    ChartCoronaVirus
  },
  data() {
    return {
      loading: true,
      transition: 'scale-transition',
      value: {},
      item: 
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
      
    }
  },
  methods: {
    loadData(){
      this.$Progress.start()
      axios.get('https://coronavirus-19-api.herokuapp.com/all').then((response) => {
        this.value = response.data
        this.loading = false
        this.$Progress.finish()
      }).catch(() => {
        this.$Progress.fail()
      })
    }
  },
  mounted() {
    this.loadData();
  },
  
}

</script>
