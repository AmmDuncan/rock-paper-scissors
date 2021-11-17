import paperIcon from "../assets/images/icon-paper.svg"
import scissorsIcon from "../assets/images/icon-scissors.svg"
import rockIcon from "../assets/images/icon-rock.svg"

export const defaultChoices = () => {
  return [
    {item: "paper", image: paperIcon, active: false},
    {item: "scissors", image: scissorsIcon, active: false},
    {item: "rock", image: rockIcon, active: false},
  ]
}

export const defaultState = () => {
  return {
    choices: defaultChoices(),
    playing: false,
    userChoice: null,
    houseChoice: null,
    roundWinner: null,
  }
}