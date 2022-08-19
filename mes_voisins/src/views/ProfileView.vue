<template>
  <div class="profil_page">
    <div class="profile">
      <div class="infos">
        <img class="profile_picture" src="../assets/img/meme.jpg" alt="" />
        <ul>
          <li><span class="ad__info">Pseudo:</span></li>
          <li><span class="ad__info">Membre depuis le :</span></li>
          <li><span class="ad__info">Email :</span></li>
          <li><span class="ad__info">Tel :</span></li>
        </ul>
        <p class="ad__description">
          Mangeux d'marde de sacristi de boswell de cibouleau de baptême de doux
          Jésus de taboire de purée de bout d'ciarge de charrue d'étole de
          géritole.
        </p>
      </div>
    </div>
    <section>
      <div class="ads">
        <h1>Annonces</h1>

        <div class="ad">
          <img src="https://picsum.photos/200" alt="" />
          <div class="ad__info">
            <h2>Titre de l'annonce</h2>
            <p>
              Calvince d'étole de mautadine de verrat de cibole de gériboire de ciarge d'ostifie de bout d'ciarge de cul de géritole de boswell de taboire de cimonaque d'enfant d'chienne de sacrament de sacristi de maudine de saintes fesses.
            </p>
          </div>
        </div>
        <div class="ad">
          <img src="https://picsum.photos/200" alt="" />
          <div class="ad__info">
            <h2>Titre de l'annonce</h2>
            <p>
              Calvince d'étole de mautadine de verrat de cibole de gériboire de ciarge d'ostifie de bout d'ciarge de cul de géritole de boswell de taboire de cimonaque d'enfant d'chienne de sacrament de sacristi de maudine de saintes fesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/media_queries.scss";

.profil_page {
  min-height: 1000px;
}

.infos {
  width: 80%;
  margin-top: 2em;
  margin-left: 10%;
  margin-bottom: 3em;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    display: flex;
    width: 150px;
    border-radius: 50%;
    border: 2px solid black;
  }
  ul {
    height: 80px;
    width: 300px;
    border: solid 2px black;
    background-color: $maincolor;
    text-align: left;
    padding: 10px 0 0 10px;
  }

  p {
    height: 150px;
    width: 500px;
    border: solid 2px black;
    background-color: $maincolor;
    text-align: left;
    padding: 10px 0 0 10px;
  }
}
section {
  height: 100%;
  width: 80%;
  margin-left: 10%;
  border: solid 2px black;

  h1 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.8em;
    margin-left: 10%;
    text-align: left;
  }

  .ads {
    padding: 1.3em 0 1.3em 0;
    background-color: $maincolor;
  }

  .ad {
    padding: 2em 0 2em 0;
    border: solid 2px black;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: $backgroundcolor;

    img{
        border: 2px solid black;
        margin-left: 3%;
    }
  }

  .ad__info {
    p {
      border: solid 2px black;
      height: 100px;
      padding: 10px 10px;
      
      margin: 2em 2em ;
      background-color: $maincolor;
    }
  }
}
</style>
