<template>
  <section>
    <h1>Inscription</h1>
    <form action="" method="POST">
      <div class="form-title">
        <h2>Informations personnelles</h2>
      </div>

      <div class="form-group">
        <label for="phonenumber">Prénom</label>
        <input type="text" class="form-control" id="text" name="text" placeholder="Prénom" value="" />
      </div>

      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Nom" value="" />
      </div>

      <div class="form-group">
        <label for="adress">Adresse</label>
        <input type="text" class="form-control" id="adress" name="adress" placeholder="Adresse" value="" />
      </div>

      <div class="form-group">
        <label for="postalcode">Code postal</label>
        <input type="number" class="form-control" id="postalcode" name="postalcode" placeholder="Code postal" value="" />
      </div>

      <div class="form-group">
        <label for="city">Ville</label>
        <input type="text" class="form-control" id="city" name="city" placeholder="Ville" value="" />
      </div>

      <div class="form-title">
        <h2 class="info">Information du compte</h2>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Email" value="" />
      </div>

      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="Mot de passe" />
      </div>

      <div class="form-group">
        <label for="password_confirmation">Confirmation du mot de passe</label>
        <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Confirmation du mot de passe" />
      </div>
      <div class="cgu">
        <input type="checkbox" name="checkbox" id="checkbox"><label>J'ai lu et pris connaissance des conditions générales d'utilisation</label>
      </div>
      <button type="submit" class="form-button">S'inscrire</button>

    </form>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";

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
        margin-bottom: 0.5em;
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
</style>
