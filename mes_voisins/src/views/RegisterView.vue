<template>
  <section>
    <form @submit.prevent="this.handleFormRegisterSubmit()" method="POST">
      <p>
        Tu as déjà un compte ?
        <router-link :to="{ name: 'login' }">Se connecter</router-link>
      </p>
      <div class="form-title">
        <h2>Informations personnelles</h2>
      </div>

      <div class="form-group">
        <label for="firstname">Prénom :</label>
        <input v-model="first_name" type="text" class="form-control" id="firstname" name="firstname" placeholder="Prénom" />
      </div>
      <div class="error" v-if="this.errors.first_nameEmpty">Champ obligatoire</div>

      <div class="form-group">
        <label for="lastname">Nom :</label>
        <input v-model="last_name" type="text" class="form-control" id="lastname" name="lastname" placeholder="Nom" />
      </div>
      <div class="error" v-if="this.errors.last_nameEmpty">Champ obligatoire</div>

      <div class="form-group">
        <label for="address">Adresse :</label>
        <input v-model="address" type="text" class="form-control" id="address" name="address" placeholder="Adresse" />
      </div>
      <div class="error" v-if="this.errors.addressEmpty">Champ obligatoire</div>

      <div class="form-group">
        <label for="postalcode">Code postal :</label>
        <input v-model="postal_code" type="number" class="form-control" id="postalcode" name="postalcode" placeholder="Code postal" />
      </div>
      <div class="error" v-if="this.errors.postal_codeEmpty">Champ obligatoire</div>

      <div class="form-group">
        <label for="city">Ville :</label>
        <input v-model="city" type="text" class="form-control" id="city" name="city" placeholder="Ville" />
      </div>
      <div class="error" v-if="this.errors.cityEmpty">Champ obligatoire</div>

      <div class="form-title">
        <h2 class="info">Information du compte :</h2>
      </div>

      <div class="form-group">
        <label for="email">Email :</label>
        <input v-model="email" type="email" class="form-control" id="email" name="email" placeholder="Email" />
      </div>
      <div class="error" v-if="this.errors.emailEmpty">Champ obligatoire</div>

      <div class="form-group">
        <label for="password">Mot de passe :</label>
        <input v-model="password" type="password" class="form-control" id="password" name="password" placeholder="Mot de passe" />
      </div>
      <div class="error" v-if="this.errors.passwordEmpty">Champ obligatoire</div>

      <!-- <div class="cgu"><input type="checkbox" name="checkbox" id="checkbox" /><label>J'ai lu et pris connaissance des conditions générales d'utilisation</label></div>
      <div class="error" v-if="this.errors.checkboxEmpty">Vous devez accepter les conditions générales d'utilisation</div> -->
      <button type="submit" class="form-button">Créer mon compte</button>
    </form>
  </section>
</template>

<script>
  export default {
    name: "RegisterView",
    data() {
      return {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        address: "",
        postal_code: "",
        city: "",
        login: "",

        errors: {
          emailEmpty: false,
          passwordEmpty: false,
          first_nameEmpty: false,
          last_nameEmpty: false,
          addressEmpty: false,
          postal_codeEmpty: false,
          cityEmpty: false,
        },
      };
    },

    methods: {
      async handleFormRegisterSubmit(event) {
        console.log("Formulaire soumis", event);

        this.errors.emailEmpty = this.email === "";
        this.errors.passwordEmpty = this.password === "";
        this.errors.first_nameEmpty = this.first_name === "";
        this.errors.last_nameEmpty = this.last_name === "";
        this.errors.addressEmpty = this.address === "";
        this.errors.postal_codeEmpty = this.postal_code === "";
        this.errors.cityEmpty = this.city === "";
        // this.errors.checkboxEmpty = this.checkbox === "";

        if (
          !this.errors.emailEmpty ||
          !this.errors.passwordEmpty ||
          !this.errors.firstnameEmpty ||
          !this.errors.lastnameEmpty ||
          !this.errors.addressEmpty ||
          !this.errors.postal_codeEmpty ||
          !this.errors.cityEmpty 
          // !this.errors.checkboxEmpty
        ) {
          this.$store.dispatch("registerForm", {
            password: this.password,
            first_name: this.first_name,
            last_name: this.last_name,
            address: this.address,
            city: this.city,
            postal_code: this.postal_code,
            email: this.email,
            login: this.first_name,
            phone: null,
          });
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
    margin: 0 auto;
    color: $primaryColor;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: $tertiaryColor;
      padding: 2em;
      border-radius: 0.8em;
      box-shadow: 0 0 10px $tertiaryColor;
      width: 25%;

      p {
        font-weight: bold;
        a {
          color: $quaternaryColor;
          text-decoration: underline;
          margin-left: 0.1em;
        }
      }

      .error {
        color: red;
        font-size: 0.8em;
        margin-top: 00.5em;
      }

      .form-title {
        margin-bottom: 0.5em;
        padding: 0.5em;
        font-size: 1.1em;
        font-weight: bold;
        margin-top: 1em;
        margin-bottom: 1em;

        h2 {
          font-size: 1.5em;
          color: $primaryColor;
          font-weight: bold;
          text-transform: uppercase;
          background: linear-gradient(to top, #30dd8a, #30dd8a 0.5em, transparent 0.5em) no-repeat;
        }
      }

      .form-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 97%;
        margin-bottom: 1em;
      }

      .form-group input {
        width: 100%;
        height: 2.3rem;
        border: double 2px transparent;
        border-radius: 0.8em;
        background-image: linear-gradient(white, white), linear-gradient(to right, #30dd8a, #0ba360);
        background-origin: border-box;
        background-clip: padding-box, border-box;
        font-size: 1.1em;
        color: $primaryColor;
        text-align: center;

        &:focus {
          outline: none;
          border: double 2px transparent;
          border-radius: 50px;
          background-image: linear-gradient(white, white), linear-gradient(to right, #0ba360, #30dd8a);
        }

        &::placeholder {
          color: $primaryColor;
        }
      }

      .form-group label {
        font-size: 1em;
        color: $primaryColor;
        margin-right: 0.5em;
        text-align: left;
        width: 30%;
        font-weight: bold;

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

      span {
        margin-left: 0.2em;
      }

      .form-button {
        background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
        box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
      }
    }

    .cgu {
      display: flex;
      align-items: center;
      margin-top: 1em;
      margin-bottom: 1em;
      font-size: 1.1em;
      font-weight: bold;
      color: $primaryColor;
      text-align: center;
    }
  }


  @media (max-width: 1650px) {
    section {
      form {
        width: 32%;
        min-height: 100vh;
        align-items: center;
      }
    }
  }
  @media (min-width: $mediaTablet) and (max-width: $mediaLaptop) {
  section {
    form {
      width: 100%;
      padding: 2em 0;
      margin: 0;
      border-radius: 0;
      box-shadow: none;

      .form-group {
        width: 50%;


        label{
          width: 30%;
        }
      }
    }
  }
}

@media (min-width: $mediaSmartphone) and (max-width: $mediaTablet) {
  section {
    form {
      width: 100%;
      padding: 2em 0;
      margin: 0;
      border-radius: 0;
      box-shadow: none;

      .form-group {
        width: 60%;
        flex-direction: column;
        justify-content: center;

        label{
          width: 100%;
          margin-bottom: 0.5em;
          
        }
      }
    }
  }
}

@media (max-width: $mediaSmartphone) {
  section {
    form {
      height: 100vh;
      width: 100%;
      box-shadow: none;
      margin:0;
      padding: 2em 0;
      border-radius: 0;

      .form-title{
        margin-top: 0.2em;
        margin-bottom: 0.2em;
        font-size: 1em;
      }

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
