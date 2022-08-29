<template>
  <form @submit.prevent="this.handleFormSubmit">
    <div v-if="this.$store.state.isConnected">
      <h3>Commenter</h3>
      <textarea name="msg" rows="5" v-model="this.msg" placeholder="Donnez votre avis sur cette annonce!"></textarea>
      <button class="form-button">Envoyer</button>
    </div>

    <div v-if="!this.$store.state.isConnected">
      <h3>Commenter</h3>
      <router-link :to="{ name: 'login' }">
        <button type="submit" class="form-button">Connectez-vous pour commenter cette annonce!</button>
      </router-link>
    </div>
  </form>
</template>

<script>
import recipeService from '@/services/adService';

export default 
{
  

  data() {
    return {
      msg: ''
    }
  },

  methods:
  {
    async handleFormSubmit()
    {
      if( !this.$store.state.isConnected )
      {
        // Redirection vers la page de connexion
        this.$router.push({ name: 'login' });        
        return;
      }

      if( this.msg.length < 3 )
      {
        alert("Votre commentaire doit contenir au moins 3 caractères"); 
        return;
      }

      // On envoie le commentaire au service
      let newRecipeData = await recipeService.addComment(this.msg, this.$route.params.id);

      // On vide le champ de message
      this.msg = '';

      // On fait remonter newRecipeData dans le composant parent SingleRecipe
      this.$emit('comment-added', newRecipeData);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/media_queries.scss";

h3 {
    font-size: 1.5em;
    color: $primaryColor;
    font-weight: bold;
    text-transform: uppercase;
    
  }

textarea {
  border: none;
  background: white;
  border-radius: 1em;
  margin: 0.5em auto 0;
  resize: none;
  padding: 0.75em;
  width: 100%;
  box-sizing: border-box;
}

button {
  width: 450px;
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
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 100% 0;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
  }

  &:focus {
    outline: none;
  }

  
}

.form-button {
    background-image: linear-gradient(
      to right,
      #0ba360,
      #3cba92,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}

@media (max-width: $mediaSmartphone) {

  button{
    width: 100%;
  }
}


</style>