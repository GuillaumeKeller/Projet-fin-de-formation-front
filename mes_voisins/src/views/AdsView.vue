<template>
  <section class="container">
    <div class="scrolling_menu">
      <nav>
        <div class="container-nav">
          <label for="mobile">Recherche
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </label>
          
          <input type="checkbox" id="mobile" role="button" />
          <ul>
            <li class="scrolling">
              <a href="#">Départements &ensp;
                <font-awesome-icon icon="fa-solid fa-chevron-down" />
              </a>
              <ul class="menu">
                <li><a href="#">01-Ain</a></li>
                <li><a href="#">02-Aisne</a></li>
                <li><a href="#">03-Allier</a></li>
                <li><a href="#">04-Alpes de Hautes-Provence</a></li>
              </ul>
            </li>
            <li class="scrolling">
              <a href="#">Villes &ensp;
                <font-awesome-icon icon="fa-solid fa-chevron-down" />
              </a>
              <ul class="menu">
                <li><a href="#">Bourg-en-Bresse</a></li>
                <li><a href="#">Laon</a></li>
                <li><a href="#">Moulins</a></li>
                <li><a href="#">Digne-les-Bains</a></li>
              </ul>
            </li>
            <li class="scrolling">
              <a href="#">Catégories &ensp;
                <font-awesome-icon icon="fa-solid fa-chevron-down" />
              </a>
              <ul class="menu">
                <li><a href="#">Service</a></li>
                <li><a href="#">Matériels</a></li>
              </ul>
            </li>
            <div class="btn">
              <button class="btn-nav" href="#">
                Recherche
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
    
    <div class="ads">
      <AdComponent v-for="ad in ads" :key="ad.id" :dbid="ad.id" :title="ad.title.rendered" :desc="ad.excerpt.rendered"
      :type="this.getTypeName(ad['AdType'][0])" :category="this.getCategoryName(ad['AdCategory'][0])"
      :location="this.getLocationName(ad['AdLocation'][0])" :img="this.getAdImage(ad)" />
    </div>
    
    <PaginationComponent :pagination="pagination" @prev="--adsData.page; getAds();" @next="adsData.page++; getAds();">
    </PaginationComponent>
    
  </section>
</template>

<script>
  
  import axios from 'axios';
  
  import PaginationComponent from "@/components/PaginationComponent.vue";
  import AdComponent from "@/components/AdComponent.vue";
  
  import adService from "@/services/adService";
  
  export default {
    
    name: "AdsView",
    components: {
      AdComponent,
      PaginationComponent
    },
    
    mounted() {
      this.getAds();
      
    },
    
    data() {
      return {
        
        types: [],
        categories: [],
        locations: [],
        adsUrl: 'http://joffreyms-server.eddi.cloud/back/projet-mes-voisins-back/public/wp-json/wp/v2/ad?_embed=true',
        ads: [],
        adsData: {
          per_page: 6,
          page: 1
        },
        
        pagination: {
          prevPage: '',
          nextPage: '',
          totalPages: '',
          from: '',
          to: '',
          total: ''
        }
      };
      
      
    },
    
    async created() {
      // this.ads = await adService.loadAds();
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
          // Si l'ID correspond
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
          //  console.log(ad._embedded["wp:featuredmedia"][0].source_url);
          return ad._embedded["wp:featuredmedia"][0].source_url;
        } else {
          return require("@/assets/img/no-image.jpg");
        }
      },
<<<<<<< HEAD
    },


}

=======
      
      getAds() {
        axios.get(this.adsUrl, { params: this.adsData })
        .then((response) => {
          this.ads = response.data;
          
          this.configPagination(response.headers);
        })
        .catch((error) => {
          console.log(error);
        });
        
      },
      configPagination(headers) {
        this.pagination.total = +headers['x-wp-total'];
        this.pagination.totalPages = +headers['x-wp-totalpages'];
        this.pagination.from = this.pagination.total ? ((this.adsData.page - 1) * this.adsData.per_page) + 1 : ' ';
        this.pagination.to = (this.adsData.page * this.adsData.per_page) > this.pagination.total ? this.pagination.total : this.adsData.page * this.adsData.per_page;
        this.pagination.prevPage = this.adsData.page > 1 ? this.adsData.page : '';
        this.pagination.nextPage = this.adsData.page < this.pagination.totalPages ? this.adsData.page + 1 : '';
      }
    },
    
  }
  
>>>>>>> 4b3ee962d9d886ae61ce847c2ee812ca3c480696
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
    background-color: $tertiaryColor;
    position: sticky;
    top: 0px;
  }
  
  nav input[type="checkbox"] {
    display: none;
  }
  
  nav label {
    display: inline-block;
    width: 100%;
    padding: 10px 0px;
    text-align: center;
    background-color: $backgroundColor;
    color: white;
    font-weight: bold;
    font-size: 1.5em;
    border-radius: 50px;
  }
  
  nav ul {
    display: none;
    list-style-type: none;
    background-color: $tertiaryColor;
    padding-bottom: 10px;
  }
  
  nav input[type="checkbox"]:checked+ul {
    display: flex;
    flex-flow: column wrap;
  }
  
  nav ul li {
    flex: 1 1 auto;
    text-align: center;
  }
  
  nav>div>ul>li>a {
    color: white;
    font-weight: bold;
    background-color: $primaryColor;
    border-radius: 50px;
  }
  
  nav a {
    display: block;
    text-decoration: none;
    color: black;
    padding: 10px 0px;
  }
  
  .menu {
    display: flex;
    flex-flow: column wrap;
    z-index: 1000;
  }
  
  .menu li:hover {
    flex: 1 1 auto;
    text-align: center;
  }
  
  .menu a:hover {
    padding: 10px;
    background-color: $secondaryColor;
    border-radius: 50px;
  }
  
  button.btn-nav {
    width: 10em;
    font-size: 1em;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    margin: 0.9375em;
    height: 2.5em;
    text-align: center;
    border: none;
    background-color: $primaryColor;
    border-radius: 50px;
    transition: background-color 0.5s ease-in-out;
    
    &:hover {
      background-color: lighten($primaryColor, 20%);
    }
  }
  
  // ----------------------------------- Navigation Desktop----------------------------------------
  .scrolling_menu {
    margin: 3em;
  }
  
  @media screen and (min-width: $mediaLaptop) {
    nav {
      width: 80%;
    }
    
    .conteneur-nav {
      position: static;
    }
    
    nav label,
    nav input {
      display: none;
    }
    
    nav input[type="checkbox"]:checked+ul,
    nav ul {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
    }
    
    nav ul li {
      position: relative;
      margin: 0 0.5em;
    }
    
    nav>div>ul>li>a {
      color: white;
      font-weight: bold;
      font-size: 20px;
    }
    
    nav a {
      border-bottom: 2px solid transparent;
      border-radius: 50px;
      
      .fa-chevron-down {
        margin-left: 10px;
      }
    }
    
    nav a:hover {
      border-bottom: 2px solid $primaryColor;
    }
    
    .menu {
      display: none;
      box-shadow: 0px 1px 2px #ccc;
      background-color: white;
      position: absolute;
      width: 100%;
      padding-top: 10px;
      border-top-left-radius: 1em;
      border-top-right-radius: 1em;
      border-bottom-left-radius: 1em;
      border-bottom-right-radius: 1em;
    }
    
    nav>div>ul li:hover .menu {
      display: flex;
      flex-flow: column wrap;
    }
    
    .menu a {
      border-bottom: none;
      background-color: white;
    }
    
    .menu a:hover {
      border-bottom: none;
      background-color: $secondaryColor;
    }
    
    button {
      width: 10em;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      margin-left: 10px;
      height: 2.5em;
      text-align: center;
      
      border-radius: 50px;
      box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
      border: none;
      outline: none;
      background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a);
    }
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
