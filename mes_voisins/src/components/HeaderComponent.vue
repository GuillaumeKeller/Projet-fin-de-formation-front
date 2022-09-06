<template>
  <header>
    <div class="logo-home" href="#">
      <router-link :to="{ name: 'home' }">
        <img class="logo" src="../assets/img/logo.png" alt="" />
      </router-link>
    </div>
    <section class="top-nav">
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>

      <ul class="menu">
        <li>
          <div class="nav-btn" v-if="!this.$store.state.isConnected">
            <router-link :to="{ name: 'ads' }">
              <button class="btn-header">Annonces</button>
            </router-link>
            <router-link :to="{ name: 'ad-create' }">
              <button class="btn-header">Créer une annonce</button>
            </router-link>
            <router-link :to="{ name: 'register' }">
              <button class="btn-header">Inscription</button>
            </router-link>
            <router-link :to="{ name: 'login' }">
              <button class="btn-header">Connexion</button>
            </router-link>
          </div>
          <div class="user" v-else>
            <div class="nav-btn">
              <router-link :to="{ name: 'ads' }">
                <button class="btn-header">Annonces</button>
              </router-link>
              <button class="btn-header">
                <a id="myprofile" @click="goToMyProfile()"> Mon profil </a>
              </button>
              <router-link :to="{ name: 'ad-create' }">
                <button class="btn-header">Créer une annonce</button>
              </router-link>
            </div>
            <div class="disconnect">
              {{ this.getCurrentUsername() }}
              <br />
              <a @click="userDisconnected()"> Déconnexion </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </header>
</template>

<script>
import storage from "@/utils/storage";

export default {
  props: {},

  methods: {
    getCurrentUsername() {
      return storage.get("userData").displayName;
    },

    goToMyProfile() {
      const $getUserId = storage.get("userData").id;

      this.$router.push({ name: "profile", params: { id: $getUserId } });
    },

    goToCreateAd() {
      this.$router.push({ name: "ad-create" });
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

* {
  box-sizing: border-box;
}

.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  height: 50px;
  padding: 1em;
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;
}

.menu > li {
  margin: 0 1rem;
  overflow: hidden;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: "";
  margin-top: -8px;
}

.menu-button::after {
  content: "";
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

.menu-button-container {
  display: flex;
}
.menu {
  position: absolute;
  top: 14px;
  margin-top: 50px;
  left: 0;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}
#menu-toggle ~ .menu li {
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
  transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
}
#menu-toggle:checked ~ .menu li {
  border: 1px solid $primaryColor;
  height: 6em; 
  padding: 0.5em;
  transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu > li {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0.5em 0;
  width: 100%;
  color: white;
  background-color: $primaryColor;
}


//-------------------------------------------------------------
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
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

  #myprofile {
    color: white;
    font-weight: bold;
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
      background-image: linear-gradient(
        to right,
        #0ba360,
        #3cba92,
        #30dd8a,
        #2bb673
      );
      box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
    }
  }
}

// Media queries

// Smartphone

@media (max-width: $mediaSmartphone) {
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #menu-toggle:checked ~ .menu li {
    height: 23em;
  }

  .menu {
    top: 64px;
    margin-top: 50px;
  }

  header {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .nav-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

     
    }
  }
}

// Media queries
// Tablette

@media (min-width: $mediaSmartphone) and (max-width: $mediaTablet) {
  #menu-toggle:checked ~ .menu li {
    height: 10em;
  }

  .menu {
    top: 63px;
    margin-top: 50px;
  }

  header {
    flex-direction: column;
    width: 100%;
  }
  
}

//  LapTop

@media (min-width: $mediaTablet) and (max-width: $mediaLaptop) {
  header {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    
  }
}
</style>
