<template>
  <footer>
    <div class="links">
      <router-link :to="{name : 'team'}">
        <font-awesome-icon icon="fa-solid fa-address-card" />
        Contacts / Equipe
      </router-link>
      <a href="#">
        <font-awesome-icon icon="fa-solid fa-copyright" />
        Mentions légales
      </a>
      <a href="#">
        <font-awesome-icon icon="fa-solid fa-clipboard-list" />
        Conditions générales
      </a>
    </div>
    <div class="copyright">
      <font-awesome-icon icon="fa-solid fa-copyright" /> - 2022 - Mes voisins - Ecole O'clock - Promo DeVinci
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";

  footer{
    width: 100%;
  }
  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    color: $tertiaryColor;
    background-color: $primaryColor;
    

    a {
      color: $tertiaryColor;
      text-decoration: none;

      &:hover {
        color: $quaternaryColor;
      }
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: $secondaryColor;
    background-color: $primaryColor;
    font-size: 1em;

    .fa-copyright {
      margin-right: 0.25em;
      color: $quaternaryColor;
    }
  }

// Media queries
  @media (max-width: $mediaSmartphone) {
    .links {
      flex-direction: column;
      
      a{
        padding : 0.5em;
      }
      
    }
  }
</style>
