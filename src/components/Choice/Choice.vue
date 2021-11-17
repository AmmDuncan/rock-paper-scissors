<template>
  <div class="buttons">

    <svg :class="['triangle', 'animate', {'hide': choiceMade}]" viewBox="0 0 305 277"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z" fill="none" opacity=".3"
            stroke="#000" stroke-width="15"/>
    </svg>

    <ChoiceButton v-for="choice in choices"
                  :key="choice.item"
                  :choice="choice"
                  :choice-made="choiceMade" :clickable="true"/>


  </div>
</template>

<script>
import Choice from "./Choice"

export default Choice
</script>

<style lang="scss" scoped src="./Choice.style.scss">
</style>