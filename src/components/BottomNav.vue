<style lang="css">
  .btn{
    min-width: 40px !important;
  }
  .btnhotline{
    position: relative !important;
  }
  .btnhotline::after{
    content: '' !important;
    position: absolute !important;
    background: #0277BD !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 100px !important;
    height: 100px !important;
    z-index: -1 !important;
    animation: anim1 1.5s ease-in-out infinite !important;
  }
  .btnhotline::before{
    content: '' !important;
    position: absolute !important;
    background: #4DB6AC !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 100px !important;
    height: 100px !important;
    z-index: -2 !important;
    animation: anim2 1.5s ease-in-out infinite .4s !important;
  }
  @keyframes anim1 {
    0%{
      border-radius: 100px;
      opacity: 0;
      width: 5%;
      height: 5%;
    }
    50%{
      border-radius: 100px;
      opacity: .3;
      width: 80px;
      height: 80px;
    }
    100%{
      border-radius: 50%;
      opacity: 0;
      width: 5%;
      height: 5%;
    }
  }
  @keyframes anim2 {
    0%{
      border-radius: 100px;
      opacity: 0;
      width: 5%;
      height: 5%;
    }
    50%{
      border-radius: 100px;
      opacity: .3;
      width: 80px;
      height: 80px;
    }
    100%{
      border-radius: 50%;
      opacity: 0;
      width: 5%;
      height: 5%;
    }
  }
</style>
<template>
 <v-bottom-navigation
    color="primary"
    class="d-sm-none"
    app
    grow
    shift
  >
    <v-btn @click="showAnimation()" class="px-0 btn" x-small to="/">
      <v-icon small >mdi-home-outline</v-icon>
      <span class="caption font-wight-light">Home</span>
    </v-btn>

    <v-btn @click="showAnimation()" class="px-0 btn" x-small to="/countries">
      <v-icon small >mdi-flag-outline</v-icon>
      <span class="caption font-wight-light">Negara</span>
    </v-btn>

    <v-btn @click="hideAnimation()" id="btn-center" class="btn px-0" :class="{btnhotline: isActive}" x-small to="/hotline">
      <v-icon small >mdi-phone</v-icon>
      <span class="caption font-wight-light">Hotline</span>
    </v-btn>

    <v-btn @click="showAnimation()" class="px-0 btn" x-small to="/provinces">
     <v-icon small >mdi-map-marker-multiple-outline</v-icon>
      <span class="caption font-wight-light">Provinsi</span>
    </v-btn>


    <v-btn @click="showAnimation()" class="px-0 btn" x-small to="/about">
      <v-icon small>mdi-information-outline</v-icon>
      <span class="caption font-wight-light">About</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
    data () {
      return {
        isActive : true,
      }
    },

    methods: {
      hideAnimation(){
        this.isActive = false
      },
      showAnimation(){
        this.isActive = true
      }
    },
}
</script>