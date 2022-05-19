import Vuex from "vuex";
import Vue from "vue";
import about from "./about";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    about,
  },
  strict: true,
});
