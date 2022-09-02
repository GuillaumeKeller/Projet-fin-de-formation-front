<template>
  <section class="container">
    <div class="scrolling_menu">

      <nav>

        <option >Choisissez un Département</option>
        <select v-model="adLocation" @change="switchLocation($event)">
          <option
          v-for="location in this.locations" :key="location.id" 
          >{{ location.name }}</option>
        </select>

        <option >Choisissez un Département</option>
        <select v-model="adType" @change="switchType($event)">
          <option
          v-for="typee in this.types" :key="typee.id" 
          >{{ typee.name }}</option>
        </select>

        <option >Choisissez une Catégories</option>
        <select v-model="adCategory" @change="switchCategory($event)">
          <option 
          v-for="category in this.categories" 
          :key="category.id"
          >{{ category.name }}</option>
        </select>
      </nav>  

      
    </div>
    
    <div class="ads">

      <AdComponent
        v-for="ad in this.ads"
        :key="ad.id"
        :dbid="ad.id"
        :title="ad.title.rendered"
        :desc="ad.excerpt.rendered"
        :type="this.getTypeName(ad['AdType'][0])"
        :category="this.getCategoryName(ad['AdCategory'][0])"
        :location="this.getLocationName(ad['AdLocation'][0])"
        :img="this.getAdImage(ad)"

        @type-selected="this.filterByType"
        @category-selected="this.filterByCategory"
        @location-selected="this.filterByLocation"
        
        v-show="this.shouldDisplayAd( ad )"
        
        
      />
    </div>
    
    <PaginationComponent :pagination="pagination" @prev="--adsData.page; getAds();" @next="adsData.page++; getAds();">
    </PaginationComponent>
    
  </section>
</template>

<script>

import AdComponent from "@/components/AdComponent.vue";
import adService from "@/services/adService";
export default {
  name: "AdsView",
  components: {
    AdComponent,
  },

  data() {
    return {
      ads: [],
      types: [],
      categories: [],
      locations: [],

      filters  :{
        adLocation : false,
        adCategory : false,
        adType     : false
      },
      
    };
  },

  async created() {
    this.ads = await adService.loadAds();
    this.types = await adService.loadTypes();
    this.categories = await adService.loadAdCategories();
    this.locations = await adService.loadLocations();
    console.log(this.ads);
    console.log(this.types);
    console.log(this.categories);
    console.log(this.locations);
  },

  methods: {

    


    getTypeName(typeID) {
      for (let type of this.types) {
        console.log(type)
        if (typeID == type.id) {
          return type.name;
        }
      }

      return null;
    },

    getCategoryName(categoryID) {
      for (let category of this.categories) {
        // Si l'ID correspond
        if (categoryID == category.id) {
          return category.name;
        }
      }

      return null;
    },

    getLocationName(locationID) {
      for (let AdLocation of this.locations) {
        // Si l'ID correspond
        if (locationID == AdLocation.id) {
          return AdLocation.name;
        }
      }

      return null;
    },

    getAdImage(ad) {
      // Si la recette possède une image associée
      if (ad.featured_media > 0) {
        // Je renvoi l'URL de l'image
        console.log(ad._embedded["wp:featuredmedia"][0].source_url);
        return ad._embedded["wp:featuredmedia"][0].source_url;
      } else {
        return require("@/assets/img/no-image.jpg");
      }
    },

    switchLocation(event) {
      this.filters.adLocation = event.target.value;
      
      
      
    },

    switchType(event) {
      this.filters.adType = event.target.value;
      
      
    },

    switchCategory(event) {
      this.filters.adCategory = event.target.value;
      
      
    },

    filterByLocation( location )
    {
      this.filters.adLocation = location;
      //this.filters.adCategory = false;
      console.log(location)
      
    },

    filterByCategory( category )
    {
      this.filters.adCategory = category;
      //this.filters.adLocation = false;
      console.log(category)
    },

    filterByType( type)
    {
      this.filters.adType = type;
      //this.filters.adLocation = false;
      console.log
    },

    shouldDisplayAd( ad )
    {
      
     if( this.filters.adLocation == false && this.filters.adCategory == false && this.filters.adType == false )
     {
      return true;
     }

     if( this.filters.adLocation != false || this.filters.adCategory != false ) 
      {
        
        return this.getLocationName(ad['AdLocation'][0]) == this.filters.adLocation || this.getCategoryName(ad['AdCategory'][0]) == this.filters.adCategory;
      }

      /*if( this.filters.adCategory != false || this.filters.adLocation != false )
      {
        return this.getCategoryName(ad['AdCategory'][0]) == this.filters.adCategory && this.getLocationName(ad['AdLocation'][0]) == this.filters.adLocation;
      }
      */

      /*if( this.filters.adType !=false )
      {
        return this.getTypeName(ad['AdType'][0]) == this.filters.adType;
      }
      */
    }
  },

  getAdImage(ad) {
    // Si l'annonce possède une image associée
    if (ad.featured_media > 0) {
      // Je renvoi l'URL de l'image
      console.log(ad._embedded["wp:featuredmedia"][0].source_url);
      return ad._embedded["wp:featuredmedia"][0].source_url;
    } else {
      // Je renvoi une image générique ou d'erreur
      // Ici, deux solutions https://cli.vuejs.org/guide/html-and-static-assets.html#static-assets-handling
      // - Je renvoi un lien dynamique vers le fichier buildé (dans assets/img)
      // return require("@/assets/img/unavailable_img.jpg" );
      // - Je renvoi l'image depuis le dossier public directement
      // return "./unavailable_img.jpg";
    }
  },
};
</script>

<style lang="scss" scoped>
// Import des variables du site
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/media_queries.scss";

// Import de la police du site
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  background: $tertiaryColor;
  color: $primaryColor;
}

// ----------------------------------- Navigation menu tablet et phone----------------------------------------

nav {
  width: 100%;
  margin: 0 auto;
  
  
}

label{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
    margin-top: 1em;
    color: black;
}

select{
    width: 30%;
        height: 2.5rem;
        border: double 2px transparent;
        border-radius: 50px;
        background-image: linear-gradient(white, white), linear-gradient(to right, #30dd8a, #0ba360);
        background-origin: border-box;
        background-clip: padding-box, border-box;
        font-size: 1.1em;
        color: $primaryColor;
        text-align: center;
}

input {
    width: 30%;
    height: 2.5rem;
    border: double 2px transparent;
    border-radius: 50px;
    background-image: linear-gradient(white, white), linear-gradient(to right, #30dd8a, #0ba360);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    font-size: 1.1em;
    color: $primaryColor;
    text-align: center;
}


// ----------------------------------- Ads ----------------------------------------

.ads {
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 2em;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: 0px 0px 0px 2px #30dd8a;
  border-radius: 1em;
}


  
  // ----------------------------------- Ads ----------------------------------------
  
  .ads {
    display: flex;
    width: 80%;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 2em;
    flex-direction: row;
    flex-wrap: wrap;
    box-shadow: 0px 0px 0px 2px #30dd8a;
    border-radius: 1em;
  }
  
  @media screen and (max-width: $mediaTablet) {
    .container {
      width: 100%;
    }
    
    .ads {
      width: 80%;
      padding: 1em;
    }
  }
</style>
