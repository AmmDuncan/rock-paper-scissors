<template>
  <div
      :class="['button', choice.item, ...classList]"
      @click="clickable ? setActive(choice.item) : () => {}">
    <div class="icon">
      <img :alt="choice.item" :src="choice.image">
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ChoiceButton",
  props: ['choice', "classList", "clickable"],
  methods: {
    ...mapActions([
      "setActive"
    ])
  }
}
</script>

<style lang="scss" scoped>

/* ==========================================
          CHOICE BUTTON STYLES
============================================= */

.button {
  position: absolute;
  width: min(17rem, 35vw);
  height: min(17rem, 35vw);
  padding: min(2rem, 3vw);
  margin: auto;
  cursor: pointer;
  background: grey;
  border-radius: 50%;
  box-shadow: 0 .8rem 1px rgba(0, 0, 0, .6);
  transition: .25s ease-out;
  will-change: transform;
  transform: translateZ(0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.995);
    box-shadow: 0 0.2rem 0 rgba(0, 0, 0, .2);
  }

  .icon {
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 .8rem 1px rgba(0, 0, 0, .2) inset;

    img {
      height: min(7.2rem, 11vw);
    }
  }

  &.rock {
    background-image: linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%));
    box-shadow: 0 .8rem 0 #9E153488;
  }

  &.scissors {
    background-image: linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%));
    box-shadow: 0 .8rem 0 #EA9E1488;
  }

  &.paper {
    background-image: linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%));
    box-shadow: 0 .8rem 0 #2743C088;
  }

  &.selected {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 !important;
    padding: 3.2rem;

    @media screen and (max-width: 992px) {
      padding: min(3vw, 2.8rem);
    }

    &:hover, &:active {
      transform: none;
    }
  }

  @media screen and (min-width: 768px) {
    width: 19rem;
    height: 19rem;
    padding: min(2rem, 4vw);

    &:first-of-type {
      margin-left: -27%;
    }

    &:nth-of-type(2) {
      top: 0;
      right: 0;
      margin-right: -27%;

    }

    &:nth-of-type(3) {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: -24%;

      &:hover {
        transform: translateX(-50%) scale(1.05);
      }

      &:active {
        transform: translateX(-50%) scale(.995);
      }
    }
  }
}

.buttons > .button {
  &:first-of-type {
    top: 1rem;
    left: 0;
    margin-left: max(-30%, -6vw);
  }

  &:nth-of-type(2) {
    top: 1rem;
    right: 0;
    margin-right: max(-30%, -6vw);
  }

  &:nth-of-type(3) {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateZ(0);
    margin-bottom: max(-30%, -7vw);

    &:hover {
      transform: translateX(-50%) scale(1.05);
    }

    &:active {
      transform: translateX(-50%) scale(.995);
    }
  }

}

</style>