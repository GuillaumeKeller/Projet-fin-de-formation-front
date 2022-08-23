<template>
  <section>
    <form @submit.prevent="login">
      <div class="form-title">
        <h2>Connexion</h2>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" placeholder="Email" />
        <div class="error">Vous devez saisir un identifiant !</div>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" placeholder="Mot de passe" />
        <div class="error">Vous devez saisir un mot de passe !</div>
      </div>
      <div class="error" style="font-weight: bold; margin-bottom: 1em; text-align: center">Identifiants incorrects</div>
      <div class="form-group">
        <button type="submit" class="form-button">Se connecter</button>
      </div>
    </form>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";

  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    background: $tertiaryColor;
    color: $primaryColor;

    h1 {
      font-size: 1.5em;
      color: $tertiaryColor;
      font-weight: bold;
      margin-bottom: 0.5em;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;

      .form-title {
        padding: 0.5em;
        font-size: 1.1em;
        font-weight: bold;
        margin-top: 1em;

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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
      }

      .form-group input {
        width: 100%;
        height: 2.5rem;
        border: double 2px transparent;
        border-radius: 50px;
        background-image: linear-gradient(white, white), linear-gradient(to right, #30dd8a, #0ba360);
        background-origin: border-box;
        background-clip: padding-box, border-box;
        font-size: 1.1em;
        color: $primaryColor;

        &:focus {
          outline: none;
          border: double 2px transparent;
          border-radius: 50px;
          background-image: linear-gradient(white, white), linear-gradient(to right, #0ba360, #30dd8a);
        }
      }

      .form-group label {
        font-size: 1em;
        color: $tertiaryColor;
        margin-bottom: 0.5em;
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

    .error {
      font-size: 0.8em;
      color: #f00;
      text-align: center;
      margin-top: 0.5em;
    }
  }
</style>
