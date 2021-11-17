import {mapActions, mapGetters} from "vuex";
import Choice from "../../components/Choice";
import ChoicePicked from "../../components/Choice/ChoicePicked";

export default {
  name: "Home",
  components: {ChoicePicked, Choice},
  data: () => ({
    selected: null
  }),
  methods: {
    ...mapActions(["setActive"]),
  },
  computed: {
    choiceMade () {
      const selected = this.choices.find(c => c.active === true);
      this.selected = selected;
      return selected;
    },
    ...mapGetters(["choices"])
  },
  created: function () {
    this.choices = this.$store.getters.choices
  }
}