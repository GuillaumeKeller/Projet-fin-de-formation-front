<template>
  <section>
    <h1>Inscription</h1>
    <form action="" method="POST">
      <div class="form-title">
        <h2>Informations personnelles</h2>
      </div>

      <div class="form-group">
        <label for="phonenumber">Prénom</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="Prénom" value="" />
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
        <h2>Information du compte</h2>
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

      <button type="submit" class="btn btn-primary">S'inscrire</button>
    </form>
  </section>
</template>

<script></script>

<style lang="scss" scoped> 
  @import "@/assets/scss/variables.scss"; 
  @import "@/assets/scss/media_queries.scss"; 

  section {
    padding: 1.5em;
    background-color: $tertiaryColor; 
    background-size: cover;
    display: flex;
    flex-direction: column;

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
      width: 100%;

      .form-title {
        margin-bottom: 0.5em;
        border-radius: 5px;
        border: 1px solid $primaryColor;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
        width: 100%;
        padding: 0.5em;
        background-color: $tertiaryColor;
        color: $quaternaryColor;
        font-size: 1.1em;
        font-weight: bold;

        h2 {
          font-size: 1.2em;
          color: $tertiaryColor;
          font-weight: bold;
          padding: 0.2em;
        }
      }

      .form-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      .form-group input {
        width: 100%;
        height: 2rem;
        border-radius: 5px;
        border: 1px solid $quaternaryColor;
        padding: 5px;
        font-size: 1.1em;
        color: $tertiaryColor;
        margin-bottom: 0.5em;
      }

      .form-group label {
        font-size: 1.1em;
        color: $tertiaryColor;
        margin-bottom: 0.5em;
        margin-top: 0.3em;
      }

      .form-group input:focus {
        border: 1px solid $primaryColor;
      }

      button {
        margin-top: 2em;
        background-color: $quaternaryColor;
        color: $tertiaryColor;
        font-weight: bold;
        border: none;
        padding: 0.6rem;
        border-radius: 5px;
        font-size: 1.2rem;
        cursor: pointer;
        margin: 0.5rem;
        box-shadow: 0.1em 0.1em 0.1em darken ($quaternaryColor, 30%);
        width: 100%;

        &:hover {
          background-color: lighten ($quaternaryColor, 30%);
        }
      }

      span{
        margin-left: 0.2em;
      }
    }
  }
</style>
