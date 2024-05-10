

<template>
    
  
  <!-- krlos start -->
    <div>
  
  
      <nav id="scrollspy" class="navbar page-navbar navbar-dark navbar-expand-md fixed-top" data-spy="affix" data-offset-top="20">
          <div class="container">
              <a class="navbar-brand" href="#"><strong class="text-primary">SE</strong><span class="text-light">GIP</span></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <!-- <span class="navbar-toggler-icon"></span> -->
              </button>
          </div>
      </nav>

  
    </div>
  <!-- krlos end -->
    
  </template>
  <script setup lang="ts">
  
  import menus from '../data/mainMenu.json'
  import {RouterLink} from 'vue-router'
  
  import { ref } from 'vue';
  
  const Regform = ref();
  
  function validate() {
    console.log('krlos')
    return 1
    //Regform.value.validate();
  }
  </script>
  
 
  
  
  <style scoped>
  @import '../../assets/rubic.css'
  
  </style>