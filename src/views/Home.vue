

<template>
  <HeaderMain />

<!-- krlos start -->
  <div>

    <v-card>
      
      <header class="header d-flex justify-content-center">
        <v-container class="">
          <v-row class=" align-items-center">
            <v-col cols="12" lg="6" md="6" sm="12">
              <h3 class="header-title">
                <strong class="text-primary">
                    Sistema de certificacion en Linea
                </strong>
              </h3>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12">
              <img :src="imageSegip">
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" sm="12">
              <h5 class="header-subtitle">Rapido, seguro y confiable </h5>
            </v-col>
          </v-row>
          <v-card class="vcardoption">
            <v-row >
              <v-col cols="12" lg="6" md="6" sm="12" v-for="menu in menus" >
                <RouterLink    :to="menu.link" :key="menu.id" href="" >
                      <img :src="(menu.imgoption)">
                        <v-btn class="mainbuton" >
                            <span class = "text-white">
                              {{menu.option}}
                            </span>
                        </v-btn>
                    </RouterLink>
              </v-col>
            </v-row>          
          </v-card>
        </v-container>

      </header>
    </v-card>
  
    
    <div class="social-wrapper" id="features">
        <div class="container">
            <div class="social-txt">
                <h6 class="title">SEGIP</h6>
                <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptate numquam sed expedita vitae ipsa?</p>
            </div>
            <div class="social-links">
            </div>
        </div>          
    </div>
    <section class="section">
        <div class="container">
            <div class="row justify-content-around">
                <div class="col-lg-8">
                    <div class="tabs-container">
                        <ul class="nav tab-nav" id="pills-tab">
                            <li class="item">
                                <a class="link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"aria-selected="true">Tab 1</a>
                            </li>
                            <li class="item">
                                <a class="link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"aria-selected="false">Tab 2</a>
                            </li>
                            <li class="item">
                                <a class="link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"aria-selected="false">Tab 3</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="pills-home">
                                <h4 class="title">Some Title</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam repellendus esse consectetur possimus voluptatem veniam quas ducimus ullam deleniti? Possimus, unde eveniet suscipit perspiciatis dicta numquam voluptate fuga id, optio.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit tempore molestiae excepturi commodi ullam provident, optio dicta, nulla officiis consectetur soluta et officia neque odio blanditiis aspernatur cum cumque error?</p>

                                <button class="btn btn-primary mt-3">PROCESS CERTIFICATION</button>
                            </div>
                            <div class="tab-pane fade" id="pills-profile">
                                <h4 class="title">Another Title</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit unde totam nostrum, sunt accusamus in delectus aspernatur, nisi eligendi ipsum eum! Aspernatur recusandae nihil rem qui quam vero, saepe inventore tempora? Necessitatibus corporis, nam minus reiciendis rerum? Eius voluptatem facilis, vitae minima modi corrupti ullam, temporibus vel eum fugit inventore obcaecati provident ratione, ab aliquid perspiciatis commodi, autem in nemo.</p>
                                <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing.</strong></p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit tempore molestiae excepturi commodi ullam provident, optio dicta, nulla officiis consectetur soluta et officia neque odio blanditiis aspernatur cum cumque error?</p>
                            </div>
                            <div class="tab-pane fade" id="pills-contact">
                                <h4 class="title">Some Other </h4>
                                <p>Consectetur amet architecto, temporibus, debitis impedit dolore eius. Enim alias beatae architecto iusto incidunt pariatur reprehenderit impedit ipsum ex at deserunt, inventore corrupti rerum eius obcaecati. Itaque repellendus illum aut beatae ex quasi doloremque voluptatem. Numquam at possimus, obcaecati, voluptas aut vel nam recusandae pariatur error illum quaerat sunt! Ipsam rerum enim hic atque nemo debitis, voluptate obcaecati inventore culpa. Odit adipisci eos natus fugiat. Id, deserunt qui aliquam? Provident tempora repellat, repellendus consequatur quia dolor at dolore temporibus esse in rem ea necessitatibus quo nesciunt eos a dolorum voluptates, tenetur non eius quasi! Autem provident amet, maiores tenetur, eveniet dicta, laborum odio velit sint consequatur beatae nemo at! Aperiam magnam eveniet rerum, optio consequuntur quas maiores ullam necessitatibus nesciunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 d-none d-lg-block align-self-center">
                    <!-- <img src="assets/imgs/eiffel-tower.svg" alt="" class="w-100 tower"> -->
                </div>
            </div>                  
        </div>                      
    </section>
    <section class="section">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-5 align-self-center mb-4 mb-md-0">
                    <!-- <img src="assets/imgs/img.jpg" alt="" class="shadow w-100"> -->
                </div>
                <div class="col-md-6 col-lg-5">
                    <h6 class="title">Section with Media list</h6>
                    <p>Consectetur adipisicing elit. Quam odit odio et neque perferendis perspiciatis magnam hic ut facilis possimus!consectetur adipisicing elit. Impedit repellat ipsam quaerat error odit commodi.</p>
                    <ul class="list-unstyled mt-4">
                        <li class="media">
                            <div class="circle-40 mr-3 mt-1"><i class="ti-gift"></i></div>
                            <div class="media-body">
                                <h6 class="mb-2">List-based media object</h6>
                                <p>Cras sit amet nibh libero, in gravida nulla.</p>
                            </div>
                        </li>
                        <li class="media">
                            <div class="circle-40 mr-3 mt-1"><i class="ti-face-smile"></i></div>
                            <div class="media-body">
                                <h6 class="mb-2">Another one</h6>
                                <p>Cras in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                            </div>
                        </li>
                        <li class="media">
                            <div class="circle-40 mr-3 mt-1"><i class="ti-microphone"></i></div>
                            <div class="media-body">
                                <h6 class="mb-2">One more</h6>
                                <p>Nulla vel metus scelerisque ante sollicitudin. Cras purus odio.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="row justify-content-between">               
                <div class="col-md-6 col-lg-5 align-self-center">
                    <h6 class="title">Standard Picture Section</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ut voluptatum ipsum. Rerum fuga cumque illo nihil nobis vero ducimus, animi voluptatum nemo facilis quae quia odit accusantium doloremque? Totam.</p>
                    <p><strong>Adipisicing elit. Quos ad doloribus numquam cum odio dolorem!</strong></p>
                    <p>Rerum fuga cumque consectetur adipisicing elit. Pariatur quis ipsum facere officiis magni ullam quasi fuga magnam dicta quas.</p>                    
                </div>
                <div class="col-md-5 mt-4 mt-md-0">
                    <!-- <img src="assets/imgs/img1.jpg" alt="" class="shadow w-100"> -->
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="about">
        <div class="container text-center">
            <h6 class="display-4 has-line">WHY THIS IS AWESOME</h6>
            <p class="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div class="row">
                <div class="col-lg-4">
                    <div class="circle-100 mb-3"><i class="ti-light-bulb"></i></div>
                    <h6 class="title mb-3">Thoughtful Design</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eveniet laborum, vero doloremque sunt tempora.</p>
                </div>
                <div class="col-lg-4">
                    <div class="circle-100 mb-3"><i class="ti-paint-bucket"></i></div>
                    <h6 class="title mb-3">WELL CRAFTED</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eveniet laborum, vero doloremque sunt tempora.</p>
                </div>
                <div class="col-lg-4">
                    <div class="circle-100 mb-3"><i class="ti-marker-alt"></i></div>
                    <h6 class="title mb-3">EASY TO CUSTOMIZE</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eveniet laborum, vero doloremque sunt tempora.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="pricing">
        <div class="container text-center">
            <h6 class="display-4 has-line">PRICING OPTIONS</h6>
            <p class="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="row pt-5">
                <div class="col-lg-4">
                    <a href="javascript:void(0)" class="pricing-card">
                        <div class="head">Basib</div>
                        <div class="body">
                            <h1><small>$</small>0</h1>
                            <p>Free for Life</p>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item">1 GB OF SPACE</li>
                            <li class="list-group-item">10 GB OF BANDWIDTH</li>
                            <li class="list-group-item">3 WEBSITES</li>
                            <li class="list-group-item">BASIC CUSTOMIZATION</li>
                            <li class="list-group-item">WORDPRESS INTEGRATION</li>
                            <li class="list-group-item">EMAIL SUPPORT</li>
                        </ul>
                    </a>
                </div>
                <div class="col-lg-4">
                    <a href="javascript:void(0)" class="pricing-card popular">
                        <div class="head">Professional</div>
                        <div class="body">
                            <h1><small>$</small>14.99</h1>
                            <p>Monthly Payment</p>
                        </div>
                        <div class="popular-item">OUR MOST POPULAR</div>
                        <ul class="list-group">
                            <li class="list-group-item">5 GB OF SPACE</li>
                            <li class="list-group-item">50 GB OF BANDWIDTH</li>
                            <li class="list-group-item">10 WEBSITES</li>
                            <li class="list-group-item">ADVANCED CUSTOMIZATION</li>
                            <li class="list-group-item">WORDPRESS INTEGRATION</li>
                            <li class="list-group-item">EMAIL SUPPORT</li>
                        </ul>
                    </a>
                </div>
                <div class="col-lg-4">
                    <a href="javascript:void(0)" class="pricing-card">
                        <div class="head">Enterprise</div>
                        <div class="body">
                            <h1><small>$</small>99</h1>
                            <p>Monthly Payment</p>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item">UNLIMITED OF SPACE</li>
                            <li class="list-group-item">UNLIMITED BANDWIDTH</li>
                            <li class="list-group-item">120 WEBSITES</li>
                            <li class="list-group-item">ADVANCED CUSTOMIZATION</li>
                            <li class="list-group-item">WORDPRESS INTEGRATION</li>
                            <li class="list-group-item">EMAIL SUPPORT</li>
                        </ul>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="review">
        <div class="container text-center">
            <h6 class="display-4 has-line">WHAT OUR CUSTOMERS ARE SAYING</h6>
            <p class="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="row text-left">
                <div class="col-md-4">
                    <div class="testmonial">                        
                        <p class="description"><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, eaque, repellat. Corporis facilis reprehenderit, cupiditate.</i></p>
                        <div class="media">
                            <!-- <img class="mr-3" src="assets/imgs/avatar1.jpg" width="60" alt="Generic placeholder image"> -->
                            <div class="media-body">
                                <h6 class="title">Emma Re</h6>
                                <p class="text-muted">Web Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="testmonial">                        
                        <p class="description"><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, eaque, repellat. Corporis facilis reprehenderit, cupiditate.</i></p>
                        <div class="media">
                            <!-- <img class="mr-3" src="assets/imgs/avatar2.jpg" width="60" alt="Generic placeholder image"> -->
                            <div class="media-body">
                                <h6 class="title">John Doe</h6>
                                <p class="text-muted">Freelancer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="testmonial">                        
                        <p class="description"><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, eaque, repellat. Corporis facilis reprehenderit, cupiditate.</i></p>
                        <div class="media">
                            <!-- <img class="mr-3" src="assets/imgs/avatar3.jpg" width="60" alt="Generic placeholder image"> -->
                            <div class="media-body">
                                <h6 class="title">Emily Roe</h6>
                                <p class="text-muted">Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        </div>
    </section>
    <section class="section has-img-bg text-center">
        <div class="container">
            <h6 class="display-3 has-line">STYLISH AXURE DESIGN</h6>
            <h5 class="mb-5 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, itaque.</h5>
            <button class="btn btn-outline-light btn-flat">Download KRLOS</button>
        </div>
    </section>
    <section class="section" id="contact">
        <div class="container text-center">
            <h6 class="display-4 has-line">CONTACT US</h6>
            <p class="mb-5 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <form>
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="form-group pb-1">
                            <input type="text" class="form-control" required placeholder="Name">            
                        </div>
                        <div class="form-group pb-1">
                            <input type="email" class="form-control" required placeholder="Email">          
                        </div>
                        <div class="form-group ">
                            <input type="text" class="form-control" placeholder="Subject">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <textarea name="" id="" cols="" rows="7" class="form-control" required placeholder="Message"></textarea>
                    </div>
                </div>
                <input type="submit" class="btn btn-primary btn-block" value="Send Message">
            </form>
        </div>
    </section>
  </div>
<!-- krlos end -->
  <FooterMain />
</template>
<script setup >

import Main from './principal/Main.vue'
import menus from '../data/mainMenu.json'
import HeaderMain from './principal/HeaderMain.vue'
import FooterMain from './principal/FooterMain.vue'
import {RouterLink} from 'vue-router'
import { createVuetify } from 'vuetify'
import { ref } from 'vue';

import imageSegip from "../assets/compu.png"
import ciMain from "../assets/cimain.png"

const Regform = ref();

function validate() {
  console.log('krlos')
  return 1
  //Regform.value.validate();
}
</script>

<style lang="css">

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