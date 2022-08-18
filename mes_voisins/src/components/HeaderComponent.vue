<template>
  <header>
    <div class="logo-home" href="#">
      <img src="../assets/img/mesvoisins_logo.png" alt="">
    </div>
    <div class="search">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <input type="text" placeholder="Rechercher" />
      <span>ou</span>
      <a href="#">voir toutes les annonces</a>
    </div>
    <div class="btn">
      <button href="#">Inscription</button>
      <button href="#">Connexion</button>
    </div>
  </header>
</template>

<script></script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";
  

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $fontcolor;
    background-color: $maincolor;
    

    .logo-home {
      cursor: pointer;

      img {
        width: 11em;
        height: auto;
        margin-left: 1em;
      }

      .fa-people-carry-box {
        font-size: 2em;
        color: $fontcolor;
      }
    }

    .search {
      .fa-magnifying-glass {
        margin-right: 0.5em;
        height: 1.5em;
        vertical-align: middle;
      }

      input {
        width: 15rem;
        height: 2rem;
        border-radius: 5px;
        border: 1px solid $maincolor;
        padding: 5px;
        font-size: 1.1em;
        color: $fontcolor;
        margin-right: 0.5em;
      }

      a {
        color: $fontcolor;
        text-decoration: none;
        margin-left: 0.5em;
        font-size: 1em;
        text-decoration: underline;
        font-weight: bold;
      }

      a:hover {
        color: $quaternarycolor;
        font-weight: bold;
      }
    }

    .btn {
      button {
        background-color: $quaternarycolor;
        color: $fontcolor;
        font-weight: bold;
        border: none;
        padding: 0.6rem;
        border-radius: 5px;
        font-size: 1.2rem;
        cursor: pointer;
        margin: 0.5rem;
        box-shadow: 0.1em 0.1em 0.1em $tertiarycolor;
      }

      button:hover {
        color: $tertiarycolor;
      }
    }
  }

  // Media queries

  // Smartphone

  @media (max-width: $mediaSmartphone) {
    header {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5em;
      h1 {
        font-size: 1.4rem;
        margin-bottom: 0.5em;
      }
      .fa-people-carry-box {
        font-size: 3em;
      }
      .search {
        justify-content: center;
        padding: 0.1em;
        input {
          width: 80%;
          margin-bottom: 0.5em;
        }
      }

      .btn {
        width: 100%;
      }
    }
  }

  // Tablette

  @media (min-width: $mediaSmartphone) and (max-width: $mediaTablet) {
    header {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5em;
      h1 {
        font-size: 1.4rem;
        margin-bottom: 0.5em;
      }
      .fa-people-carry-box {
        font-size: 3em;
      }
      .search {
        justify-content: center;
        padding: 0.1em;
        margin-bottom: 0.2em;  
        input {
          width: 80%;
          margin-bottom: 0.5em;
        }
      }
    }
  }
</style>
