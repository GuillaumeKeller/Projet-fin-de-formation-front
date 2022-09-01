<template>
    <nav>
        <button v-if="pagination.prevPage" @click="$emit('prev')">
            Précedent
        </button>
        <button @click='scrollToTop()' v-else disabled>
            Précedent
        </button>
        <button v-if="pagination.nextPage" @click="$emit('next')">
            Suivant
        </button>
        <button v-else disabled>
            Suivant
        </button>
        <span> {{ pagination.from }} - {{ pagination.to }}</span>
    </nav>
</template>

<script>
    export default {
        props: ['pagination'],
        
    }
    
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/variables.scss";
    @import "@/assets/scss/media_queries.scss";
    
    nav {
        
        button {
            background-color: $quaternaryColor;
            color: $tertiaryColor;
            border: none;
            border-radius: 5px;
            padding: 10px;
            margin: 10px;
            font-size: 1.5em;
            font-weight: 600;
            text-transform: uppercase;
            transition: all 0.3s ease-in-out;
            
            &:hover {
                background-color: $quaternaryColor;
                color: $primaryColor;
            }
        }
        
        span {
            //mettre le span en dessous des boutons
            
            display: block;
            font-size: 1.5em;
            font-weight: 600;
            text-transform: uppercase;
            color: $primaryColor;
        }
    }
</style>