<template>
    <nav>
        <v-app-bar hide-on-scroll app flat class="appbar-color-light">
            <v-app-bar-nav-icon class="d-sm-flex d-none" @click="show = !show"></v-app-bar-nav-icon>
                    <img class="mr-2" src="logo.png" alt="" width="20" height="20">
            <v-toolbar-title class="pl-0 pl-sm-2">
                <span class="font-weight-thin">A</span> Dev
            </v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer class="d-sm-flex d-none" app flat v-model="show">
            <v-list shaped>
                
                <v-subheader><img class="mr-2" src="logo.png" alt="" width="20" height="20">Menu</v-subheader>
                <v-list-item-group color="primary">
                    <v-list-item v-for="(item, index) in items" :key="index" router :to="item.link">
                        <v-icon left v-text="item.icon"></v-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            
        </v-navigation-drawer>
    </nav>
</template>


<script>
export default {
    data(){
        return{
            show: false,
            items: [
                {text: 'Global', icon: 'mdi-earth', link: '/'},
                {text: 'Negara', icon: 'mdi-flag-outline', link: '/countries'},
                {text: 'Hotline', icon: 'mdi-phone-outline', link: '/hotline'},
                {text: 'Orang', icon: 'mdi-human', link: '/patient'},
                {text: 'Tentang', icon: 'mdi-information-outline', link: '/about'},
            ]
        }
    },
}
</script>