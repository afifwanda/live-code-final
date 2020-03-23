<template>
    <div>
        <div class="login">
            <h2>Login Form</h2>

            <form action="" method="POST">
            <label for="fname">Username:</label><br>
            <input type="text" id="username" name="username" value="" v-model="username"><br>
            <label for="lname">Password:</label><br>
            <input type="password" id="password" name="password" value="" v-model="password"><br><br>
            <input type="submit" class="btn btn-warning" value="Login" v-on:click.prevent="login">
            </form> 
        </div>

    </div>
</template>
<script>
import axios from 'axios';

export default {
name: 'Login',
data(){
    return{
        baseUrl : 'http://localhost:3000',
        username : '',
        password: '',
    }
},
methods: {
    login(){
        axios({
            method: 'post',
            url: `${this.baseUrl}/login`,
            data: {
                username: this.username,
                password: this.password,
            },
        })
        .then(data=>{
            localStorage.setItem('token',data.data.token)
            this.$store.token = localStorage.getItem('token')
            console.log(this.$store.token)
            this.$router.push({name: 'Countries'})
        })
        .catch(err=>{
            console.log(err.err)
        })
    }
}
}
</script>