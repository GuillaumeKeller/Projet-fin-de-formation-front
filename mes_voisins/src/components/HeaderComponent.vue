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
    <div class="btn">
      <button href="#">Inscription</button>
      <button href="#">Connexion</button>
    </div>
  </header>
</template>

<script></script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";

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
      vertical-align: middle;
    }

    input {
      width: 15rem;
      height: 2rem;
      border-radius: 5px;
      border: 1px solid $maincolor;
      padding: 5px;
      font-size: 1em;
      color: $fontcolor;
    }

    button {
      background-color: $quaternarycolor;
      color: $fontcolor;
      font-weight: bold;
      border: none;
      padding: 0.6rem;
      border-radius: 5px;
      font-size: 1.2rem;
      cursor: pointer;
      margin: 0.5rem;
      box-shadow: 0.1em 0.1em 0.1em $tertiarycolor;
    }

    button:hover {
      color: $tertiarycolor;
    }
  }

  @media (max-width: $mediaSmartphone) {
    header {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5em;
      h1 {
        font-size: 1.4rem;
      }
      .fa-people-carry-box {
        font-size: 3em;
      }
      .search {
        justify-content: center;
        padding: 0.5em;
        input {
          width: 80%;
        }
      }

      .btn {
        width: 100%;
      }
    }
  }

</style>
