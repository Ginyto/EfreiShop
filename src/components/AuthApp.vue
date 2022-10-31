<template>

  <div id="authzone">

    <div id="login" v-auto-animate >

      <Icon icon="line-md:account" class="icons" @click="login = true" v-show="!login" />

      <Icon icon="line-md:account-add" class="icons" @click="signup = !signup" v-show="login && !signup" :style="{ color: 'rgb(76, 255, 133)' }" />

      <Icon icon="line-md:account-delete" class="icons" @click="signup = !signup" v-show="signup" :style="{ color: 'rgb(255, 72, 72)' }" />


      <input v-show="signup" type="text" placeholder="Name" class="input" v-model="name">

      <input v-show="login" type="text" placeholder="Mail" class="input" v-model="mail">

      <input v-show="login" type="password" placeholder="Password" class="input" v-model="password">

      <input v-show="signup" type="password" placeholder="Confirm" class="input" v-model="confirm">

      <Icon v-show="login && !signup" icon="line-md:chevron-double-right" class="icons" @click="login = false, signup = false "  :style="{ color: 'rgb(76, 255, 133)' }" />

      <Icon v-show="login && signup" icon="line-md:upload-loop" class="icons" @click="signUser()" :style="{ color: 'rgb(76, 255, 133)' }" />

    </div>


  </div>
  
</template>


<script>

import { Icon } from '@iconify/vue';
import axios from 'axios';


export default {

  created() { },

  data() {

    return {

      url: "http://localhost:3000/login/",

      login: false,
      signup: false,

      name: "",
      mail: "",
      password: "",
      confirm: ""
    }

  },

  methods: {

    async signUser() {

      if (this.name && this.mail && this.password && this.confirm != "" && this.password === this.confirm) {

        await axios.post(this.url + 'signup', {

          name: this.name,
          mail: this.mail,
          password: this.password

        }).then(response => {

          console.log(response.data);

          if (response.sign == true) {

            this.login = false;
            this.signup = false;

          }
          else {

            alert("Mail already used");
            this.mail = "";

          }

        }).catch(error => {

          console.log(error);

        });

      } else {

        if (this.name == "") {

          alert("Please enter a name");

        } else if (this.mail == "") {

          alert("Please enter a mail");

        } else if (this.password == "") {

          alert("Please enter a password");

        } else if (this.confirm == "") {

          alert("Please confirm your password");

        }

        else if (this.password != this.confirm) {

          alert("Passwords don't match");

        }

      }
    

  
    }

  },

  components: { Icon }

};

</script>

<style lang="css" scoped>

#authzone {
  display: flex;
  width: fit-content;
  height: 6vh;
  padding: 1.5vh;
  border: 1px solid white;
  border-radius: 1vh;
  justify-content: center;
  align-items: center;

  margin-bottom: 3vh;

  color: white;
}

#login{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.icons {
  font-size: 3vh;
  
  cursor: pointer;
}

.input {
  width: 8vw;
  height: 4vh;
  margin: 1vh;
  padding: 1vh;
  border: none;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  color: #222;
}


</style>