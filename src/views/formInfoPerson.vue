<template>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="carnet"
              :counter="10"
              :rules="nameRules"
              label="Cedula de identidad"
              hide-details
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="complemento"
              :counter="10"
              :rules="nameRules"
              label="complemento"
              hide-details
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="fnacimiento"
              :rules="emailRules"
              label="Fecha de nacimiento"
              hide-details
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              v-model="firstname"
              :counter="10"
              :rules="nameRules"
              label="Nombre(s)"
              hide-details
              required
            ></v-text-field>
          </v-col>
  
         
        </v-row>

        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="lastname"
              :counter="10"
              :rules="nameRules"
              label="Primer Apellido"
              hide-details
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="secondname"
              :counter="10"
              :rules="nameRules"
              label="Segundo Apellido"
              hide-details
              required
            ></v-text-field>
          </v-col>
  
        </v-row>


        
        <!-- <v-card-text>
          <v-text-field  v-model="email" :rules="emailRules" :counter="50"
              label="Email" minlength="5"  maxlength="50"  required
          ></v-text-field>
        </v-card-text> -->


      </v-container>
    </v-form>
  </template>
  <script>
    export default {
      data: () => ({
        valid: false,
        carnet:'',
        complemento:'',
        fnacimiento:'',
        firstname: '',
        lastname: '',
        secondname:'',
        nameRules: [
          value => {
            if (value) return true
  
            return 'Name is required.'
          },
          value => {
            if (value?.length <= 10) return true
  
            return 'Name must be less than 10 characters.'
          },
        ],
        email: '',
        emailRules: [
          value => {
            if (value) return true
  
            return 'E-mail is requred.'
          },
          value => {
            if (/.+@.+\..+/.test(value)) return true
  
            return 'E-mail must be valid.'
          },
        ],
      }),
    }
  </script>