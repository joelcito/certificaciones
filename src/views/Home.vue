

<template>
  <HeaderMain />
  <!-- <v-row class="" no-gutters>
    <v-col cols="6" class="">
      <v-container >
        <v-card-text class="pa-9">
                    <v-row>
                      <v-col cols="12" class="text-center">
                        <h2 class="text-secondary text-h2 mt-8">SEGIP</h2>
                        <h4 class="text-disabled text-h4 mt-3">Sistema de Certificaciones en linea</h4>
                      </v-col>
                    </v-row>
                  </v-card-text>
      </v-container>
    </v-col>
  </v-row> -->
        

  <v-row class="h-screen vvcontainer" no-gutters>
    <!---Left Part-->
    <v-col cols="12" class="d-flex align-center bg-lightprimary">
      <v-container >
              <v-card elevation="0" >
                <v-card variant="outlined">
                  <v-card-text class="pa-9">
                    <!---Left Part Logo -->
                    <v-row>
                      <v-col cols="12" class="text-center">
                        <h2 class="text-secondary text-h2 mt-8">SEGIP</h2>
                        <h4 class="text-disabled text-h4 mt-3">Sistema de Certificaciones en linea</h4>
                      </v-col>
                    </v-row>
                    <v-row>
                      <h5 class="text-h5 text-center my-4 mb-8">Rapido, seguro y confiable - Certificaciones de cedula de identidad y de licencias de conducir</h5>
                      <v-col cols="12" sm="12">
                        <div class="menus">
                          <RouterLink  v-for="menu in menus"  :to="menu.link" :key="menu.id" href="">
                           <h4>{{menu.option}}</h4>
                          </RouterLink>
                        </div>                        
                      </v-col>                      
                    </v-row>
                    
                    <!-- <Main /> -->
                    
                  </v-card-text>
                </v-card>
              </v-card>

            
        
      </v-container>
    </v-col>
    <!---Left Part-->
  </v-row>

  <FooterMain />
</template>
<script setup lang="ts">
import Main from './principal/Main.vue'
import menus from '../data/mainMenu.json'
import HeaderMain from './principal/HeaderMain.vue'
import FooterMain from './principal/FooterMain.vue'
import {RouterLink} from 'vue-router'

import { ref } from 'vue';

const Regform = ref();

function validate() {
  console.log('krlos')
  return 1
  //Regform.value.validate();
}
</script>

<style lang="css">
.menus {
  display: flex;
}

.menus a {
  text-decoration:none;
  color: black;
  width: 50%;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.388);
  margin: 20px;
  text-align:center;
}

.mainstyle {
  max-width: 575px;
  margin: 0 auto;
}
.vvcontainer{
  background-color: rgba(0,0,0,0.11);
}
</style>
