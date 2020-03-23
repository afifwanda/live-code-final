<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/countries">Country List</router-link>  |
      <router-link to="/report">Report</router-link> |
      <h5 class="text-danger" v-on:click.prevent="logout"> Logout </h5>
    </div>
</template>
<script>
export default {
    methods:{
        logout(){
            localStorage.removeItem('token')
            this.$store.state.token = null
            this.$router.push({name: 'Login'})
        }
    }
}
</script>