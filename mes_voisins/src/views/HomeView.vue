<template>
  <section>
    <div class="home">
      <div class="svg-wrapper">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="60" width="320" />
          <div class="text">Mes voisins</div>
        </svg>
      </div>
      <div class="intro">
        <h2>Quel est le concept ?</h2>
        <p><span>Mes voisins</span> est un site de mise en relation entre voisins proches.</p>
        <p>Par exemple d'un meme quartier, d'une meme ville, etc.</p>
        <p>C'est une plateforme d'entraide destinée à échanger des biens ou des services entre les membres de la communauté.</p>

        <h2>Comment ça marche ?</h2>

        <p>
          Chaque membre de la communauté peut créer un compte et publier une ou plusieurs annonces et chaque membre peut également répondre à des annonces publiées par
          d'autres membres.
        </p>
        <p>
          Les annonces sont classées par types et par catégories et les membres peuvent les filtrer par catégories. Par exemple : je peux filter par types d'annonce
          (offre ou demande) et/ou par catégories (bien ou service).
        </p>
        <p>Les résultats apparaitront en fonction de la localisation demandée lors de la recherche.</p>

        <h2>Pourquoi ?</h2>

        <p>
          Depuis la crise du COVID-19, le pouvoir d'achat n'a cessé de diminuer pour une majorité de la population. Durant cette période, il est important de pouvoir
          compter sur les services et les biens que les autres ont proposés.
        </p>
      </div>
      <div class="ads">
        <div class="svg-wrapper-ads">
          <svg height="60" width="500" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape-ads" height="60" width="500" />
            <div class="text-ads">Nos dernières annonces</div>
          </svg>
        </div>
      </div>
      <CarouselComponent :slides="slides" :interval="3000" controls indicators />
    </div>
  </section>
</template>

<script>
  import CarouselComponent from "@/components/carousel/CarouselComponent.vue";

  export default {
    name: "HomeView",
    components: { CarouselComponent },
    data: () => ({
      slides: [
        "https://picsum.photos/id/1032/1200/700",
        "https://picsum.photos/id/1002/1200/700",
        "https://picsum.photos/id/1020/1200/700",
        "https://picsum.photos/id/1075/1200/700",
        "https://picsum.photos/id/1036/1200/700",
      ],
    }),
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";

  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 80%;
    margin: 0 auto;
    background: $tertiaryColor;
    color: $primaryColor;
  }

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .svg-wrapper {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      margin-top: 5em;
      width: 320px;
    }
    .shape {
      stroke-dasharray: 140 540;
      stroke-dashoffset: -474;
      stroke-width: 0.5em;
      fill: transparent;
      stroke: #30dd8a;
      border-bottom: 5px solid black;
      transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
    }
    .text {
      font-family: "Roboto Condensed";
      font-size: 1.5em;
      line-height: 2em;
      letter-spacing: 0.5em;
      color: $primaryColor;
      top: -2.35em;
      position: relative;
      text-transform: uppercase;
      font-weight: bold;
    }
    .svg-wrapper:hover .shape {
      stroke-width: 5px;
      stroke-dashoffset: 0;
      stroke-dasharray: 760;
    }

    .intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: $primaryColor;
      background-color: $tertiaryColor;
      border-radius: 10px;
      width: 80%;
      margin-bottom: 3em;
      margin-top: -4em;
      padding: 1em;
      box-shadow: 0px 0px 0px 2px #30dd8a;
      border-radius: 1em;

      p {
        display: block;
        padding: 1em;

        span {
          font-size: 1.2em;
          font-weight: bold;
          margin-bottom: 0.2em;
        }
      }

      h2 {
        font-size: 2em;
        margin-bottom: 1em;
        background: linear-gradient(to top, #30dd8a, #30dd8a 0.5em, transparent 0.5em) no-repeat;
        // background-size: 0 100%;
        // transition: background-size 1s;
        // &:hover {
        //   background-size: 100% 100%;
        // }
      }
    }

    .ads {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: $primaryColor;
      .svg-wrapper-ads {
        height: 100px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        margin-top: 5em;
        width: 500px;
      }
      .shape-ads {
        stroke-dasharray: 210 760;
        stroke-dashoffset: -714;
        stroke-width: 0.5em;
        fill: transparent;
        stroke: #30dd8a;
        border-bottom: 5px solid black;
        transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
      }
      .text-ads {
        font-family: "Roboto Condensed";
        font-size: 1.2em;
        line-height: 1em;
        letter-spacing: 0.3em;
        color: $primaryColor;
        top: -2.20em;
        position: relative;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
    .svg-wrapper-ads:hover .shape-ads {
      stroke-width: 5px;
      stroke-dashoffset: 0;
      stroke-dasharray: 1260;
    }
  }

  // Media queries

  // Tablet

  @media (max-width: $mediaTablet) {
    section {
      width: 100%;
    }
  }
</style>
