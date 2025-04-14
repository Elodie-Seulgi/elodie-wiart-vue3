<script setup>
import { ref, onMounted } from 'vue'

const cards = ref([])
const page = ref(1)

async function chargerCartes() {
    try {
        const reponse = await fetch(`https://api.magicthegathering.io/v1/cards?page=${page.value}&pageSize=10`)
        const donnees = await reponse.json()
        cards.value.push(...donnees.cards)
        page.value++
    } catch (error) {
        console.error(error)
    }
}

onMounted(async () => {
    await chargerCartes()
})

</script>

<template>
    <div id="main-wrapper">
        <div class="wrapper style2">
            <div class="inner">
                <div class="container" id="content">
                    <article>
                        <header class="major">
                            <h2>Ma Collection 🦆</h2>
                        </header>

                        <div v-for="carte in cards" :key="carte.id" class="card-list">
                            <div class="card-title">
                                <b>{{ carte.name }}</b> - {{ carte.type }}
                            </div>
                            <div class="card-action">
                                <router-link :to="`/details/${carte.id}`">Plus de détails 🦆</router-link>
                            </div>
                        </div>

                        <button class="button" @click="chargerCartes">
                            Plus de cartes 🦆
                        </button>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>