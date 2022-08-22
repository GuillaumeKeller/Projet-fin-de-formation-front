<template>
  <section>
    <h2>Connexion</h2>
    <form>
      <label>
        Login
        <input type="text" name="login" placeholder="john.doe@example.com"/>
        <div class="error">
          Vous devez saisir un identifiant !
        </div>
      </label>

      <label>
        Mot de passe
        <input type="password" name="password" />
        <div class="error" >
          Vous devez saisir un mot de passe !
        </div>
      </label>

      <div class="error" style="font-weight: bold; margin-bottom: 1em; text-align: center;">
        Identifiants incorrects
      </div>

      <button>
        Se connecter
      </button>
    </form>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

section{

    background-color: $tertiaryColor;
    padding-top: 10%;
    padding-bottom: 10%;
}

h2 {
  text-align: center;
  padding-top: 1em;
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
  
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  margin: 0;
  background-color: $tertiaryColor;

  label {
    margin-bottom: 2.5em;

    input {
      display: block;
      margin: 5px 0;
      width: 100%;
      padding: 0.75em 1.5em;
      border-radius: 0.5em;
      background: $tertiaryColor;
      border: none;
      box-sizing: border-box;
    }
  }

  .error
  {
    color: $quaternaryColor;
  }

  button {
    display: block;
    margin: 5px 0;
    padding: 1.2em 1.5em;
    border-radius: 0.5em;
    background: $primaryColor;
    color: black;
    font-weight: bold;
    border: none;
    box-sizing: border-box;
    width: 25%;

    &:hover
    {
      background: darken( $primaryColor, 10% );
      cursor: pointer;
    }
  }
}
</style>
