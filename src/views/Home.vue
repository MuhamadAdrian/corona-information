<style lang="css">
  .my-card{
    border: 2px solid #1ca0ff !important;
    background: transparent !important;
  }
  .my-shadow{
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13) !important;
  }
  .text-blue{
    color: #1ca0ff;
  }
  .my-shadow2{
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.034) !important;
  }
</style>

<template>
  <div class="home">
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <h1 class="font-weight-light display-1">Pantau Corona</h1>
          <p class="subtitle-1 font-weight-light">Data Virus Corona Global & Live Data Indonesia</p>
        </div>
      </v-col>
    </v-row>
    <v-row>
    <v-col md="6" cols="12">
          <h1 class="headline font-weight-thin subtitle-1 mb-3">Graphic <v-icon right color="teal">mdi-chart-pie</v-icon></h1>
      <v-card flat class="my-shadow2 py-5">
          <chart-corona-virus></chart-corona-virus>
          <p class="caption text-center mt-3 mb-0">Press the chart for more</p>
      </v-card>

      </v-col>
      <v-col md="6" cols="12"> 
        <h1 class="headline font-weight-thin subtitle-1 mb-3">Data <v-icon color="blue">mdi-chart-donut</v-icon></h1>
        <v-skeleton-loader
          :loading="loading"
          :transition="transition"
          height="94"
          type="list-item-two-line"
        >
        <v-card color="blue" flat class="mx-auto my-shadow">
          <v-card-text class="d-flex align-center white--text">
            <div>
              <p class="title mb-0">Global</p>
              <p class="subtitle-1 mb-0">Kasus</p>
            </div>
            <v-spacer></v-spacer>
            <v-icon color="white" left>mdi-phone-in-talk</v-icon>
            <p class="white--text title font-weight-light mb-0">{{ this.value.cases | numFormat }} Kasus</p>
          </v-card-text>
        </v-card>
        </v-skeleton-loader>
        <v-skeleton-loader
          :loading="loading"
          :transition="transition"
          height="94"
          type="list-item-two-line"
        >
        <v-card color="teal" class="mx-auto my-shadow mt-3">
          <v-card-text class="d-flex align-center white--text">
            <div>
              <p class="title mb-0">Global</p>
              <p class="subtitle-1 mb-0">Pulih</p>
            </div>
            <v-spacer></v-spacer>
            <v-icon color="white" left>mdi-refresh</v-icon>
            <p class="title font-weight-light mb-0">{{ this.value.recovered | numFormat }} Pulih</p>
          </v-card-text>
        </v-card>
        </v-skeleton-loader>
        <v-skeleton-loader
          :loading="loading"
          :transition="transition"
          height="94"
          type="list-item-two-line"
        >
        <v-card color="red" class="mx-auto my-shadow mt-3">
          <v-card-text class="d-flex align-center white--text">
            <div>
              <p class="title mb-0">Global</p>
              <p class="subtitle-1 mb-0">Meninggal</p>
            </div>
            <v-spacer></v-spacer>
            <v-icon left color="white">mdi-bed</v-icon>
            <p class="title font-weight-light mb-0">{{ this.value.deaths | numFormat }} Meninggal</p>
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
      axios.get('https://coronavirus-19-api.herokuapp.com/all')
      .then((response) => {
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
