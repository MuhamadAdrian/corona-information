<template>
    <div>
        <v-row>
            <v-col cols="6" class="pr-sm-2 pr-1 pb-sm-2 py-1">
                <v-btn text to="/countries" color="primary"><v-icon left>mdi-arrow-left</v-icon>Back</v-btn>
            </v-col>
            <v-col cols="6" class="pl-sm-2 pl-1 pb-sm-2 py-1" justify-end>
                <v-skeleton-loader
                :loading="loading"
                :transition="transition"
                height="75"
                type="list-item-two-line"
                >
                <div class="d-flex ml-auto">
                    <h1 class="font-weight-light ml-auto">{{ singleData.country }}<v-icon right>mdi-flag</v-icon></h1>
                </div>
                </v-skeleton-loader>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pb-sm-2 py-1">
                <v-skeleton-loader
                :loading="loading"
                :transition="transition"
                height="75"
                type="list-item-two-line"
                >
                <v-card class="mb-0" flat>
                    <v-card-text class="text-center">
                        <h3 class="mb-3"><span>Kasus</span><v-icon right>mdi-phone-ring-outline</v-icon></h3>
                        <h1>{{ singleData.cases | numFormat }}</h1>
                    </v-card-text>
                </v-card>
                </v-skeleton-loader>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="pr-sm-2 pr-1 pb-sm-2 py-1">
                <v-skeleton-loader
                :loading="loading"
                :transition="transition"
                height="75"
                type="list-item-two-line"
                >
                <v-card flat>
                    <v-card-text class="text-center">
                        <h5 class="mb-3">Pulih<v-icon right>mdi-human-greeting</v-icon></h5>
                        <h1>{{ singleData.recovered| numFormat }} <v-icon>mdi-recover</v-icon></h1>
                    </v-card-text>
                </v-card>
                </v-skeleton-loader>
            </v-col>
            <v-col cols="6" class="pl-sm-2 pl-1 pb-sm-2 py-1">
                <v-skeleton-loader
                :loading="loading"
                :transition="transition"
                height="75"
                type="list-item-two-line"
                >
                <v-card flat>
                    <v-card-text class="text-center">
                        <h5 class="mb-3">Meninggal<v-icon right>mdi-bed</v-icon></h5>
                        <h1>{{ singleData.deaths | numFormat }}</h1>
                    </v-card-text>
                </v-card>
                </v-skeleton-loader>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="5" class="pr-sm-2 pr-1 pb-sm-2 py-1">
                <v-skeleton-loader
                :loading="loading"
                :transition="transition"
                height="75"
                type="list-item-two-line"
                >
                <v-card class="mb-0" flat>
                    <v-card-text class="text-center">
                        <h5 class="mb-3">Kritis<v-icon right>mdi-needle</v-icon></h5>
                        <h1>{{ singleData.critical | numFormat }}</h1>
                    </v-card-text>
                </v-card>
                </v-skeleton-loader>
            </v-col>
            <v-col cols="7" class="pl-sm-2 pl-1 pb-sm-2 py-1">
                <v-skeleton-loader
                :loading="loading"
                :transition="transition"
                height="75"
                type="list-item-two-line"
                >
                <v-card class="mb-0" flat>
                    <v-card-text class="text-center">
                        <h5 class="mb-3">Aktif<v-icon right>mdi-hospital</v-icon></h5>
                        <h1>{{ singleData.active | numFormat }}</h1>
                    </v-card-text>
                </v-card>
                </v-skeleton-loader>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="7" class="pr-sm-2 pr-1 pb-sm-2 py-1">
                <v-skeleton-loader
                :loading="loading"
                :transition="transition"
                height="75"
                type="list-item-two-line"
                >
                <v-card class="mb-0" flat>
                    <v-card-text class="text-center">
                        <h5 class="mb-3">Kasus Hari Ini<v-icon right>mdi-calendar-today</v-icon></h5>
                        <h1>{{ singleData.todayCases | numFormat }}</h1>
                    </v-card-text>
                </v-card>
                </v-skeleton-loader>
            </v-col>
            <v-col cols="5" class="pl-sm-2 pl-1 pb-sm-2 py-1">
                <v-skeleton-loader
                :loading="loading"
                :transition="transition"
                height="75"
                type="list-item-two-line"
                >
                <v-card class="mb-0" flat>
                    <v-card-text class="text-center">
                        <h5 class="mb-3">Kasus/1juta<v-icon right>mdi-account-group-outline</v-icon></h5>
                        <h1>{{ singleData.casesPerOneMillion | numFormat }}</h1>
                    </v-card-text>
                </v-card>
                </v-skeleton-loader>
            </v-col>
        </v-row>
    </div>
</template>

<script>
const axios = require('axios').default;
export default {
    name: 'CountriesDetail',
    data(){
        return{
            country: this.$route.params.country,
            singleData: {},
            loading: true,
            transition: 'scale-transition',
        }
    },
    methods: {
        loadSingleData(){
            axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + this.country).then((data) => {
                this.loading = false
                this.singleData = data.data
            }).catch(() => {
                console.log('Fail')
            })
        }
    },

    mounted() {
        this.loadSingleData();
    },
}
</script>