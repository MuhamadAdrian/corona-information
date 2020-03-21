<template>
    <nav>
        <v-app-bar hide-on-scroll app flat class="appbar-color-light">
            <v-app-bar-nav-icon class="" @click="show = !show"></v-app-bar-nav-icon>
            <v-toolbar-title class="pl-0 pl-sm-2">
                <span class="font-weight-thin">Corona</span> Information
            </v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer class="" app flat v-model="show">
            <v-list shaped>
                <v-subheader>Menu</v-subheader>
                <v-list-item-group v-model="item" color="primary">
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
                {text: 'Countries', icon: 'mdi-flag', link: '/countries'},
                {text: 'About', icon: 'mdi-help', link: '/about'},
            ]
        }
    },
}
</script>