<template>
  <header>
    <div>
      <font-awesome-icon icon="fa-solid fa-people-carry-box" />
      <h1>Mes voisins</h1>
    </div>
    <div class="search">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <input type="text" placeholder="Rechercher" />
    </div>
    <div>
      <button href="#">Inscription</button>
      <button href="#">Connexion</button>
    </div>
  </header>
</template>

<script></script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    color: $fontcolor;
    background-color: $maincolor;

    h1 {
      font-size: 1.5em;
      font-weight: bold;
    }

    .fa-people-carry-box {
      font-size: 2em;
      color: $fontcolor;
    }

    .fa-magnifying-glass {
      margin-right: 10px;
      height: 1.5em;
    }

    input{
      width: 300px;
      height: 30px;
      border-radius: 5px;
      border: 1px solid $maincolor;
      padding: 5px;
      font-size: 1em;
      color: $fontcolor;
    }

    button {
      background-color: $tertiarycolor;
      color: $fontcolor;
      border: none;
      padding: 10px;
      border-radius: 5px;
      font-size: 1.2rem;
      cursor: pointer;
      margin: 10px;
    }
  }
</style>
