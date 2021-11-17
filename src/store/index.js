import Vue from "vue"
import Vuex from "vuex";

import {defaultState} from "./utils";

Vue.use(Vuex)

export const state = {
  score: parseInt(localStorage.getItem("score")) || 0,
  ...defaultState()
}

export const mutations = {
  "SET_PLAY": (state, payload) => {
    state.playing = payload
  },
  "SET_ACTIVE": (state, payload) => {
    state.choices.forEach(choice => choice.active = false)
    const choice = state.choices.find(choice => choice.item === payload)
    choice.active = true
    state.userChoice = choice;
  },
  "HOUSE_CHOOSE": (state, payload) => {
    state.houseChoice = state.choices[payload];
  },
  "SET_ROUND_WINNER": (state, payload) => {
    state.roundWinner = payload
  },
  "RESET_GAME": (state) => {
    const defaults = defaultState()
    for(let key in defaults) {
      state[key] = defaults[key]
    }
  },
  "INCREMENT_SCORE": (state) => {
    state.score = state.score + 1;
    localStorage.setItem("score", state.score)
  }
}

export const actions = {
  setPlay({commit}, payload){
    commit("SET_PLAY", payload)
  },
  setActive({commit}, payload){
    commit("SET_ACTIVE", payload)
  },
  houseChoose({commit}, payload){
    commit("HOUSE_CHOOSE", payload)
  },
  setRoundWinner({commit}, payload) {
    commit("SET_ROUND_WINNER", payload)
  },
  resetGame({commit}) {
    commit("RESET_GAME")
  },
  incrementScore({commit}){
    commit("INCREMENT_SCORE")
  }
}

export const getters = {
  playing: (state) => state.playing,
  choices: state => state.choices,
  userChoice: state => state.userChoice,
  houseChoice: state => state.houseChoice,
  roundWinner: state => state.roundWinner,
  score: state => state.score
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})