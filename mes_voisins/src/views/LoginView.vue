<template>
  <section>
    <form @submit.prevent="this.handleFormSubmit">
      <div class="form-title">
        <h2>Connexion</h2>
      </div>
      <div class="form-group">
        <label for="email">Identifiant :</label>
        <input type="text" name="email" v-model="this.login" placeholder="Identifiant" />
        <div class="error" v-if="this.errors.loginEmpty">Vous devez saisir un identifiant !</div>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          v-model="this.password"
          placeholder="Mot de passe"
        />
        <div class="error" v-if="this.errors.passwordEmpty">Vous devez saisir un mot de passe !</div>
      </div>
      <div
        class="error"
        v-if="this.errors.loginFailed"
      >
        Identifiants incorrects
      </div>
      <div class="form-group">
        <button type="submit" class="form-button">Se connecter</button>
      </div>
      <div>
        <p>
      Pas encore inscrit ?
      <router-link :to="{ name: 'register' }">Créer un compte </router-link>
    </p>
      </div>
    </form>
  </section>
</template>

<script>
import userService from "@/services/userService";
import storage from "@/utils/storage";

export default {
  name: "LoginView",

  data() {
    return {
      login: "",
      password: "",
      errors: {
        loginEmpty: false,
        passwordEmpty: false,
        loginFailed: false,
      },
    };
  },

  methods: {
    async handleFormSubmit(evt) {
      console.log("Form envoyé !", evt);

      this.errors.loginFailed = false;

      this.errors.loginEmpty = this.login === "";
      this.errors.passwordEmpty = this.password === "";

      if (!this.errors.loginEmpty && !this.errors.passwordEmpty) {
        let response = await userService.login(this.login, this.password);
        // console.log(response.data);

        storage.set("userData", response.data);
        console.log(storage.get("userData"));

        if (await userService.isConnected()) {
          this.$store.dispatch("userConnected");
          console.log(this.$store.state);

          this.$router.push({name : 'ads'});
        } else {
          this.errors.loginFailed = true;
        }
      }
    },
  },
  
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/media_queries.scss";

section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  color: $primaryColor;

  form {
    background: $tertiaryColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    border-radius: 0.8em;
    width: 25%;
    box-shadow: 0 0 10px $tertiaryColor;

    .form-title {
      padding: 0.5em;
      font-size: 1.1em;
      font-weight: bold;
      margin-bottom: 1em;

      h2 {
        font-size: 1.5em;
        color: $primaryColor;
        font-weight: bold;
        text-transform: uppercase;
        background: linear-gradient(
            to top,
            #30dd8a,
            #30dd8a 0.5em,
            transparent 0.5em
          )
          no-repeat;
      }
    }

    .form-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0.5em 0;
    }

    .form-group input {
      width: 100%;
      height: 2.3rem;
      border: double 2px transparent;
      border-radius: 0.8em;
      background-image: linear-gradient(white, white),
        linear-gradient(to right, #30dd8a, #0ba360);
      background-origin: border-box;
      background-clip: padding-box, border-box;
      font-size: 1.1em;
      color: $secondaryColor;
      text-align: center;

      &:focus {
        outline: none;
        border: double 2px transparent;
        border-radius: 50px;
        background-image: linear-gradient(white, white),
          linear-gradient(to right, #0ba360, #30dd8a);
      }
    }

    .form-group label {
      font-size: 1em;
      font-weight: bold;
      color: $primaryColor;
      width: 40%;
      text-align: left;
      margin-right: 0.5em;

    }

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

    p {
      font-size: 1em;
      color: $primaryColor;
      margin-bottom: 0.5em;
      margin-top: 0.5em;
      font-weight: bold;


      a {
        color: $quaternaryColor;
        text-decoration: underline;
        margin-left: 0.1em;
      }
    }

    .form-button {
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

  .error {
    font-size: 0.8em;
    color: #f00;
    text-align: center;
    margin-top: 0.5em;
  }
}

@media (min-width: $mediaTablet) and (max-width: $mediaLaptop) {
  section {
    form {
      width: 40%;
    }
  }
}

@media (min-width: $mediaSmartphone) and (max-width: $mediaTablet) {
  section {
    form {
      width: 80%;
    }
  }
}

@media (max-width: $mediaSmartphone) {
  section {
    // width: 100%;
    form {
      height: 100vh;
      width: 100%;
      box-shadow: none;
      margin:0;
      padding: 0;
      border-radius: 0;

      .form-group {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
        margin: 0.5em 0;

        label{
          width: 100%;
          text-align: center;
          margin-bottom: 0.2em;
        }
      }

      p{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        a{
          margin-top: 0.2em;
        }
      }

      button{
        width: 60%;
      }
    }
  }
}
</style>
