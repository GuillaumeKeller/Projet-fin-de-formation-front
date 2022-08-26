<template>
  <section v-if="this.ad">
    <h1 v-html="this.ad.title.rendered"></h1>
    <div class="ad__data">
      <img :src="this.img.source_url" v-if="this.img" class="ad__picture" alt=" Image de l'annonce" />
      <div class="ad__info">
        <span> Date de publication : <p v-html="this.ad.date "> </p></span>
        <span> Dernière modification : <p v-html="this.ad.modified "> </p> </span>
        <span v-if="this.status"> Etat de l'annonce: <p v-html="this.status.name"> </p> </span>
        <span> Localisation : <p v-html="this.userdata[0]['postal_code'] "></p> <p v-html="this.userdata[0]['city'] "></p> </span>
        <h2> Description :</h2>
        <div class="">
          <p v-html="this.ad.content.rendered">
          </p>
        </div>
      </div>
    </div>

    
    <div class="ad__contact">
      <h2>Coordonnées</h2>
      <div class="ad__contact--details" v-if="!this.$store.state.isDisconnected">
        <img class="user__avatar" src="@/assets/img/avatar.jpg" alt="" />
        
        <div class="user__contact">
          <span> Prénom : <p v-html="this.userdata[0]['first_name'] "></p></span>
          <span> Nom : <p v-html="this.userdata[0]['last_name'] "></p> </span>
          <span> Email : <p v-html="this.userdata[0]['email'] "> </p> </span>
          <span> Téléphone : <p v-html="this.userdata[0]['phone'] "> </p> </span>
        </div>
      </div>
    </div>
    
      
    <!-- Component CommentList -->
    <CommentForm @comment-added="this.handleCommentAdded" />
    <CommentList v-if="(typeof this.ad._embedded.replies != 'undefined')" :comments="this.ad._embedded.replies[0]" />
    
  </section>
</template>

<script>
import adService from "@/services/adService";
import CommentForm from "@/components/CommentForm.vue";
import CommentList from "@/components/CommentList.vue";

export default 
{
  components: {
    CommentForm,
    CommentList 
  },
  
  async created(){
    this.ad = await adService.loadAd(this.$route.params.id);
    this.type = await adService.loadAdType(this.$route.params.id)
    this.category = await adService.loadAdCategory(this.$route.params.id)
    this.status = await adService.loadAdStatus(this.$route.params.id);
    this.userdata = await adService.loadUserData(this.ad.author);
    console.log(this.userdata);
    if (this.ad.featured_media > 0)
    {

      this.img = await adService.loadAdImage(this.ad.featured_media);

    }

    this.type = this.type[0];
    this.category = this.category[0];
    this.status = this.status[0];

  },

  data(){

    return {

      ad: false,
      type: false,
      category: false,
      status: false, 
      img: false,
      userdata: false,
    }
  },
  methods: 
    {
      // Méthode qui ajoute le commentaire nouvellement créé à la liste des commentaires
      // de la recette sans la recharger complètement
      async handleCommentAdded( newCommentData ) 
      {
        // Si la recette n'a aucun commentaire, on créé la propriété _embedded.replies
        // qui contiendra un tableau vide pour permettre l'ajout du premier commentaire
        if( typeof this.recipe._embedded.replies == 'undefined') 
        {
          // Attention, replies est un tableau a une entrée qui contient 
          // un tableau des objets commentaires (comme dans le JSON de la réponse de WP)
          this.recipe._embedded.replies = [ [] ];
        }

        // On ajoute le nouveau commentaire au début de la
        // liste des commentaires de la recette
        this.recipe._embedded.replies[0].unshift(newCommentData);
      }
    }

  
}

</script>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";

  section {
    display: flex;
    flex-direction: column;
    background-color: $tertiaryColor;
    background-size: cover;
    background-repeat: repeat;
    height: 100%;
    padding: 1.5em;
    position: absolute;

    .ad__data {
      display: flex;
      margin-bottom: 1em;
      border: 0.3em solid $secondaryColor;
      border-radius: 0.3em;

      .ad__info {
        flex-direction: column;
        justify-content: space-between;
        padding: 1em;
        display: flex;
        margin-left: 0.3em;

        h2 {
          font-size: 1.5em;
          color: $primaryColor;
          font-weight: bold;
          text-transform: uppercase;
          text-align: left;
          text-decoration: underline;
        }

        span {
          font-size: 1em;
          color: $primaryColor;
          display: block;
          font-weight: bold;
          padding: 0.2em;
          text-align: left;
          margin-top: 0.2em;
        }

        p {
          font-size: 1em;
          color: $primaryColor;
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
      border: 0.3em solid $secondaryColor;
      border-radius: 0.3em;

      h2 {
        font-size: 1.5em;
        color: $primaryColor;
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
          color: $primaryColor;
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
      border: 0.3em solid $secondaryColor;
      border-radius: 0.3em;

      h2 {
        font-size: 1.5em;
        color: $primaryColor;
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
      background-color: $primaryColor;
      color: $tertiaryColor;
    }

    textarea {
      border-radius: 5px;
      border: 1px solid $tertiaryColor;
      margin: 0.5em;
      font-size: 1.1em;
      color: black;
      margin-bottom: 0.5em;
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
      box-shadow: 0.1em 0.1em 0.1em lighten ($quaternaryColor, 30%);

      &:hover {
        background-color: darken($quaternaryColor, 20%);
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
