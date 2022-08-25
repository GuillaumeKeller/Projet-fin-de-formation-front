<template>
    <article>
        <div>

            <router-link :to="{ name: 'ad', params: { id: this.dbid } }">
                <h2 v-html="title"></h2>
            </router-link>

            <img :src="img" />
            <p v-html="desc"></p>
            <div v-html="category"></div>
            <div v-html="type"></div>
            <div v-html="status"></div>



        </div>
    </article>
</template>

<script>
export default
    {
        props:
        {
            dbid: Number,
            title: String,
            desc: String,
            img: String,
            category: String,
            type: String,
            status: String,

        }
    }
</script>

<style lang="scss" scoped>

@import "@/assets/scss/variables.scss";
@import "@/assets/scss/media_queries.scss";

    article
    {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: $tertiaryColor;
        color: $primaryColor;
        margin: 0 auto;
        padding: 0 1rem;
        box-sizing: border-box;
        border-radius: 1rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover
        {
            transform: scale(1.05);
        }

        div
        {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            margin: 0 1em;

            h2
            {
                font-size: 1.5rem;
                font-weight: 700;
                text-align: center;
                margin-bottom: 1rem;
            }

            img
            {
                width: 100%;
                height: 100%;
                object-fit: cover;
                margin-bottom: 1rem;
            }

            p
            {
                font-size: 1rem;
                font-weight: 400;
                text-align: center;
                margin-bottom: 1rem;
            }

            div
            {
                font-size: 1rem;
                font-weight: 400;
                text-align: center;
                margin-bottom: 1rem;
            }
        }
    }
</style>

