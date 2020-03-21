<style lang="css">
    .appbar-color-light{
        background: #f9f9f9 !important;
    }
    .slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);

}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);

}
</style>

<template>
  <v-app class="appbar-color-light">
    <AppBar/>
    <v-content>
      <v-container grid-list-xs>
        <transition 
       :name="transitionName"
        mode="out-in"
        @beforeLeave="beforeLeave">
          <router-view></router-view>
        </transition>
          <vue-progress-bar></vue-progress-bar>
      </v-container>
    </v-content>
    <BottomNav/>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import BottomNav from './components/BottomNav'
const DEFAULT_TRANSITION = 'fade';
export default {
  name: 'App',

  components: {
    AppBar,
    BottomNav
  },

  data: () => ({
    prevHeight: 0,
    transitionName: DEFAULT_TRANSITION,
  }),
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === 'slide') {
       const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    });
  },
  methods: {
     beforeLeave(element) {
       this.prevHeight = getComputedStyle(element).height;
     }
  }
};
</script>
