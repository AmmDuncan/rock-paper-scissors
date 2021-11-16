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
export default {
    name: 'App',
    router,
    components: {
      DefaultLayout
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  margin: 0;
  font-size: 1.6rem;
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
</style>
