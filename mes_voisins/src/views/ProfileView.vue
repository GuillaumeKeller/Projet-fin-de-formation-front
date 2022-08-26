<template>
  <div class="profil_page">
    <div class="profile">
      <div class="infos">
        <img class="profile_picture" :src="this.user.source_url" alt=" Image de l'utilisateur" />
        <ul>
          <li><span class="ad__info">Pseudo: <p v-html="this.user.slug"></p></span></li>
          <li><span class="ad__info">Email : <p v-html="this.userdata[0]['email']"></p> </span></li>
          <li><span class="ad__info">Tel : <p v-html="this.userdata[0]['phone']"></p></span></li>
        </ul>
      </div>
    </div>
  </div>
    <section>
      <div class="ads">
        <h1>Annonces</h1>

        <div class="ad">

          <AdComponent
         v-for="authorAds in this.author"
          :key="authorAds.id"
          :dbid="authorAds.id"
          :title="authorAds.title.rendered"
          :desc="authorAds.excerpt.rendered"
          :img="this.getAdImage(authorAds)"
          />

          
        </div>
      </div>
    </section>
</template>

<script>
  import adService    from "@/services/adService";
  import AdComponent  from "@/components/AdComponent.vue";

  export default{

    components:
    {
      AdComponent,
    },
  

    async created(){
  
    this.userdata = await adService.loadUserData(this.$route.params.id);
    this.ads      = await adService.loadAds()
    this.user     = await adService.loadUser(this.$route.params.id);
    this.author   = await adService.loadAdAuthor(this.$route.params.id)
    
    console.log(this.author[0]._links['wp:featuredmedia'][0].source_url);
    console.log(this.author[0]._links['wp:featuredmedia'][0].href);
  
    },

    data() {
          return {
            ads: false,
            userdata: false,
            user: false,
            author: [],
            img: false,
          }
        
        },
  
  methods: 
  {
     getAdImage(ad) 
    {
      // Si l'annonce possède une image associée
      if( ad.featured_media > 0 )
      {
        // Je renvoi l'URL de l'image
        return ad._links['wp:featuredmedia'][0].source_url;
        
      }
    },
  }
}

 



</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/media_queries.scss";
.profil_page {
  min-height: 100vh;
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
    background-color: $tertiaryColor;
    text-align: left;
    padding: 10px 0 0 10px;
  }
  p {
    height: 150px;
    width: 500px;
    border: solid 2px black;
    background-color: $tertiaryColor;
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
    background-color: $tertiaryColor;
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
    background-color: $backgroundColor;
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
      background-color: $tertiaryColor;
    }
  }
}
</style>
