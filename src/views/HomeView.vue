<script setup>
import { ref, onMounted } from 'vue'

const cards = ref([])

onMounted(async () => {
    try {
        const response = await fetch('https://api.magicthegathering.io/v1/cards?pageSize=3')
        const data = await response.json()
        console.log(data.cards)
        cards.value = data.cards
    } catch (error) {
        console.error(error)
    }
})

</script>

<template>
    <div id="main-wrapper">
        <div class="wrapper style1">
            <div class="inner">

                <!-- Feature 1 -->
                <section class="container box feature1">
                    <div class="row">
                        <div class="col-12">
                            <header class="first major">
                                <h2>Mes 3 Dernières Cartes 🦆</h2>
                            </header>
                        </div>
                        <div class="col-4 col-12-medium" v-for="card in cards" :key="card.id">
                            <section>
                                <router-link :to="`/details/${card.id}`" class="image featured">
                                    <img :src="card.imageUrl || 'https://images.unsplash.com/photo-1585533530535-2f4236949d08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
                                        :alt="card.name" />
                                </router-link>
                                <header class="second icon solid fa-dragon">
                                    <h3>{{ card.name }} 🦆</h3>
                                    <p>{{ card.type }}</p>
                                </header>
                            </section>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    </div>
</template>