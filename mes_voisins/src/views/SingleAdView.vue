<template>
  <section>
    <h1>Titre de l'annonce</h1>
    <div class="ad__data">
      <img class="ad__picture" src="https://picsum.photos/id/1041/400/180" alt="" />
      <div class="ad__info">
        <span> Date de publication : </span>
        <span> Dernière modification : </span>
        <span> Etat de l'annonce : </span>
        <span> Localisation : </span>
        <h2>Description :</h2>
        <div class="">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, autem suscipit sunt maxime nobis ab provident voluptate perferendis iusto dolorum non
            dignissimos. Asperiores modi illo in voluptatibus dolorem quis necessitatibus voluptates veniam. Veritatis, laudantium nisi. Quaerat laudantium asperiores
            assumenda quidem, corporis dolore aliquid labore illo vitae! Optio dolorem voluptatum et molestiae, voluptatibus repellat minus nemo ab excepturi numquam
            iste! Eligendi voluptates id temporibus, molestias ex delectus reprehenderit nam eum quasi excepturi quas voluptate iste, quam distinctio quo, aliquid modi
            officia esse consequuntur assumenda et vero ea similique! Accusamus quam nostrum libero. Ratione incidunt doloremque porro in animi facilis fuga veritatis!
          </p>
        </div>
      </div>
    </div>

    <!-- Visible si connecté -->
    <div class="ad__contact">
      <h2>Coordonnées</h2>
      <div class="ad__contact--details">
        <img class="user__avatar" src="@/assets/img/avatar.jpg" alt="" />
        <!-- Image de l'utilisateur -->
        <div class="user__contact">
          <span> Prénom : </span>
          <span> Nom : </span>
          <span> Email : </span>
          <span> Téléphone : </span>
        </div>
      </div>
    </div>
    <div class="ad__comment">
      <h2>Commentaires</h2>
      <textarea placeholder="Ecrire votre commentaire ici" rows="10" />
      <button type="submit">Envoyer</button>
      <div class="">
        <!-- Component CommentList -->
        Ici on affiche les commentaires avec un component CommentList
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";

  section {
    display: flex;
    flex-direction: column;
    background-color: $backgroundcolor;
    background-size: cover;
    background-repeat: repeat;
    height: 100%;
    padding: 1.5em;
    position: absolute;

    .ad__data {
      display: flex;
      margin-bottom: 1em;
      border: 0.3em solid $maincolor;
      border-radius: 0.3em;

      .ad__info {
        flex-direction: column;
        justify-content: space-between;
        padding: 1em;
        display: flex;
        margin-left: 0.3em;

        h2 {
          font-size: 1.5em;
          color: $fontcolor;
          font-weight: bold;
          text-transform: uppercase;
          text-align: left;
          text-decoration: underline;
        }

        span {
          font-size: 1em;
          color: $fontcolor;
          display: block;
          font-weight: bold;
          padding: 0.2em;
          text-align: left;
          margin-top: 0.2em;
        }

        p {
          font-size: 1em;
          color: $fontcolor;
          font-weight: bold;
          text-align: justify;
          line-height: 1.2em;
          margin-right: 0.5em;
        }
      }

      img {
        width: 100%;
        height: auto;
        padding: 1em;
      }
    }

    .ad__contact {
      display: flex;
      justify-content: center;
      margin-bottom: 1em;
      border: none;
      flex-direction: column;
      padding: 1em;
      border: 0.3em solid $maincolor;
      border-radius: 0.3em;

      h2 {
        font-size: 1.5em;
        color: $fontcolor;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 0.3em;
        text-align: left;
      }

      .user__avatar {
        display: block;
        width: 7%;
        padding: 0.1em;
        border-radius: 0.3em;
      }

      .ad__contact--details {
        display: flex;

        .user__contact {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        span {
          font-size: 1em;
          color: $fontcolor;
          display: block;
          font-weight: bold;
          text-align: left;
          margin-top: 0.2em;
          margin-left: 0.5em;
        }
      }
    }

    .ad__comment {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 1em;
      border: none;
      flex-direction: column;
      padding: 1em;
      border: 0.3em solid $maincolor;
      border-radius: 0.3em;

      h2 {
        font-size: 1.5em;
        color: $fontcolor;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 0.3em;
        text-align: left;
      }
    }

    h1 {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 0.5em;
      box-sizing: border-box;
      border-radius: 0.3em;
      width: 100%;
      padding: 0.5em;
      background-color: $maincolor;
      color: $fontcolor;
    }

    textarea {
      border-radius: 5px;
      border: 1px solid $maincolor;
      margin: 0.5em;
      font-size: 1.1em;
      color: $fontcolor;
      margin-bottom: 0.5em;
    }

    button {
      margin-top: 2em;
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

      &:hover {
        background-color: $tertiarycolor;
      }
    }
  }

  // Media queries

  // Tablet

  @media (min-width: $mediaSmartphone) and (max-width: $mediaTablet) {
    section {
      display: flex;
    }
    .ad__data {
      flex-direction: column;
      justify-content: center;

      .ad__picture {
        display: block;
        width: auto;
      }

      .ad__info {
        width: auto;
      }
    }
  }

  // Smartphone

  @media (max-width: $mediaSmartphone) {
    section {
      display: flex;
    }
    .ad__data {
      flex-direction: column;
      justify-content: center;

      .ad__picture {
        display: block;
        width: auto;
      }

      .ad__info {
        width: auto;
      }
    }
  }
</style>
