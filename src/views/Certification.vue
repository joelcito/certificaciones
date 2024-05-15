

<template>
  <HeaderMain />

<!-- krlos start -->
  <div class="headercerti">

    <router-link to="/">
      <v-btn class="mx-4 white--text" elevation="0" x-large rounded color="orange darken-1" to="/">
        Volver
      </v-btn>
    </router-link>    

    <v-card>
      <v-app>
        <v-row>
          <v-col col="12" lg="12" md="12" sm="12">
            
              <v-container class="sameheight">

                <v-stepper 
                class="custom" 
                alt-labels
                  :items="timeLineMenu"
                  hide-actions
                  v-model="step"
                >
                
                  <template v-slot:item.1>
                    
                      <v-card title="Politicas de Privacidad " color="#F8983D" flat class="rounded-card ">
                        <v-sheet color="#fff" elevation="3" rounded="lg">
                          <v-tabs
                            v-model="tab"
                            :items="tabs"
                            align-tabs="center"
                            color="F8983D"
                            height="60"
                            slider-color="#f78166"                  
                          >
                          
                            <template v-slot:tab="{ item }" >
                              <v-tab
                                :prepend-icon="item.icon"
                                :text="item.text"
                                :value="item.value"
                                class="text-none"
                              ></v-tab>
                            </template>

                            <template v-slot:item="{ item }" >
                              <v-tabs-window-item :value="item.value" class="pa-8">
                                <ol>
                                  <li v-for="term in item.content">
                                    {{ term.term }}
                                  </li>
                                </ol>
                              </v-tabs-window-item>
                            </template>
                          
                          </v-tabs>

                          <v-form v-model="isFormValid">
                              <v-card-text>
                                <!-- <v-checkbox v-model="swpoliticas" :rules="politicasRules"  label="Aceptar politicas?"></v-checkbox> -->
                                <v-checkbox
                                  :true-value="1"
                                  :false-value="0"
                                  :rules=politicasRules
                                  v-model="swpoliticas"
                                  label="Aceptar politicas?"
                                  />                                
                              </v-card-text>
                          </v-form>  


                                                  
                        </v-sheet>
            
                      </v-card>
                    
                  </template>
                  
                  
                  <template v-slot:item.2>            
                    <v-card title="step 2 " color="#F8983D" flat class="rounded-card">
                      <v-sheet color="#fff" elevation="3" rounded="lg">
                        <div >
                          <formInfoPerson />    
                          <v-form v-model="isFormValid">
                            <v-card-text>
                              <v-text-field  v-model="email" :rules="emailRules" :counter="50"
                                  label="Email" minlength="5"  maxlength="50"  required
                              ></v-text-field>
                            </v-card-text>
                          </v-form>                                              
                        </div>
                      </v-sheet>
                    </v-card>
                  </template>
                
                  <template v-slot:item.3>
                    <v-card title="Step 3 " color="#F8983D" flat class="rounded-card">
                      <v-sheet color="#fff" elevation="3" rounded="lg">
                        <DataVerification />
                      </v-sheet>
                    </v-card>
                  </template>
              
                </v-stepper>

                <v-card-actions>
                    <!-- <v-btn  text @click="step--"> -->
                    <v-btn  text @click="nextstep('prev',step)">
                      Atras
                    </v-btn>
                    <v-spacer></v-spacer>
                    <!-- <v-btn  color="primary" depressed @click="step++"> -->
                      
                    <v-btn :disabled="!isFormValid" color="primary"  @click="nextstep('con',step)">
                      Siguiente
                    </v-btn>
                  </v-card-actions>                  

              </v-container>
            
          </v-col>
        </v-row>
      </v-app>
    </v-card>
    
  </div>
<!-- krlos end -->
  <FooterMain />
</template>
<script setup >

import Main from './principal/Main.vue'
import menus from '../data/mainMenu.json'
import HeaderMain from './principal/HeaderMain.vue'
import FooterMain from './principal/FooterMain.vue'
import timeLineMenu from '../data/timeLineMenu.json'
import {RouterLink} from 'vue-router'
import { createVuetify } from 'vuetify'
import { ref, reactive, computed, createApp } from 'vue';

import imageSegip from "../assets/compu.png"
import ciMain from "../assets/cimain.png"
import formInfoPerson from './formInfoPerson.vue'
import DataVerification from './DataVerification.vue'




const step = ref(1)
let isFormValid = ref(false)


let swpoliticas = ref(false)
const politicasRules = reactive([v => !!v || 'You must agree to continue!'])


const email= ref("")
const emailRules = reactive( [
    v => !!v || "Email is required",
    (v) =>
    v.length >= 5 ||
    "The e-mail address must contain at least 5 characters",
    (v) =>
    v.length <= 50 ||
    "The e-mail address cannot be longer than 50 characters",
    v => /.+@.+/.test(v) || "Please enter a valid email address"]
    )




const tab = ref('tab-1')
const tabs = reactive([


      {
        icon: 'mdi-book-open-page-variant',
        text: 'ACEPTACIÓN DE LOS TERMINOS',
        value: 'tab-1',
        content: [
          {
            id:1,
            term:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            id:2,
            term:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            id:3,
            term:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
        ]
      },
      {
        icon: 'mdi-handshake-outline',
        text: 'RESPONSABILIDADES',
        value: 'tab-2',
        content: [
          {
            id:1,
            term:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            id:2,
            term:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            id:3,
            term:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
        ]
      },
      {
        icon: 'mdi-license',
        text: 'DECLARACIÓN',
        value: 'tab-3',
        content: [
          {
            id:1,
            term:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            id:2,
            term:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            id:3,
            term:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
        ]
      },
    ]
    )
const icons = reactive( [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ])

const Regform = ref();

function validate() {
  console.log('krlos')
  return 1
  //Regform.value.validate();
}
function nextstep(opt, num){
  isFormValid.value = false
  console.log('disabled ',isFormValid.value)  

  if(opt == 'prev'){
    step.value = step.value - 1
  }
  if(opt == 'con'){
    step.value = step.value + 1
  }
  
}

/*function valPoliticas(){
  isFormValid.value = !!swpoliticas.value    
  console.log('change method', isFormValid.value)
  return;
}*/

</script>

<style lang="css">

.sameheight {
  margin-top: 8%;
}
.rounded-card{
  border-radius:20px;
  display: inline-block;
  position: relative;
  width: 100%;
  
}
.stepper-number {
  background-color: yellow;
  color: red;
}
 .stepper-header {
  background-color: #17527E;
}

.stepper-content {
  border-top: 1px solid #ccc;
}

.step-label {
  color: #424242;
}

.step-active {
  color: #1976d2;
}

.step-hover:hover {
  background-color: #bbdefb;
}

.stepper-item {
  transition: background-color 0.3s ease;
}

.stepper-item:hover {
  background-color: #e3f2fd;
}

.check-accept {
  position: relative;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
}

/* working down */
.v-stepper-header  {
background-color: #fff;  /* Añade el color que prefieras */
}

.custom  {
background-color: #fff;  /* Añade el color que prefieras 4b768a */
}

.v-stepper-actions  {
background-color: #fff;  /* Añade el color que prefieras */
}

@media (max-width: 710px) {
/* Estilos para pantallas pequeñas, ajusta según necesites */
.v-stepper-item__title {
  display: none;  /* Oculta el texto en resoluciones menores */
}
}
/* Media queries para ajustar el estilo en diferentes tamaños de pantalla */
@media (max-width: 768px) {
.v-toolbar-title__placeholder {
  font-size: 17px; /* Reduce el tamaño de la fuente */
  white-space: normal; /* Permite que el texto se divida en nuevas líneas */
}
}

@media (max-width: 480px) {
.v-toolbar-title__placeholder {
  font-size: 16px; /* Reduce aún más el tamaño de la fuente para pantallas pequeñas */
}
}


.mainbuton {
    border-radius: 8px !important;
    border-color: #F58C31 !important;
    color: #F58C31  !important;
    background-color: #F58C31 !important;
    text-decoration: none !important;
    max-width: auto;
    font-size-adjust: auto;
    margin: 1px;
    width: 50%;
    height: 20%;
    
    &:hover {
        background-color: #006AA6 !important;
        color: #006AA6 !important;
        text-decoration-color: #006AA6 !important;
        border-color: #006AA6 !important;
        margin: 1px;
        span {
            color: white !important;
        }
    }
}


.vcardoption{
  border-radius: 30px;
  text-align: center;
}

.menus {  
    
    width: 100%;
    height: 100%;
    z-index: 10;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: left;
    font-size: 5px;
    
}

.menus a {
  text-decoration:none;
  color: #025B80;
  width: 50%;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.388);
  margin: 10px;
  text-align:center;
  font-size: 5px;
}

.mainstyle {
  max-width: 575px;
  margin: 0 auto;
}
.vvcontainer{
  background-color: rgba(0,0,0,0.11);
}




</style>


<style scoped>
@import '../assets/rubic.css'

</style>