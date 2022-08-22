<template>
  <section>
    <div class="home">
      <div class="intro">
        <p>
          <strong>Mes voisins</strong> est un site de mise en relation entre voisins proches. Par exemple d'un meme quartier, d'une meme ville, etc. C'est une plateforme
          d'entraide destinée à échanger des biens ou des services entre les membres de la communauté. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ab
          animi libero, eum fugit magni fugiat minima, velit vitae incidunt sint obcaecati alias fuga distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquam ab exercitationem repellat laboriosam delectus accusamus quia deserunt repudiandae voluptas, sint reiciendis, ducimus libero quis doloremque?
        </p>
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
        "https://picsum.photos/id/1032/900/400",
        "https://picsum.photos/id/1033/900/400",
        "https://picsum.photos/id/1037/900/400",
        "https://picsum.photos/id/1035/900/400",
        "https://picsum.photos/id/1036/900/400",
      ],
    }),
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";

  section {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 80%;
    margin: 0 auto;
    background: $secondaryColor;
    
    .home {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .container {
        h2 {
          color: $tertiaryColor;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-shadow: 0.1em 0.1em 0.1em $quaternaryColor;
          text-decoration: underline;
        }
      }

      .intro {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      .intro img {
        width: 15em;
        height: auto;
        margin-left: 1em;
        margin-right: 1em;
      }
      .intro p {
        text-align: center;
        font-size: 1.2em;
        margin-top: 20px;
      }
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
