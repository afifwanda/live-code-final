<template>
    <div>
        <h1> country list </h1>
        <div class="d-flex row justify-content-center">
        <div class="card text-center col-3 ml-2 mb-2" style="width: 18rem;" v-for="data in this.$store.state.reportList" :key="data.id">
        <div class="card-body">
            <h5 class="card-title text-warning">{{data.CountryId}}</h5>
            <p class="card-text">report : {{data.report}}</p>
            <input type="button" class="btn btn-danger" value="delete" v-on:click.prevent="deleteReport(data.id)">
        </div>
        </div>
        </div>   
    </div>    
</template>
<script>
export default {
    name: 'Report',
    created(){
        this.getReports()
    },
    methods: {
        getReports(){
            this.$store.dispatch('getReport')
        },
        deleteReport(id){
            this.$store.dispatch('deleteReport',id)
        },
    }
}
</script>
