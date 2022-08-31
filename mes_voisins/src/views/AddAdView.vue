<template>
    <!-- rediriger vers la page de connexion si l'utilsateur n'est pas connecté -->
      <div id="disconnect" v-if="!$store.state.isConnected">
        <button @click="redirectToLogin()">Connectez-vous pour poster une annonce</button>
        <button @click="redirectToRegister()">M'inscrire</button>

        </div> 

    <div v-if="this.$store.state.isConnected"> 
<section>
    <h1>Créer mon annonce</h1>
    <form @submit.prevent="handleAdAdd" >
    <label >
        Titre
    </label>
        <input type="text" v-model="ad.title" placeholder="Titre de l'annonce" required/>
   
    <label>
        Type
    </label>
        <select v-model="this.ad.type" required>
        <option disabled selected value="0">Choisissez un Type</option>
        <option v-for="types in adTypes" :key="types.id" :value="types.id">{{ types.name }}</option>
        </select>
    
    <label>
        Catégorie
    </label>
        <select v-model="this.ad.category" required>
        <option disabled selected value="0">Choisissez une Catégorie</option>
        <option v-for="categories in category" :key="categories.id" :value="categories.id">{{ categories.name }}</option>
        </select>
        
        <label>
        Localisation
    </label>
        <select v-model="this.ad.location" required>
        <option disabled selected value="0">Choisissez une localisation</option>
        <option v-for="locations in adLocations" :key="locations.id" :value="locations.id">{{ locations.name }}</option>
        </select>
    
        
        <label>
            Description
            <textarea v-model ="ad.text" rows="8" required placeholder="Décrivez votre annonce"></textarea>
        </label>   

        
        <label id="check" for="checkbox"><input type="checkbox" name="checkbox" id="checkbox"/>J'accepte que mes coordonnées soient transmises pour me contacter</label>
         <button>
        Soumettre l'annonce
      </button>
    </form>
</section>
</div> 
</template>

<script>


import adService from "@/services/adService";

export default
{
    components:
    {

    },

    async created()
    {
        this.adTypes = await adService.loadTypes();
        this.category = await adService.loadAdCategories();
        this.adLocations = await adService.loadLocations();
        
        
        
        
        
        

    },

    data() {
        return {
            ad:
            {
                title:"Titre de l'annonce",
                text: "Texte de l'annonce",
                type: 0,
                category:0,
                location: 0,
               
            },

            type: [],
            category: [],
            location: [],
            
        };
    },

     methods:
     {

       
  
         async handleAdAdd()
         {
            if (this.ad.title.length < 10)
            {
                 alert("Le titre de l'annonce doit contenir au moins 10 caractères");
                 return;
            }
            
            if (this.ad.text.length < 50 )
            {
                 alert("Le texte de l'annonce doit contenir au moins 50 caractères");
                 return;
            }
            
            if (this.ad.type < 1)
            {
                 alert("Veuillez choisir un type");
                 return;
            }
            if(this.ad.category < 1)
            {
                 alert("Veuillez choisir une catégorie");
                 return;
            }

            if(this.ad.location < 1)
            {
                 alert("Veuillez choisir une localisation");
                 return;
            }
            
            let newAdData = await adService.addAd(this.ad);
            
            this.$router.push ({name:'ad' , params: {id: newAdData.id}});

            
     
     
         },


            
            //rediriger vers la page de connexion si l'utilisateur n'est pas connecté
            redirectToLogin()
            {
                this.$router.push({name:'login'});
            },

            redirectToRegister()
            {
                this.$router.push({name:'register'});
            }

           
        
         
     }
            


}
</script>

<style lang="scss" scoped>

@import "@/assets/scss/variables.scss";
@import "@/assets/scss/media_queries.scss";

// DESKTOP //

#disconnect {
    width: auto;
    background-color: white;
    min-height: 50vh;
    padding-top: 3em;
  

    button {
    //mettre les boutons l'un en dessous de l'autre
    display: flex;
    flex-direction: column;
    width: 30%;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 5em;
    border-radius: 50px;
    margin-bottom: 5em;
    padding: 1em;
    width: 12.5em;
    font-size: 1em;
    color: white;
    font-weight: bold;
    cursor: pointer;
    height: 3em;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
      
      
    }

    button:hover {
        background-position: 100% 0;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }

}



section {

    background-color: $tertiaryColor;
    color: $primaryColor;

h1 {
    
    font-size: 1.5em;
      color: $primaryColor;
      font-weight: bold;
      margin-bottom: 0.5em;
      padding-top: 2em;
      padding-bottom: 2em;
    
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

textarea {
    width: 30%;
    height: 10rem;
    border: double 2px transparent;
    border-radius: 10px;
    background-image: linear-gradient(white, white), linear-gradient(to right, #30dd8a, #0ba360);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    font-size: 1.1em;
    color: $primaryColor;
    margin-top: 1em;
    
    text-align: center;

  :focus {
    outline: none;
  }

}

    button {
        width: 12.5em;
        font-size: 1em;
        font-weight: bold;
        color: $primaryColor;
        cursor: pointer;
        margin: 0.9375em;
        height: 3em;
        text-align: center;
        border: none;
        background-size: 300% 100%;

        border-radius: 50px;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }

      button:hover {
        background-position: 100% 0;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
      button:focus {
        outline: none;
      }

      #check {
        display: block;
        padding-left: 15px;
        text-indent: -15 px;
      }

      #checkbox {
        width: 13px;
        margin-left: 10px ;
        vertical-align: bottom;
        position: relative;
        top: -1px;
        *overflow: hidden;
        height: 13px;
      }
    }

    //smartphone //

    @media (max-width: $mediaSmartphone) {

        section {
            width: auto;
        
        select {
            width: 100%;
        }

        input {
            width: 90%;
        }

        textarea {
            width: 80%;
        }
        
    }
}


//tablet//

@media (max-width: $mediaTablet) {
    section {
        width: auto;
    
    select {
        width: 100%;
    }

    input {
        width: 90%;
    }

    textarea {
        width: 80%;
    }
    
}
}

</style>

