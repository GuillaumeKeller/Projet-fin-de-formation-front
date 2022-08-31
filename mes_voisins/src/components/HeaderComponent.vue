<template>
  <header>
    <div class="logo-home" href="#">
      <router-link :to="{ name: 'home' }">
        <img class="logo" src="../assets/img/logo.png" alt="" />
      </router-link>
    </div>

    <font-awesome-icon icon="fa-solid fa-bars" />
    
    <div class="nav-btn" v-if="!this.$store.state.isConnected">
      <router-link :to="{ name: 'ads' }">
        <button class="btn-header">Annonces</button>
      </router-link>
      <router-link :to="{ name: 'register' }">
        <button class="btn-header">Inscription</button>
      </router-link>
      <router-link :to="{ name: 'login' }">
        <button class="btn-header">Connexion</button>
      </router-link>
    </div>
    <div class="user" v-if="!this.$store.state.isDisconnected">
      <div class="nav-btn">
        <router-link :to="{ name: 'ads' }">
        <button class="btn-header">Annonces</button>
      </router-link>
    </div>
      <div>
        {{ this.getCurrentUsername() }}
        <br />
        <a @click="userDisconnected()"> Déconnexion </a>         
      </div>
      <img src="@/assets/img/meme.jpg" />
    </div>
  </header>
</template>

<script>
  import storage from "@/utils/storage";

  export default {
    props: {},

    methods: {
      getCurrentUsername() {
        console.log(storage.get("userData"));
        return storage.get("userData").displayName;
       
      },

      // I want create a method that disconnect the user
      userDisconnected() {
        this.$store.dispatch("userDisconnected", true);
        console.log(this.$store.state);
        this.$router.push({ name: "home" });
      },
    },  
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    box-sizing: border-box;
    background-color: $primaryColor;

    .user {
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;

      div {
        text-align: right;
        margin-right: 0.5em;
        font-weight: bold;

        a {
          color: #42b983;
          font-weight: normal;
          cursor: pointer;
        }
      }

      img {
        height: 90px;
        padding: 10px;
      }
    }

    .logo-home {
      cursor: pointer;

      img.logo {
        width: 25em;
        height: auto;
      }
    }

    .nav-btn {
      button {
        width: 12.5em;
        font-size: 1em;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        margin: 0.9375em;
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

      .search {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;

        input {
          width: 80%;
          margin-bottom: 0.5em;
          height: 1em;
        }

        .fa-magnifying-glass {
          height: 1.5em;
        }
      }

      .btn {
        justify-content: center;
        margin: auto;

        button {
          width: 100%;
          margin: 0.2em;
        }
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

      .search {
        padding: 0.1em;
        margin-bottom: 0.2em;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;

        input {
          width: 80%;
          margin-bottom: 0.5em;
          height: 1em;
        }
        .fa-magnifying-glass {
          height: 1.5em;
        }
      }

      .btn {
        justify-content: center;
        margin: auto;
      }
    }
  }

  //  LapTop

  @media (min-width: $mediaTablet) and (max-width: $mediaLaptop) {
    header {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5em;

      .search {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        padding: 0.1em;
        margin-bottom: 0.2em;
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
</style>
