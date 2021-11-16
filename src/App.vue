<template>
  <div id="app">
    <div class="container">
      Rock Paper Scissors
    </div>
  </div>
</template>

<script>
import "@fontsource/barlow-semi-condensed/300.css"
import "@fontsource/barlow-semi-condensed/400.css"
import "@fontsource/barlow-semi-condensed/500.css"
import "@fontsource/barlow-semi-condensed/600.css"
import "@fontsource/barlow-semi-condensed/700.css"

export default {
    name: 'App',
    components: {
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: "Barlow Semi Condensed", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: white;
  background-image: radial-gradient(circle at 50% 0%, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  height: 100vh;
  /*margin-top: 60px;*/
}

.container {
  width: 90%;
  max-width: 700px;
  margin: auto;
}
</style>
