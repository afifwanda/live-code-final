<template>
    <div>
        <h1> country list </h1>
        <div class="d-flex row justify-content-center">
        <div class="card text-center col-3 ml-2 mb-2" style="width: 18rem;" v-for="data in this.$store.state.countryList" :key="data.id">
        <div class="card-body">
            <h5 class="card-title text-warning">{{data.name}}</h5>
            <p class="card-text">cases : {{data.cases}}</p>
            <p class="card-text ">deaths : {{data.deaths}}</p>
            <p class="card-text">recovered : {{data.recovered}}</p>
        </div>
        </div>
        </div>   
    </div>    
</template>
<script>
export default {
    name: 'Countries',
    created(){
        this.getCountry()
    },
    methods: {
        getCountry(){
            this.$store.dispatch('getCountries')
        }
    }
}
</script>
