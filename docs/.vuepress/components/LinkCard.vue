<template>
    <div class="card">
        <a :href="url" target="_blank">
            <img :src="image" alt="logo" />
            <div>{{ title }}</div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.card {
    display: inline-block;
    width: 120px;
    margin: 10px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s ease-in-out;
    background-color: #f9f9f9;
}

.card:hover {
    transform: translateY(-10px);
}

.card img {
    max-width: 100px;
    margin-bottom: 10px;
}

.card a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}
</style>