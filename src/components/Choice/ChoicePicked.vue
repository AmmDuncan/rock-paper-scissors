<template>
  <div :class="['container-sm', {'roundEnd': roundWinner}]">
    <div class="user-choice-wrapper">
      <transition name="fadeIn">
        <h2>You Picked</h2>
      </transition>
      <div :class="['user-choice', {winner: userWonOrDraw}]">
        <div v-if="userWonOrDraw" aria-hidden="true" class="bg"></div>
        <transition appear duration="1000" name="grow">
          <ChoiceButton :choice="choice" :class-list="['selected']"/>
        </transition>
      </div>
    </div>
    <transition name="fadeInSlow" :duration="1000">
      <div v-if="roundWinner" class="result">
        <h1 class="winner">
          {{ winner }}
        </h1>
        <button class="button" @click="resetGame">
          Play Again
        </button>
      </div>
    </transition>
    <div class="house-choice-wrapper">
      <h2 key="heading">The House Picked</h2>
      <div key="house-choice" :class="['house-choice', { winner: houseWonOrDraw}]">
        <div v-if="houseWonOrDraw" aria-hidden="true" class="bg"></div>
        <transition appear duration="300" mode="out-in" name="grow">
          <ChoiceButton v-if="houseChoice" :choice="houseChoice" :class-list="['selected']"/>
          <div v-else class="empty-choice"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ChoiceButton from "./ChoiceButton";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ChoicePicked",
  computed: {
    userWonOrDraw() {
      return this.roundWinner && (this.roundWinner === 'user' || this.roundWinner === 'draw')
    },
    houseWonOrDraw() {
      return this.roundWinner && (this.roundWinner === 'house' || this.roundWinner === 'draw')
    },
    winner() {
      const possibleWinners = {
        "user": "You Win",
        "house": "You Lose",
        "draw": "Draw"
      }
      return possibleWinners[this.roundWinner]
    },
    ...mapGetters(["houseChoice", "userChoice", "roundWinner"])
  },
  components: {ChoiceButton},
  props: ["choice"],
  methods: {
    checkWinner(user, house) {
      // 0 means draw, 1 means user wins, 2 means house wins
      // only true if user value is passed first and house second
      const powerRankings = {
        rock: {
          rock: 0,
          paper: 2,
          scissors: 1
        },
        paper: {
          rock: 1,
          paper: 0,
          scissors: 2,
        },
        scissors: {
          rock: 2,
          paper: 1,
          scissors: 0
        }
      }
      console.log(user, house)
      window.rankings = powerRankings
      return powerRankings[user.item][house.item]
    },
    ...mapActions(["houseChoose", "setRoundWinner", "resetGame", "incrementScore"])
  },
  watch: {
    houseChoice(val) {
      if (val && this.userChoice) {
        const result = this.checkWinner(this.userChoice, val)
        let winner;
        switch (result) {
          case 0:
            winner = "draw";
            break;
          case 1:
            winner = "user";
            break;
          case 2:
            winner = "house";
            break;
          default:
            winner = "draw";
        }
        this.setRoundWinner(winner)
        console.log(winner)
        if (winner === "user") {
          this.incrementScore()
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      const index = Math.floor(Math.random() * 3);
      console.log(index)
      this.houseChoose(index)
    }, 600)
  }
}
</script>

<style lang="scss" scoped>

h2 {
  margin: 0 auto 4rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  @media screen and (max-width: 768px) {
    margin-top: 3.2rem;
    font-size: max(1.4rem, 3.75vw);
    letter-spacing: 0.05em;
  }
}

.container-sm {
  display: grid;
  grid: 1fr / 1fr 1fr;
  column-gap: 7.2rem;
  transition: .15s ease-out;
  transform-origin: 0 0;

  &.roundEnd {
    grid: 1fr max-content / 1fr 1fr;
    transition: .5s ease-out;

    .result {
      display: flex;
      flex-flow: column;
      grid-row: 2/3;
      grid-column: 1/-1;
      width: 100%;

      .winner {
        height: 8.8rem;
        margin: 2rem 0 1.2rem;
        font-size: 6.4rem;
        font-weight: 600;
        letter-spacing: -0.03em;
        text-transform: uppercase;
      }

      .button {
        width: 22rem;
        height: 4.8rem;
        border: 0px;
        border-radius: 1rem;
        cursor: pointer;
        font-size: 1.8rem;
        background: #fff;
        color: hsl(229, 25%, 31%);
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.05em;
        transition: .15s ease-out;

        &:hover {
          transform: scale(1.03);
        }

        &:active {
          transform: scale(0.997);
        }
      }
    }

    @media screen and (min-width: 768px) {
      grid: 1fr / 1fr max-content 1fr;
      align-items: center;
      max-width: 938px;

      & > * {
        grid-row: 1/2;
      }

      .result {
        grid-row: 1/2;
        grid-column: 2/3;
      }
    }
  }

  @media screen and (max-width: 767px) {
    column-gap: 4rem;
  }
}

.container-sm > *, .house-choice-wrapper > span {
  display: flex;
  flex-flow: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-flow: column-reverse;

  }

  & > *:nth-child(2), .house-choice {
    position: relative;
    width: min(29.5rem, 35vw);
    height: min(29.5rem, 35vw);
    display: flex;
    align-items: center;
    justify-content: center;
  }

}


.empty-choice {
  width: min(22.4rem, 30vw);
  height: min(22.4rem, 30vw);
  background: rgba(0, 0, 0, .1);
  border-radius: 50%;
}


.user-choice, .house-choice {
  & > *:not(.bg) {
    z-index: 1;
  }

  &.winner {
    .bg, &::before, &::after {
      position: absolute;
      z-index: 0;
      width: 240%;
      height: 240%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) translateZ(0);
      pointer-events: none;
      background: #ffffff22;
      border-radius: 50%;
      transform-origin: 0 0;
      animation: fade-grow 2s linear infinite;
      opacity: 0;
    }

    .bg {
      //animation-delay: 1.2s;
    }

    &::before {
      content: "";
      animation-delay: 1.2s;
    }

    &::after {
      content: "";
      animation-delay: .63s;
    }
  }
}

@keyframes fade-grow {
  0% {
    transform: scale(0) translate(-50%, -50%) translateZ(0);
    opacity: 1;
  }
  100% {
    transform: scale(1) translate(-50%, -50%) translateZ(0);
    opacity: 0;
  }
}

//@keyframes up-down {
//  0% {
//    transform: translateY(-.5rem) scale(1.02) translateZ(0);
//  }
//  100% {
//    transform: translateY(.5rem) scale(0.997);
//  }
//}


</style>