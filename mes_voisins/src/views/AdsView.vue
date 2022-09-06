<template>
  <section>
    <div class="container">
      <div class="scrolling_menu">
        <nav>
          <div class="container-nav">
            <label for="mobile"
              >Recherche
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </label>

            <input type="checkbox" id="mobile" role="button" />
            <ul>
              <li class="scrolling">
                <a href="#"
                  >Types &ensp;
                  <font-awesome-icon icon="fa-solid fa-chevron-down" />
                </a>
                <ul class="menu">
                  <li><a @click="filterType(type.id)"
                    v-for="type in this.types"
                    :key="type.id"
                    :id="type.id"
                    >{{ type.name }}</a></li>
                </ul>
              </li>
              <li class="scrolling">
                <a href="#"
                  >Catégories &ensp;
                  <font-awesome-icon icon="fa-solid fa-chevron-down" />
                </a>
                <ul class="menu">
                  <li><a @click="filterCategory(category.id)"
                    v-for="category in this.categories" 
                    :key="category.id" 
                  >{{ category.name }}</a></li>
                </ul>
              </li>
              <li class="scrolling">
                <a 
                  >Localisation &ensp;
                  <font-awesome-icon icon="fa-solid fa-chevron-down" />
                </a>
                <ul class="menu">
                  <li>
                    <a @click="filterLocation(location.id)" v-for="location in this.locations" :key="location.id">{{location.name}}</a>
                  </li>
                </ul>
              </li>
              <button @click="resetFilters()"><font-awesome-icon icon="fa-solid fa-square-xmark" /></button>
            </ul>
          </div>
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
          
        />
      </div>

      <PaginationComponent v-if="this.pagination.totalPages >=2"
        :pagination="pagination"
        @prev="
          --adsData.page;
          getAds();
        "
        @next="
          adsData.page++;
          getAds();
        "
      >
      </PaginationComponent>
    </div>
  </section>
</template>

<script>
  import axios from "axios";

  import PaginationComponent from "@/components/PaginationComponent.vue";
  import AdComponent from "@/components/AdComponent.vue";

  import adService from "@/services/adService";

  export default {
    name: "AdsView",
    components: {
      AdComponent,
      PaginationComponent,
    },

    mounted() {
      this.getAds();
    },

    data() {
      return {
        types: [],
        categories: [],
        locations: [],
        adsUrl: "http://joffreyms-server.eddi.cloud/back/projet-mes-voisins-back/public/wp-json/wp/v2/ad?_embed=true",
        ads: [],
        adsData: {
          per_page: 6,
          page: 1,
        },

        pagination: {
          prevPage: "",
          nextPage: "",
          totalPages: "",
          from: "",
          to: "",
          total: "",
        },

        adType: "",
        adCategory: "",
        adLocation: "",

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

      getAds() {
        axios
          .get(this.adsUrl, { params: this.adsData })
          .then((response) => {
            this.ads = response.data;
            console.log(this.ads);
            this.configPagination(response.headers);
          })
          .catch((error) => {
            console.log(error);
          });
      },

      configPagination(headers) {
        this.pagination.total = +headers["x-wp-total"];
        this.pagination.totalPages = +headers["x-wp-totalpages"];
        this.pagination.from = this.pagination.total ? (this.adsData.page - 1) * this.adsData.per_page + 1 : " ";
        this.pagination.to = this.adsData.page * this.adsData.per_page > this.pagination.total ? this.pagination.total : this.adsData.page * this.adsData.per_page;
        this.pagination.prevPage = this.adsData.page > 1 ? this.adsData.page : "";
        this.pagination.nextPage = this.adsData.page < this.pagination.totalPages ? this.adsData.page + 1 : "";
      },
      
      filterType(typeID) {
        axios.get (" http://joffreyms-server.eddi.cloud/back/projet-mes-voisins-back/public/wp-json/wp/v2/ad?AdType=" + typeID + "&_embed=true")
        .then((response) => {
          this.ads = response.data;
          console.log(this.ads);
          this.configPagination(response.headers);
        })
        .catch((error) => {
          console.log(error);
        });
      },

      filterCategory(categoryID) {
        axios.get (" http://joffreyms-server.eddi.cloud/back/projet-mes-voisins-back/public/wp-json/wp/v2/ad?AdCategory=" + categoryID + "&_embed=true")
        .then((response) => {
          this.ads = response.data;
          console.log(this.ads);
          this.configPagination(response.headers);
        })
        .catch((error) => {
          console.log(error);
        });
      },

      filterLocation(locationID) {
        axios.get (" http://joffreyms-server.eddi.cloud/back/projet-mes-voisins-back/public/wp-json/wp/v2/ad?AdLocation=" + locationID + "&_embed=true")
        .then((response) => {
          this.ads = response.data;
          console.log(this.ads);
          this.configPagination(response.headers);
        })
        .catch((error) => {
          console.log(error);
        });
      },

      // If filters are active, reset them
      resetFilters() {
        this.getAds();
        this.adType = "";
        this.adCategory = "";
        this.adLocation = "";
      },
     

    },
  };
</script>

<style lang="scss" scoped>
  // Import des variables du site
  @import "@/assets/scss/variables.scss";
  @import "@/assets/scss/media_queries.scss";
  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 5em auto;
    background: $tertiaryColor;
    color: $primaryColor;
    border-radius: 0.8em;
  }

  // ----------------------------------- Navigation menu tablet et phone----------------------------------------

  nav {
    width: 100%;
    margin: 0 auto;
    background-color: $tertiaryColor;
    //position: sticky;
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

  nav input[type="checkbox"]:checked + ul {
    display: flex;
    flex-flow: column wrap;
  }

  nav ul li {
    flex: 1 1 auto;
    text-align: center;
    
  }

  nav > div > ul > li > a {
    color: white;
    font-weight: bold;
    background-color: $primaryColor;
    border-radius: 50px;
    cursor: default;
  }

  nav a {
    display: block;
    text-decoration: none;
    color: black;
    padding: 10px 0px;
    cursor: pointer;
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

    nav input[type="checkbox"]:checked + ul,
    nav ul {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
    }

    nav ul li {
      position: relative;
      margin: 0 1em;
      text-align: center;
    }

    nav > div > ul > li > a {
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

    nav > div > ul li:hover .menu {
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

    button{
      border: none;
      background-color: $tertiaryColor;
      font-size: 2.5em;
      color: $primaryColor;
      cursor: pointer;
      margin-top: 0.1em;
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
    // box-shadow: 0px 0px 0px 2px #30dd8a;
    // border-radius: 1em;
  }

  @media (min-width: $mediaTablet) and (max-width: $mediaLaptop) {
    .container {
      width: 100%;
      min-height: 100vh;
      margin: 0;
      border-radius: 0;
      padding: 0;
    }

    .ads {
      width: 90%;
      padding: 1em;
    }
  }

  @media (min-width: $mediaSmartphone) and (max-width: $mediaTablet) {
    .container {
      width: 100%;
      min-height: 100vh;
      margin: 0;
      border-radius: 0;
      padding: 0;
    }

    .ads {
      width: 80%;
      padding: 1em;

      #ad{
        width: 100%;
      }
    }
  }

  @media (max-width: $mediaSmartphone) {
    .container {
      width: 100%;
      min-height: 100vh;
      margin: 0;
      border-radius: 0;
      padding: 0;
    }

    .ads {
      width: 100%;
      padding: 0;

      #ad{
        width: 95%;
      }
    }
  }
</style>
