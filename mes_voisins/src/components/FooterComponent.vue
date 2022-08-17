<template>
  <footer>
    <div class="links">
      <a href="#">
        <font-awesome-icon icon="fa-solid fa-address-card" />
        Contacts / Equipe
      </a>
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

  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    color: $fontcolor;
    background-color: $maincolor;

    a {
      color: $fontcolor;
      text-decoration: none;
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: $fontcolor;
    background-color: $secondarycolor;
    font-size: 1em;

    .fa-copyright {
      margin-right: 0.25em;
      color: $fontcolor;
    }
  }

// Media queries
  @media (max-width: $mediaSmartphone) {
    .links {
      flex-direction: column;
      
      a{
        padding : 0.2em;
      }
      
    }
  }
</style>
