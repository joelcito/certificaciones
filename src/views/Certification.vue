<template>
    <HeaderMain />          
  
    <v-row class="h-screen vvcontainer" no-gutters>
      <!---Left Part-->
      <v-container >
        <v-card>
            <v-timeline direction="horizontal" side="start">
                <v-timeline-item 
                v-for="item in timeLineMenu"
                :key="item.name"
                :dot-color="item.color"
                fill-dot
                >
                <v-card class="pa-5" elevation="0" border>
                    <h3>{{ item.title}}</h3>
                </v-card>
            </v-timeline-item>

            </v-timeline> 
        </v-card>
  
      </v-container>
      <!---Left Part-->
    </v-row>
  
    <FooterMain />
  </template>
  <script setup lang="ts">
  import Main from './principal/Main.vue'
  import menus from '../data/mainMenu.json'
  import timeLineMenu from '../data/timeLineMenu.json'
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
  