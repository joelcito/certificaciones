
<template>
  
  
  <v-row>
    <v-col class="d-flex align-center">
      <v-divider class="custom-devider" />
      sadfasdf
      <v-divider class="custom-devider" />
    </v-col>
  </v-row>
  <h5 class="text-h5 text-center my-4 mb-8">Rapido, seguro y confiable - Certificaciones de cedula de identidad y de licencias de conducir</h5>
  <v-form ref="Regform" lazy-validation action="/dashboards/analytical" class="mt-7 loginForm">
    <v-row>
      <v-col cols="12" sm="6">
        <v-btn  block class="requestbtn"  variant="flat" size="large" @click="validate()">Certificaciones</v-btn>
      </v-col>
      <v-col cols="12" sm="6">
        <v-btn  block class="requestbtn"  variant="flat" size="large" @click="validate()">Validaciones</v-btn>
      </v-col>
    </v-row>
    
  </v-form>
  <div class="mt-5 text-right">
    <v-divider />
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const Regform = ref();

function validate() {
  Regform.value.validate();
}
</script>


<style lang="css">

.requestbtn {
  padding: 40px 40px;
  border-color: rgba(10, 10, 10, 0.08);
  margin: 20px 15px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: none;
}

.btnorange{
  border-color: rgba(0, 0, 0, 0.08) !important;
}
.custom-devider {
  border-color: rgba(0, 0, 0, 0.08) !important;
}
.outlinedInput .v-field {
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: none;
}
.orbtn {
  padding: 20px 40px;
  border-color: rgba(0, 0, 0, 0.08);
  margin: 20px 15px;
}
.pwdInput {
  position: relative;
  .v-input__append {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
