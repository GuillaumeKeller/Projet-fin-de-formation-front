<template>
  <section v-if="this.ad">
    <h1 v-html="this.ad.title.rendered"></h1>
    <div class="ad__data">
      <img :src="this.img.source_url" v-if="this.img" class="ad__picture" alt=" Image de l'annonce" />
      <div class="ad__info">
        <span v-if="this.ad"> Publiée le <p v-html="this.ad.date "> </p></span>
        <span v-if="this.status"> Etat de l'annonce: <p v-html="this.status.name"> </p> </span>
        <span v-if="this.location"> Localisation :<p v-html="this.location.name"> </p> </span>
        <div class="description">
          <h2> Description</h2>
          <p v-html="this.ad.content.rendered"></p>
        </div>
      </div>
    </div>
    
    
    <div class="ad__contact">
      <h2>Coordonnées</h2>
      <div class="msg" v-if="!this.$store.state.isConnected">
        <router-link :to="{ name: 'login' }">
          <button type="submit" class="form-button">Connectez-vous pour accéder aux coordonnées</button>
        </router-link>
      </div>
      <div class="ad__contact--details" v-else >
        <img class="user__avatar" :src="this.img.author_avatar_urls" v-if="this.img" alt="" />
        
        <div class="user__contact">
          <span v-if="this.userdata"> Prénom : <p v-html="this.userdata[0]['first_name'] "></p></span>
          <span v-if="this.userdata"> Nom : <p v-html="this.userdata[0]['last_name'] "></p> </span>
          <span v-if="this.userdata"> Email : <p v-html="this.userdata[0]['email'] "> </p> </span>
          <span v-if="this.userdata"> Téléphone : <p v-html="this.userdata[0]['phone'] "> </p> </span>
        </div>
      </div>
    </div>
    
    

    <div class="comment">
    <!-- Component CommentList -->
    <CommentForm @comment-added="this.handleCommentAdded" />
    <CommentList v-if="(typeof this.ad._embedded.replies != 'undefined')" :comments="this.ad._embedded.replies[0]" />
  </div>
  </section>
</template>

<script>
  import adService from "@/services/adService";
  import CommentForm from "@/components/CommentForm.vue";
  import CommentList from "@/components/CommentList.vue";
  import storage from "@/utils/storage";
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
      console.log(storage.get('userData'));
      //formater la date en français en affichant le jour en premier, le mois, et l'année
      this.ad.date = this.ad.date.split('T')[0].split('-').reverse().join('/');
      
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
      
      async handleCommentAdded( newCommentData ) 
      {
        
        if( typeof this.ad._embedded.replies == 'undefined') 
        {
          
          this.ad._embedded.replies = [ [] ];
        }
        
        this.ad._embedded.replies[0].unshift(newCommentData);
      }
    },
    
    //convertir this.ad.date en français
    filters: {
      formatDate: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.substr(8, 2) + '/' + value.substr(5, 2) + '/' + value.substr(0, 4)
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
    width: auto;
    padding-bottom: 1em;
    padding-top: 2em;
    //position: absolute;
    
    .ad__data {
     flex-direction: column;
     justify-content: center;
      margin-bottom: 1em;
      border: 0.2em solid #30dd8a;
      border-radius: 0.3em;

      img{
        width: 30%;
        height: auto;
        border-radius: 0.8em;
        margin-top: 1em;
      }

      .ad__info {
        display: inline-block;
        flex-direction: column;
        justify-content: center;
        padding: 1em;
        display: flex;
        margin-left: 0.3em;
        
        
        h2 {
          font-size: 1.5em;
          color: $backgroundColor;
          font-weight: bold;
          text-transform: uppercase;
        
         
          margin-bottom: 0.5em;
        }
        
        span {
          font-size: 1em;
          color: $backgroundColor;
          display: flex;
          font-weight: bold;
          padding: 0.2em;
         justify-content: center;
          margin-top: 1em;
          margin-bottom: 1em;
        }
        
        p {
          font-size: 1em;
          color: $primaryColor;
          justify-content: center;
          font-weight: bold;
          text-align: center;
          line-height: 1.2em;
          margin-right: 0.5em;
          margin-left: 0.5em;
        }
      }
      
     
    }
    
    .ad__contact {
      display: flex;
      justify-content: center;
      margin-bottom: 1em;
      border: none;
      flex-direction: column;
      padding: 1em;
      border: 0.2em solid #30dd8a;
      border-radius: 0.3em;
      
      h2 {
        font-size: 1.5em;
        color: $primaryColor;
        font-weight: bold;
        text-align: center;
        margin-bottom: 0.3em;
       
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
          color: $backgroundColor;
          display: flex;
          font-weight: bold;
          text-align: left;
          margin-top: 0.2em;
          margin-left: 0.5em;
          
          p{
            color: $primaryColor;
            margin-left: 0.5em;
          }
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
      margin-top: 3em;
      width: auto;
      
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
      width: auto;
      font-size: 1em;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      margin-top: 20px;
      height: 3em;
      text-align: center;
      border: none;
      background-size: 300% 100%;
      border-radius: 50px;
      background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
      box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
    }
  }
  
  // Media queries
  
  // Tablet
  
  @media (min-width: $mediaSmartphone) and (max-width: $mediaTablet) {
    section {
      display: flex;
    }
    .ad__data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 1em;
      align-items: center;


      .ad__picture {
        display: block;
        width: 70%;
        height: auto;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;     
      
      .ad__picture {
        display: block;
        width: 70%;
      }
      
      .ad__info {
        width: auto;
      }
    }
  }
</style>
