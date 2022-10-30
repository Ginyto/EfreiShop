<template>
  <div id="authzone">
    <input type="text" class="saisieInput" v-model.lazy="mail" v-show= !login placeholder="Mail">
   
    <input type="text" class="saisieInput" v-model.lazy="name"  v-show= login  placeholder="Name">

        <input type="text" class="saisieInput" v-model.lazy="lastname" v-show= login  placeholder="Lastname">

        <input type="password" class="saisieInput" v-model.lazy="password" v-show= !login placeholder="Password">
      
        <input type="password" class="saisieInput" v-model.lazy="passwordd" v-show= login 
          placeholder="Confirm your Password">
      
          <button class="btn" @click=uploadUser() v-show=login>  sign up</button>
          <button class="btn" @click="loginUser()" v-show=!login>  log in </button>
          <h1>Welcome {{user.name}} </h1>
  </div><div>
   
  </div>
 
  <widget-container-modal />
</template>


<script>


import axios from 'axios';
import router from '../router/index'


export default {

    


  created() {},
  data() {
    return {

    
    
      close:true,
      login : false,
       mail: null,
       password: null,
      name: null,
      lastname: null,
      url : "http://localhost:3000/login/",

      user: {
        token: null,
        auth: false
      }
    };
  },

  props: {},

  methods: {
   
    close(){
      close=!close;
    },

    async uploadUser() {

  if (this.password === this.passwordd && this.mail !== '' && this.name !== '' && this.lastname !== '' && this.password !== '') {

  await axios.post(this.url + 'signup', {}, {

    params: {
  
      mail: this.mail,
      name: this.name,
      lastname: this.lastname,
      password: this.password

    }

  })
    .then(response => {
      console.log(response)

      if (response.data.sign == false) {
        alert('Mail already exists')
        this.mail = ''
      }
      else {
        alert('You are now registered')
      
        this.mail = ''
        this.name = ''
        this.lastname = ''
        this.password = ''
        this.passwordd = ''
        
      }
      
    })
    .catch(error => {
      
      console.log(error)

    })
  
} else {

  if (this.password !== this.passwordd) {
    alert('Your passwords are not the same')
  }
  else {
    alert('You have to fill all the fields')
  }
  
}
},



    async loginUser() {

if (this.mail != '' && this.password != '') {

  await axios.post(this.url + 'login', {}, {

    params: {
     
      mail: this.mail,
      password: this.password,

    }

  }).then(response => {

    const currentUser = response.data.user
    const token = response.data.token

    console.log(response)

    
    const user = {

      id: currentUser.id,
   
      name: currentUser.name,
      lastname: currentUser.lastname,
      mail: currentUser.mail,
      password: currentUser.password,
      token: 'Bearer ' + token,
      auth: true

    }

    // console.log(user)

    sessionStorage.setItem('user', JSON.stringify(user))
    this.user =  JSON.parse(sessionStorage.getItem('user'))


    alert('you are connected')

  }).catch(error => {

    alert('mail or password is incorrect')
    console.log(error)
  })

}
else {

  alert('You have to fill all the fields')

}
},
  },

};
</script>

<style lang="css" scoped>

#authzone {
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 1.5vh;
  background-color: rgb(45, 30, 30);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn {
  width: 30vh;
  height: fit-content;

  border-radius: 1vh;


  color: black;
  font-weight: bold;

  font-size: 2vh;

  padding: 1vh;

  margin: 1vh;

  cursor: pointer;

  background: linear-gradient(to left, #2a2c2e, #c3c3c3);


}

</style>