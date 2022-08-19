<template>
  <HeaderComponent />
  <router-view/>
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'


export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>


<style lang="scss">

// Import du reset-css
@import "reset-css";

// Inmport de la police du site
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

// Import des variables du site
@import '@/assets/scss/variables.scss';

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $fontcolor;
  background-color: $backgroundcolor;
  background-size: cover;
  height: 100%;
  width: 100%;
}


</style>
