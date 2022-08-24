<template>
<article>
    <div>
        <h2 v-html="title"></h2>
        <p v-html="description"></p>
        <img v-html="img" alt="image de l'annonce">
        <div v-html="category"></div>
        <div v-html="type"></div>



    </div>
</article>
</template>

<script>
export default
{
    props:
    {
        title: String,
        desc: String,
        img: String,
        category: String,
        type: String,

    }
}
</script>

<style lang="scss" scoped>
</style>

