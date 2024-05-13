



  <template>
    <HeaderMain />
    <v-app>
      <v-app-bar app color="#035373" dark>
        </br>
      </v-app-bar>
      <div>.</div>         <div>.</div>       <div>.</div>        
      <v-container>
        <v-stepper 
         class="custom" 
         alt-labels
          :items="timeLineMenu"
        >
          <template v-slot:item.1>
            <v-card title="Politicas de Privacidad " color="#F8983D" flat>
          <v-sheet color="#DFDFDF" elevation="3" rounded="lg">
              <v-tabs
                v-model="tab"
                :items="tabs"
                align-tabs="center"
                color="F8983D"
                height="60"
                slider-color="#f78166"
              >
                <template v-slot:tab="{ item }">
                  <v-tab
                    :prepend-icon="item.icon"
                    :text="item.text"
                    :value="item.value"
                    class="text-none"
                  ></v-tab>
                </template>
            <template v-slot:item="{ item }">
              <v-tabs-window-item :value="item.value" class="pa-4">
                {{ item.content }}
  
                
              </v-tabs-window-item>
            </template>
  
        
              </v-tabs>
            </v-sheet>
  
            </v-card>
          </template>
        
          <template v-slot:item.2>
            <v-card title="Step Two" flat>...</v-card>
          </template>
        
          <template v-slot:item.3>
            <v-card title="Step Three" flat>...</v-card>
          </template>
        </v-stepper>

      </v-container>





    <v-footer app padless color="#035373" dark>
      <v-col class="text-center text-capitalize" cols="12">

     
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="sx-1"
        variant="text"
      ></v-btn>
   

        Servicio general de identificación Personal © 2024 | v1.0.0
      </v-col>
      
    </v-footer>
    </v-app>
 
  </template>
  
     
    <script setup>
    import Stepper from 'primevue/stepper';
    import StepperPanel from 'primevue/stepperpanel';
    import HeaderMain from './principal/HeaderMain.vue'
    import FooterMain from './principal/FooterMain.vue'
    import menus from '../data/mainMenu.json'
    import timeLineMenu from '../data/timeLineMenu.json'
    import { createVuetify } from 'vuetify'
    import {RouterLink} from 'vue-router'

    import { ref, reactive } from 'vue';

    const tab = ref('tab-1')
    const tabs = reactive([
          {
            icon: 'mdi-book-open-page-variant',
            text: 'ACEPTACIÓN DE LOS TERMINOS',
            value: 'tab-1',
            content: "Contenido detallado sobre la aceptación de términos. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.",
          },
          {
            icon: 'mdi-handshake-outline',
            text: 'RESPONSABILIDADES',
            value: 'tab-2',
            content: "Información sobre las responsabilidades del usuario.Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio."
          },
          {
            icon: 'mdi-license',
            text: 'DECLARACIÓN',
            value: 'tab-3',
            content: "Detalles sobre la declaración y su importancia.Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero."
          },
        ]
        )
    const icons = reactive( [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ])
    
    </script>
    
    <style lang="css">
  

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
  
  .main-bg {
    background-color: #f5f5f5;
  }
  .v-stepper-header  {
  background-color: #F8983D;  /* Añade el color que prefieras */
}
  .custom  {
  background-color: #035373;  /* Añade el color que prefieras */
}


  .v-stepper-actions  {
  background-color: #F58932;  /* Añade el color que prefieras */
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

    </style>
    