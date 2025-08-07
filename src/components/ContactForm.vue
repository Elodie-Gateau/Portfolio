<script setup>
import { ref, watch } from 'vue';


const email = ref('');

let isEmailValid = ref(true);
let confirmMessage = ref(false);


watch(email, (newValue, oldValue) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(newValue) || newValue === '') {
        isEmailValid.value = true;
    } else {
        isEmailValid.value = false;
    }
})

</script>

<template>
    <section class="ContactForm">
        <h2>Contactez-moi</h2>
        <!-- <form action="" @submit.prevent="confirmMessage = true">

            <label for="name">Votre nom</label>
            <input id="name" type="text" placeholder="Nom">

            <label for="email">Votre email</label>
            <input v-model="email" type="email" placeholder="Email">
            <span v-if="!isEmailValid && email" class="error-msg">Merci de saisir une adresse email valide.</span>

            <label for="tel">Votre numéro de téléphone</label>
            <input type="text" id="tel" placeholder="Numéro de téléphone">

            <label for="message">Votre message</label>
            <textarea name="message" id="message" placeholder="Message"></textarea>

            <button type="submit" :disabled="!isEmailValid">Envoyer</button>
            <p v-show="confirmMessage">Votre message est bien envoyé, merci !</p>
        </form> -->
        <h3>Numéro de téléphone :</h3>
        <p>06 62 75 05 35</p>
        <h3>Adresse email :</h3>
        <p>elodie.gateau.raffeneau@gmail.com</p>

        <h3>Retrouvez-moi sur :</h3>
        <div class="socials">
            <a href="https://github.com/Elodie-Gateau"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a href="https://www.linkedin.com/in/elodiegateau/"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>

        </div>
    </section>
</template>