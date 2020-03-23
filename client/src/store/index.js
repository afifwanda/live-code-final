import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countryList : null,
    reportList: null,
    token : null
  },
  mutations: {
    viewCountries(state,data){
      state.countryList = data;
    },
    viewreports(state,data){
      state.reportList = data;
    },
  },
  actions: {
    getCountries(context){
        axios({
          method: 'get',
          url: 'http://localhost:3000/countries',
          headers: { token:localStorage.getItem('token') },
      })
      .then(data=>{
        context.commit('viewCountries',data.data)
      })
      .catch(err=>{
        console.log(err.err)
      })
    },
    getReport(context){
      axios({
        method: 'get',
        url: 'http://localhost:3000/reports',
        headers: { token:localStorage.getItem('token') },
    })
    .then(data=>{
      context.commit('viewreports',data.data)
    })
    .catch(err=>{
      console.log(err.err)
    })
    },
    deleteReport(context,id){
      axios({
        method: 'delete',
        url: `http://localhost:3000/delete/${id}`,
        headers: { token:localStorage.getItem('token') },
    })
    .then(data=>{
      console.log(data)
      context.dispatch('getReport')
    })
    .catch(err=>{
      console.log(err.err)
    })
    },
  },
  modules: {
  }
})
