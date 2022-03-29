<template>
  <div class="page" id="login">
        <div class="title text-center">
          Administration Login
        </div>
        <div v-if="invalid&&submitted">
        <div class="invalid text-center">
          The username or password you have entered is incorrect. Please try again
        </div>
        <button type="submit" v-on:click="retry" class="btn btn-success retry-btn">Retry Login</button>
        </div>
        <form v-else>
          <div class="login-message text-center">
              <p>Good news! Regular users don't need to create or use an account to leave reviews or 
                search for a course. This login page is for registered site administrators only.</p>
          </div>
          <div id="inline4" class="login-group">
            <div class="form-group username">
            <label for="username">Username</label>
            <input type="text" class="form-control" name ="Username" id="username" v-model=Admin.username>
          </div>
          <div class="form-group password">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="Password" id="password" v-model=Admin.password >
          </div>
        </div>
        
        <button type="submit" v-on:click="login" class="btn btn-success login-submit-btn">Login</button>
    </form>
  </div>
</template>

<script>
  import AdminDataService from "../services/AdminDataService";
    export default {
        name: 'login',
        data() {
            return {
                Admin: [],
                invalid: true,
                submitted: false
            };
        },
        mounted(){
          if(this.submitted&&!this.invalid)
            this.$router.push({name: "admin"});
        },
        methods: {
            login() {
              this.submitted=true;
              
              //call request from AdminDataService
              AdminDataService.authenticate(this.Admin.username, this.Admin.password)
                .then( response => {
                    //empty response->invalid info
                  if(response.data.length == 0){
                    this.Admin = response.data;
                    console.log(response.data);
                    this.invalid = true;
                  }
                  //valid credentials->forward to admin course list page
                  else{
                    this.invalid=false;
                    this.$emit("authenticated", true);
                    this.$router.push({name: "admin"});
                  }
                })
                .catch(e => {
                  console.log(e);
                });
            },

            retry(){
              this.submitted=false;
            }
        }
    }
</script>

<style>
.page{
  margin-top: 30px;
  margin-left: 190px;
  width: 70%;
}

.title{
  font-weight: 300;
  font-size: 40px;
  line-height: 60px;
  color: #000000;
  width: auto;
  margin: auto;
  margin-bottom: 40px;
  margin-top: 30px;
  margin-right: -30px;
  margin-left: -30px;
}

.login-group {
  margin-left: -75px;
}

#inline4{
  width:100%;
  height:auto;
  background-color:white;
  display:flex;
  margin-bottom: 40px;
}

.username{
  margin-left: 290px;
  color: black;
}

.password{
  margin-left: 100px;
  color: black;
}

.login-submit-btn{
  width: 250px;
  margin-left: 320px;
  margin-bottom: 30px;
}

.invalid{
  width: 50%;
  background: #ffcccb;
  color: black;
  border: 1px dotted red;
  font-size: 20px;
  margin-left: 230px;
  margin-bottom: 40px;
}

.login-message{
  width: 70%;
  color: grey;
  font-size: 15px;
  margin-left: 120px;
  margin-top: -20px;
  margin-bottom: 30px;
}

.retry-btn{
  width: 250px;
  margin-left: 320px;
  margin-bottom: 30px;
}

.ant-popover-arrow {
  border-color: #0c0926 !important;
}
.ant-popover-inner-content {
  background-color: #0c0926 !important;
}
</style>