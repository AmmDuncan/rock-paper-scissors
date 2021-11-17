<template>
  <div class="container-sm">
    <header class="header">
      <img src="../assets/images/logo.svg" alt="" class="logo">
      <section class="score">
        <h2>Score</h2>
        <p class="number">{{score}}</p>
      </section>
    </header>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["score"])
  }
}
</script>

<style lang="scss" scoped>
  .header {
    // structure
    display: grid;
    grid: 11.4rem / min(20vw, 15.8rem) min(30vw, 15rem);
    justify-content: space-between;
    align-items: center;
    border-radius: 1.6rem;
    margin: 0 0 8rem;
    padding: 1.8rem 2.4rem;

    @media screen and (max-width: 767px) {
      grid: 8rem / min(30vw, 15.8rem) min(22vw, 15rem);
      margin: 0 0 6.4rem;
      border-radius: .8rem;
      padding: 1.2rem 1.4rem 1.2rem 2rem;
    }

    // skin
    border: 2px solid hsl(217, 16%, 45%);

    .logo {
      width: 100%;
    }

    .score {
      height: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      border-radius: .8rem;
      background: #fff;

      h2 {
        margin: 2rem 0 1.4rem;
        text-transform: uppercase;
        letter-spacing: calc(1em * 0.1);
        font-weight: 600;
        font-size: 1.6rem;
        color: hsl(229, 64%, 46%);
      }

      .number {
        margin: 0;
        color: hsl(229, 25%, 31%);
        font-size: 5.4rem;
        font-weight: 700;
        line-height: 4rem;
      }

      @media screen and (max-width: 767px) {
        h2 {
          margin: 1.2rem auto .2rem;
          font-size: 1.2rem;
        }

        .number {
          font-size: 4.4rem;
        }
      }
    }
  }
</style>