<template>
  <!-- krlos start -->

      <footer class="footer py-4 bg-dark text-light"> 
          <div class="container text-center">
              <!-- <p class="mb-4 small">Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a href="http://www.devcrud.com">DevCRUD</a></p> -->
              <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    :icon="icon"
                    class="sx-1"
                    variant="text"
                ></v-btn>
            

        Servicio general de identificación Personal © 2024 | v1.0.0
          </div>
      </footer>
  
  <!-- krlos end -->
    
  </template>
  <script setup lang="ts">
   
  import {RouterLink} from 'vue-router'
  
  import { ref,reactive } from 'vue';

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
  </script>
  
  <style scoped>
  @import '../../assets/rubic.css'
  
  </style>