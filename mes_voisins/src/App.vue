<template>
  <HeaderComponent />
  <Transition name="fade">
    <router-view />
  </Transition>
  <FooterComponent />
</template>

<script>
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";
  import userService from "@/services/userService";

  export default {
    components: {
      HeaderComponent,
      FooterComponent,
    },

    async created() {
      this.$store.commit("setConnected", await userService.isConnected());
    },
  };
</script>

<style lang="scss">
  // Import du reset-css
  @import "reset-css";
  // Inmport de la police du site
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  // Import des variables du site
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";
  #app {
    width: 100%;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: #232526; /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #414345, #232526); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .swal-modal {
    background-color: #fff;
    border-radius: 15px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 1.25em;
  }

  .swal-text {
    font-style: italic;
  }

  .swal-button {
    background-color: #30dd8a;
    color: #fff;
  }

  .swal-footer {
    text-align: center;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.8s ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
