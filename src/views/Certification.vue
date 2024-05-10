<template>
  <HeaderMain />          

  <v-row class="h-screen vvcontainer" no-gutters>
    <!---Left Part-->
    <v-container >
      <v-card elevation="0" class="mx-auto mt-10">
        <div class="timeline-container">
          <v-timeline direction="horizontal" side="start">
            <v-timeline-item 
              v-for="item in timeLineMenu"
              :key="item.name"
              :dot-color="item.color"
              fill-dot
              :icon="item.icon"
            >
              <v-card class="pa-5" elevation="0" border :class="`bg-${item.color}`">
                
                  <h5 class="text-center">{{ item.title }}</h5>
                
              </v-card>



            </v-timeline-item>
          </v-timeline>
        </div>
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

.timeline-container {
  overflow-x: auto; /* Habilita el desplazamiento horizontal */
  white-space: nowrap; /* Asegura que los elementos de la línea de tiempo se muestren en una sola fila */
}
.v-timeline {
  display: inline-flex; /* Hace que la línea de tiempo se muestre en línea y permita flexibilidad */
  vertical-align: top; /* Alinea los elementos de la línea de tiempo correctamente si tienen diferentes alturas */
}
.v-timeline-item {
  display: inline-block; /* Asegura que cada item también se trate como un bloque en línea */
}

</style>
