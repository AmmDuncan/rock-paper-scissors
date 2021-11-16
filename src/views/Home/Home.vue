<template>
  <main>
    <div class="buttons">

      <svg class="triangle animate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305 277">
        <path d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z" fill="none" opacity=".3"
              stroke="#000" stroke-width="15"/>
      </svg>

      <div class="button paper">
        <div class="icon">
          <img alt="paper" src="../../assets/images/icon-paper.svg">
        </div>
      </div>

      <div class="button scissors">
        <div class="icon">
          <img alt="scissors" src="../../assets/images/icon-scissors.svg">
        </div>
      </div>

      <div class="button rock">
        <div class="icon">
          <img alt="rock" src="../../assets/images/icon-rock.svg">
        </div>
      </div>

    </div>
  </main>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="scss" src="./Home.style.scss" scoped>
</style>