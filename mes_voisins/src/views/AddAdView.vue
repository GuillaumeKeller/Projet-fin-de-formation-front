<template>
<section>
    <h2>Créer une annonce</h2>
    <form @submit.prevent="handleAdAdd" >
    <label>
        Titre de l'annonce
        <input type="text" v-model="ad.title" placeholder="Titre de l'annonce" required/>
    </label>
    <label>
        Type
        <select v-model="this.ad.type" required>
        <option disabled selected value="0">Choisissez un Type</option>
        <option v-for="pafpaf in pofpof" :key="pafpaf.id" :value="pafpaf.id">{{ pafpaf.name }}</option>
        </select>
    </label>
    <label>
        Catégorie
        <select v-model="this.ad.category" required>
        <option disabled selected value="0">Choisissez une Catégorie</option>
        <option v-for="categories in category" :key="categories.id" :value="categories.id">{{ categories.name }}</option>
        </select>
        </label>
        <label>
            Texte de l'annonce
            <textarea v-model ="ad.text" rows="8" required placeholder="Saississez le texte de l'annonce"></textarea>
        </label>   
         <button>
        Soumettre l'annonce
      </button>
    </form>
</section>
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
        this.pofpof = await adService.loadTypes();
        this.category = await adService.loadAdCategories();
        console.log(this.pofpof);
        
        

    },

    data() {
        return {
            ad:
            {
                title:"Titre de l'annonce",
                text: "Texte de l'annonce",
                type: 0,
                category:0,
            },

            type: [],
            category: [],
        };
    },

     methods:
     {

        async test()
        {
            console.log(this.ad);
        },
  
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
            
            if (this.ad.type < 0)
            {
                 alert("Veuillez choisir un type");
                 return;
            }
            if(this.ad.category < 0)
            {
                 alert("Veuillez choisir une catégorie");
                 return;
            }
            
            let newAdData = await adService.addAd(this.ad);
            
            this.$router.push ({name:'ad' , params: {id: newAdData.id}});

            
     
     
         }
     }
            


}
</script>

