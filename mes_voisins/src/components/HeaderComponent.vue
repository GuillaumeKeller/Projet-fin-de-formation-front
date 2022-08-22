<template>
  <header>
    <div class="logo-home" href="#">
      <img class="logo" src="../assets/img/logo.png" alt="" />
    </div>
    <div class="search">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <input type="text" placeholder="Rechercher" />
    </div>
    <div class="btn">
      <button class="btn-header" href="#">Inscription</button>
      <button class="btn-header" href="#">Connexion</button>
    </div>
  </header>
</template>

<script></script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $tertiaryColor;
    box-sizing: border-box;
    background-color: white;

    .logo-home {
      cursor: pointer;

      img.logo {
        width: 25em;
        height: auto;
      }
    }

    .search {
      .fa-magnifying-glass {
        margin-right: 0.5rem;
        height: 2.5rem;
        vertical-align: middle;
        color: #30dd8a;
      }

      input {
        width: 20rem;
        height: 1.5rem;
        padding: 0.5rem;
        border: double 5px transparent;
        border-radius: 50px;
        background-image: linear-gradient(white, white), linear-gradient(to right, #30dd8a, #0ba360);
        background-origin: border-box;
        background-clip: padding-box, border-box;
        padding: 0.5em;
        font-size: 1.1em;
        color: $primaryColor;
        margin-right: 0.5em;
        box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);

        &:focus {
          outline: none;
          border: double 5px transparent;
          border-radius: 50px;
          background-image: linear-gradient(white, white), linear-gradient(to right, #0ba360, #30dd8a);
        }
      }
    }

    .btn {
      margin-right: 4em;
      button {
        width: 200px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        margin: 15px;
        height: 3em;
        text-align: center;
        border: none;
        background-size: 300% 100%;

        border-radius: 50px;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }

      button:hover {
        background-position: 100% 0;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }

      button:focus {
        outline: none;
      }

      .btn-header {
        background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
        box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
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
        justify-content: center;
        font-size: 1.4rem;
        margin-bottom: 0.5em;
      }
      .search {
        justify-content: center;
        padding: 0.1em;

        .fa-magnifying-glass {
          align-self: flex-start;
        }

        input {
          width: 80%;
          margin-bottom: 0.5em;
        }
      }

      .btn {
        justify-content: center;
        margin: auto;
      }
    }
  }

  // Media queries
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
      .search {
        justify-content: center;
        flex-direction: row;
        padding: 0.1em;
        margin-bottom: 0.2em;
        input {
          width: 80%;
          margin-bottom: 0.5em;
        }
        .fa-magnifying-glass {
         display: none;
        }
      }

      .btn {
        justify-content: center;
        margin: auto;
      }
    }
  }
</style>
