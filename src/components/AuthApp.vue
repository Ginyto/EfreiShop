<template>
  <div id="authzone">
    <h1  v-show=login >Welcome {{user.name}} </h1>
    <input type="text" class="saisieInput" v-model.lazy="mail" v-show= !login placeholder="Mail">
   

        <input type="password" class="saisieInput" v-model.lazy="password" v-show= !login placeholder="Password">
      
       
   
          
          <button class="btn" @click=loginUser() v-show=!login>  log in </button>
         
           
  </div><div>
    <button class="btn" @click=showModall()>showModal </button>
          <transition name="fade" appear>
        <div class="modal-overlay" v-if="!showModal" v-show=!showModal ></div>
          </transition>
          <Transition name="slide" appear  v-show=!showModal>
            <div class="modal" >
            <input type="text" class="saisieInput" v-model.lazy="mail" placeholder="Mail">
            <div></div>
            <input type="text" class="saisieInput" v-model.lazy="name"  placeholder="Name">
            <div></div>
           <input type="text" class="saisieInput" v-model.lazy="lastname"   placeholder="Lastname">
           <div></div>
        <input type="password" class="saisieInput" v-model.lazy="password"  placeholder="Password">
        <div></div>
        <input type="password" class="saisieInput" v-model.lazy="passwordd" 
          placeholder="Confirm your Password">
          <button class="btn" @click=uploadUser() >  sign up</button>
           
        </div>
          </Transition>
  </div>
  
</template>


<script>


import axios from 'axios';



export default {

  created() {},
  data() {
    return {


    showModal:true,
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
   
    showModall(){
      this.showModal = !this.showModal;
      console.log("ça change")
    },

    logmode() {
      this.login = !this.login
    
    },

    async uploadUser() {

  if (this.password === this.passwordd && this.mail !== '' && this.name !== '' && this.lastname !== '' && this.password !== '') {

  await axios.post(this.url + 'signup', {}, {

    params: {
  
      mail: this.mail,
      name: this.name,
      lastname: this.lastname,
      password: this.password,
     

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
        this.showModall()
      
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

  await axios.post(this.url + '/login', {}, {

    params: {

      mail: this.mail,
      password: this.password,

    }

  }).then(response => {

    const currentUser = response.data.user
    const token = response.data.token

    console.log(response)

    this.role = currentUser.role

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

    this.user=  JSON.parse(sessionStorage.getItem('user'))

    this.logmode()
  }).catch(error => {

    alert('Identification or password is incorrect')
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

.modal-overlay{
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:98;
  background-color: rgba(0, 0,0 ,0.3);


}
h1{
  color:rgb(255, 255, 255);
  font-size:32px;
  font-weight: 900;
  margin-bottom: 15px;
}
.modal{
  position:fixed;
  top:50%;
  left: 50%;
  transform: transltae(-50%,-50%);
  z-index:99;

  width :100%;
  max-width:300px;
  background-color:  rgba(0, 0,0 ,0.85);
  border-radius: 16px;

  padding : 25px;
}
.fade-enter-active,
.fade-leaave-active{

  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.slide-enter-active,
.slide-leaave-active{

  transition: transform 10s;
}
.slide-enter,
.slide-leave-to{
transform : translateY(-50%) translateX(100vw);
}

#authzone {
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 1.5vh;
  background-color: rgb(34, 34, 34);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn {
  width: 15vh;
  height: fit-content;

  border-radius: 1vh;


  color: black;
  font-weight: bold;

  font-size: 2vh;

 

  margin: 1vh;

  cursor: pointer;

  background: linear-gradient(to left, #2a2c2e, #c3c3c3);
  appearance:none;
  display: inline-block;
  padding :15px 25px;





}



</style>