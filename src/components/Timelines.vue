<template>
    <div>
        <v-row>
            <v-col md="8" cols="12" class="d-sm-block d-none">
                <p class="font-weight-light text-center display-1 mt-5 pa-3">Jumlah Kasus Corona Di Indonesia per Hari</p>
                <v-timeline :dense="$vuetify.breakpoint.xsAndDown">
                    <v-timeline-item
                    color="primary"
                    v-for="(stat, index) in statistic.slice().reverse()"
                    :key="index"
                    small
                    >
                    <span slot="opposite">{{ stat.tanggal | myDate }}</span>
                    <v-card class="my-shadow">
                        <v-card-text>
                        <p class="mb-2">Jumlah Kasus : {{ stat.jumlahKasusKumulatif }}</p>
                            <v-chip small color="yellow" class="caption mb-1 my-shadow2 pl-0">
                                <v-avatar class="ml-0 my-shadow2" color="yellow darken-3" small left>
                                <v-icon small class="px-0" color="white">mdi-hospital</v-icon>
                                </v-avatar>
                                Perawatan : {{ stat.jumlahpasiendalamperawatan }} ({{stat.persentasePasiendalamPerawatan | persen}}%)
                            </v-chip>
                            <v-chip small color="green white--text" class="caption mb-1 my-shadow2 pl-0">
                                <v-avatar small left class="ml-0 my-shadow2" color="green darken-3">
                                    <v-icon small class="px-0" color="white">mdi-human</v-icon>
                                </v-avatar>
                                Sembuh : {{ stat.jumlahPasienSembuh}} ({{stat.persentasePasienSembuh | persen}}%)
                            </v-chip>
                            <v-chip small color="red white--text" class="caption mb-1 my-shadow2 pl-0">
                                <v-avatar class="ml-0 my-shadow2" small left color="red darken-3">
                                    <v-icon class="px-0" small>mdi-bed</v-icon>
                                </v-avatar>
                                Meninggal : {{ stat.jumlahPasienMeninggal}} ({{stat.persentasePasienMeninggal | persen}}%)
                            </v-chip>
                        </v-card-text>
                    </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
            <v-col sm="6" cols="12" class="d-sm-none d-block">
                <p class="font-weight-light text-center display-1 mt-5 pa-3">Jumlah Kasus Corona Di Indonesia per Hari</p>
                <v-timeline align-top dense>
                    <v-timeline-item v-for="(stat, index) in statistic.slice().reverse()" :key="index" color="blue" small>
                        <v-row class="pt-1">
                            <v-col cols="3" class="mx-0 px-0">
                            <p slot="opposite" class="font-weight-light caption">{{ stat.tanggal | myDate }}</p>
                            </v-col>
                            <v-col class="px-0">
                            <p class="mb-2">Jumlah Kasus : {{ stat.jumlahKasusKumulatif }}</p>
                            <v-chip small color="yellow" class="caption mb-1 my-shadow2 pl-0">
                                <v-avatar class="ml-0 my-shadow2" color="yellow darken-3" small left>
                                <v-icon small class="px-0" color="white">mdi-hospital</v-icon>
                                </v-avatar>
                                Perawatan : {{ stat.jumlahpasiendalamperawatan }} ({{stat.persentasePasiendalamPerawatan | persen}}%)
                            </v-chip>
                            <v-chip small color="green white--text" class="caption mb-1 my-shadow2 pl-0">
                                <v-avatar small left class="ml-0 my-shadow2" color="green darken-3">
                                    <v-icon small class="px-0" color="white">mdi-human</v-icon>
                                </v-avatar>
                                Sembuh : {{ stat.jumlahPasienSembuh}} ({{stat.persentasePasienSembuh | persen}}%)
                            </v-chip>
                            <v-chip small color="red white--text" class="caption mb-1 my-shadow2 pl-0">
                                <v-avatar class="ml-0 my-shadow2" small left color="red darken-3">
                                    <v-icon class="px-0" small>mdi-bed</v-icon>
                                </v-avatar>
                                Meninggal : {{ stat.jumlahPasienMeninggal}} ({{stat.persentasePasienMeninggal | persen}}%)
                            </v-chip>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            statistic: []
        }
    },
    methods: {
        loadStatistic(){
            axios.get('https://indonesia-covid-19.mathdro.id/api/harian').then((res) => {
                this.statistic = res.data.data
            })
        },
    },

    mounted() {
        this.loadStatistic();
    },
}
</script>