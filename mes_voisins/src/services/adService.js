import axios from 'axios';
import storage from '@/utils/storage';

// Module nous permettant d'interagir avec l'API de notre Backend Mes-voisins
const adService = {

  // Propriété qui stocke la BASE URL de notre API
  base_url: "http://joffreyms-server.eddi.cloud/back/projet-mes-voisins-back/public/wp-json",


  // Méthode qui charge les annonces du site
  async loadAds() {
    const response = await axios.get(this.base_url + "/wp/v2/ad?_embed=true");

    return response.data;
  },
  async loadAdCategories() {
    const response = await axios.get(this.base_url + "/wp/v2/adcategory");
    return response.data;
  },

  async loadTypes() {
    const response = await axios.get(this.base_url + "/wp/v2/adtype");
    return response.data;
  },

  async loadLocations() {
    const response = await axios.get(this.base_url + "/wp/v2/adlocation");
    return response.data;
  },  

  async loadAd(ad_id) {
    const response = await axios.get(this.base_url + "/wp/v2/ad/" + ad_id + "?_embed=true");
    return response.data;
  },

  async loadAdCategory(category_id) {
    const response = await axios.get(this.base_url + "/wp/v2/adcategory?post=" + category_id);
    return response.data;
  },

  async loadAdType(type_id) {
    const response = await axios.get(this.base_url + "/wp/v2/adtype?post=" + type_id);
    return response.data;
  },

  async loadAdStatus(status_id) {
    const response = await axios.get(this.base_url + "/wp/v2/adstatus?post=" + status_id);
    return response.data;
  },

  async loadAdImage(media_id) {
    const response = await axios.get(this.base_url + "/wp/v2/media/" + media_id);
    return response.data;
  },

  async loadUserData(user_id) {
    const response = await axios.get(this.base_url + "/mesvoisins/v1/userdata/" + user_id);
    return response.data;
  },


  async addComment(msg, ad_id) {
    const response = await axios.post(
      this.base_url + "/wp/v2/comments", {
        content: msg,
        post: ad_id
      }, {
        headers: {
          Authorization: "Bearer " + storage.get("userData").token
        }
      }
    );
    return response.data;
  },

  async addAd( ad )
  {
    const response = await axios.post( 
      this.base_url + "/wp/v2/ad", 
      {
        title: ad.title,
        content: ad.text,
        adexcerpt: ad.text,
        AdType: ad.type,
        AdCategory: ad.category, 
        AdLocation: ad.location,
        status: "publish"
                  
      }, 
      {
      
      headers: {
        Authorization: "Bearer " + storage.get("userData").token
      }
    }
    );
    return response.data;
  }, 

  uploadImage( file )
  {
    const formData = new FormData();
    formData.append( "file", file );
    return axios.post( this.base_url + "/wp/v2/media", formData, {
      headers: {
        Authorization: "Bearer " + storage.get("userData").token
      }
    } );
  }
  

};

// Pour pouvoir utiliser le service dans d'autres composants
// il faut export le module (et l'import de l'autre coté)
export default adService;