<template>
  <div id="app">
      <default-layout />
  </div>
</template>

<script>
import "@fontsource/barlow-semi-condensed/300.css"
import "@fontsource/barlow-semi-condensed/400.css"
import "@fontsource/barlow-semi-condensed/500.css"
import "@fontsource/barlow-semi-condensed/600.css"
import "@fontsource/barlow-semi-condensed/700.css"

import DefaultLayout from "./layouts/DefaultLayout";
import router from "./router"
import store from "./store"

export default {
    name: 'App',
    router,
  store,
    components: {
      DefaultLayout
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  margin: 0;
  font-size: 1.6rem;
  overflow-x: hidden;
}

#app {
  font-family: "Barlow Semi Condensed", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: white;
  background-image: radial-gradient(circle at 50% 0%, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  height: 100vh;
  padding-top: 4.8rem;

  @media screen and (max-width: 767px) {
    padding-top: 2.4rem;
  }
}

.container {
  width: 90%;
  max-width: 938px;
  margin: auto;
}

.container-sm {
  width: 90%;
  max-width: 700px;
  margin: auto;
}


// transitions
   .fadeIn-enter-active {
     transition: .15s linear;
     //line-height: 1
     opacity: 1;
   }

.fadeIn-leave-active {
  transition: .15s ease-in;
  //line-height: 1
  opacity: 1;
}

.fadeIn-enter, .fadeIn-leave-to {
  opacity: 0;
  transform: translateY(-.8rem) translateZ(0);
  //line-height: 0;
}



.fadeInSlow-leave-active, .fadeInSlow-enter-active  {
  transition: .3s .5s ease-out;
  //line-height: 1;
  transform: scale(1) translateZ(0);
}

.fadeInSlow-enter, .fadeInSlow-leave-to {
  opacity: 0;
  //line-height: 0;
  transform: scale(0.8) translateZ(0);
}

.grow-enter-active,
.grow-leave-active {
  transition: .15s linear;
  line-height: 1;
  transform: scale(1);
}

.grow-enter, .grow-leave-to {
  opacity: 0;
  line-height: 0;
  transform: scale(0);
}
</style>
