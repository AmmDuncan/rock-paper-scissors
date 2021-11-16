<template>
  <div>
    <game-header></game-header>
    <router-view></router-view>
  </div>
</template>

<script>
import GameHeader from "../components/Header.vue"

export default {
  name: "DefaultLayout",
  components: {GameHeader }
}
</script>

<style scoped>

</style>