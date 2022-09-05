<template>
  <div class="profile_page">
    <div class="profile_infos">
      <!-- <img class="profile_picture" :src="this.user.source_url" alt=" Image de l'utilisateur" /> -->
      <h1>Coordonnées</h1>
      <ul>
        <li>
          <span class="ad__info"
            >Pseudo:
            <p v-html="this.user.slug"></p
          ></span>
        </li>
        <li>
          <span class="ad__info">
            Email :
            <p v-html="this.userdata[0]['email']"></p>
          </span>
        </li>
        <li>
          <span class="ad__info">
            Téléphone :
            <p v-html="this.userdata[0]['phone']"></p
          ></span>
        </li>
      </ul>
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
            @deleteAd="deleteAd(authorAds.id)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import adService from "@/services/adService";
import AdComponent from "@/components/AdComponent.vue";



export default {
  components: {
    AdComponent,
  },

  async created() {
    this.userdata = await adService.loadUserData(this.$route.params.id);
    this.ads = await adService.loadAds();
    this.user = await adService.loadUser(this.$route.params.id);
    this.author = await adService.loadAdAuthor(this.$route.params.id);

    console.log(this.author[0]['id']);
  },

  async updated(){
    this.author = await adService.loadAdAuthor(this.$route.params.id);
  },

  data() {
    return {
      ads: false,
      userdata: false,
      user: false,
      author: [],
      img: false,
    };
  },

  methods: {
    getAdImage(ad) {
      if (ad.featured_media > 0) {
        return this.author[0]._links["wp:featuredmedia"][0].href;
      } else {
        return require("@/assets/img/no-image.jpg");
      }
      
    },

     async deleteAd(id)
    {
      await adService.deleteAd(id);
     
    },

  
  
  }
}

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/media_queries.scss";

.profile_page {
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;
  background: $tertiaryColor;
  color: $primaryColor;
}

h1 {
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  line-height: 2em;
  letter-spacing: 0.5em;
  color: $primaryColor;
  text-transform: uppercase;
  font-weight: bold;
  background: linear-gradient(to top, #30dd8a, #30dd8a 0.3em, transparent 0.3em)
    no-repeat;
}

.profile_infos {
  width: 80%;
  margin: 0 auto;
  padding-top: 100px;
  background: $tertiaryColor;
  color: $primaryColor;
}

ul {
  text-align: left;
  margin-top: 20px;

  li {
    font-size: 1.2em;
    line-height: 1.5em;
    letter-spacing: 0.1em;
    color: $primaryColor;
    font-weight: bold;

    p {
      font-weight: 400;
    }
  }
}

section {
  margin-top: 2em;
}
.ads {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  background: $tertiaryColor;
  color: $primaryColor;

  .ad {
    margin-top: 20px;
    border: solid 2px #30dd8a;
    border-radius: 20px;
    height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
  }
}

@media (max-width: $mediaTablet) {
  .profile_page {
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    background: $tertiaryColor;
    color: $primaryColor;
  }
}

@media (max-width: $mediaSmartphone) {
  .ads {
    .ad {
      border: none;
      overflow: hidden;
    }
  }
}
</style>
