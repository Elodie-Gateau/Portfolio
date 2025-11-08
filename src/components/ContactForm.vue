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