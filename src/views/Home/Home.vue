<template>
  <main>
    <transition name="fadeIn" mode="out-in">
      <Choice v-if="!choiceMade" :choiceMade="choiceMade" :choices="choices"/>
      <ChoicePicked v-else-if="choiceMade && selected" :choice="selected" />
    </transition>
  </main>
</template>

<script>
import Home from "./Home"

export default Home
</script>

<style lang="scss" scoped src="./Home.style.scss">
</style>