<template>
  <!-- krlos start -->

      <footer class="footer py-4 bg-dark text-light"> 
          <div class="container text-center">
              <!-- <p class="mb-4 small">Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a href="http://www.devcrud.com">DevCRUD</a></p> -->
              <div class="social-links">
                  <a href="#" class="link"><i class="ti-facebook">face</i></a>
                  <a href="#" class="link"><i class="ti-twitter-alt"></i>twitter</a>
                  <a href="#" class="link"><i class="ti-google"></i>google</a>
                  <a href="#" class="link"><i class="ti-pinterest-alt"></i></a>
                  <a href="#" class="link"><i class="ti-instagram"></i></a>
                  <a href="#" class="link"><i class="ti-rss"></i></a>
              </div>
          </div>
      </footer>
  
  <!-- krlos end -->
    
  </template>
  <script setup lang="ts">
   
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