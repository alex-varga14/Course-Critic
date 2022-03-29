<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #141041;">
    <div class="container-fluid">
        <router-link to="/" class="navbar-brand" >Course Critic</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                      <router-link to="/about" class="nav-link active" aria-current="page" href="#">About</router-link>
                </li>
                <li class="nav-item">
                      <router-link to="/contact" class="nav-link active" aria-current="page" href="#">Contact Us</router-link>
                </li>
                <li class="nav-item">
                      <router-link to="/guidelines" class="nav-link active" aria-current="page" href="#">Guidelines</router-link>
                </li>
                <li class="nav-item">
                      <router-link to="/terms" class="nav-link active" aria-current="page" href="#">Terms</router-link>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Menu </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li v-if="!authenticated" to="/login"><router-link to="/courselist" class="dropdown-item" href="#">All Courses</router-link></li>
                        <li v-else><router-link to="/coursesadmin" class="dropdown-item" v-on:click="stayAdmin()" href="#">Published Courses</router-link></li>

                        <li v-if="!authenticated" to="/login">  <router-link to="/add" class="dropdown-item" href="#">Suggest Course</router-link></li>
                        <li v-else><router-link to="/approve" class="dropdown-item" v-on:click="stayAdmin()" href="#">Suggested Courses</router-link></li>
                        
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <li v-if="!authenticated" to="/login"><router-link to="/login" class="dropdown-item" href="#">Admin Log In</router-link></li>
                        <li v-else><router-link to="/home" class="dropdown-item" v-on:click="logout()" href="#">Logout</router-link></li>
    
                    </ul>  
                </li> 
            </ul>
        </div>
    </div>
</nav>
    <div class="container mt-3">
      <router-view @authenticated="setAuthenticated"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return{
      authenticated: false
    }
  },
  mounted(){
    if(!this.authenticated){
      this.$router.push("home");
    }
  },
  methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            },
            stayAdmin(){
              this.$emit("authenticated", true);
            }
        }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFFFFF;
  background-color: #FFFFFF;
}
</style>