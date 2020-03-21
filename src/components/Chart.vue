<template>
<div>
   <v-skeleton-loader v-if="loading" :transition="transition" type="card">
    </v-skeleton-loader>
    <canvas ref="Chart" :width="width" :height="height"></canvas>
    
</div>

  
</template>

<script>
const axios = require('axios').default;
import Chart from 'chart.js';

export default {
  name: 'chart-corona-virus',
  data() {
      return {
          width: 300,
          height: 185,
          loading: true,
          transition: 'scale-transition',
          value: {},
        }
  },
  mounted() {
      axios.get('https://coronavirus-19-api.herokuapp.com/all').then((response) => {
          this.value = response.data
          this.loading = false
            new Chart(this.$refs.Chart, {
      type: 'doughnut',
      data: {
          datasets: [
              {
                  label: 'Kasus Virus Corona Dunia',
            data: [this.value.cases, this.value.recovered, this.value.deaths],
            backgroundColor: [
                'rgba(28, 160, 255, 0.8)',
                'rgba(0, 160, 83, 0.8)',
                'rgba(255, 53, 53, 0.8)'
            ],
            borderColor: [
                '#1CA0FF',
                '#00A053',
                'crimson'
            ]
          },
        ],
        labels: ['Kasus', 'Pulih', 'Meninggal'],
      },
      options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        display: false
      }]
    }
  }
    });
    
      })
  }
}
</script>