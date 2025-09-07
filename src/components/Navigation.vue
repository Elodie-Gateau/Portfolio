<script setup>
import { ref } from 'vue';
import Home from './Home.vue';
import AboutSection from './AboutSection.vue';
// import ProjectList from './ProjectList.vue';
import SkillBadge from './SkillBadge.vue';
import ContactForm from './ContactForm.vue';

const menuOpen = ref(false);
if (window.innerWidth < 720) {
    menuOpen.value = true;
}
const emit = defineEmits(['nav']);

function toggleMenu() {
    menuOpen.value = !menuOpen.value;
}

function clickNav(component) {
    emit('nav', component);
    if (window.innerWidth < 720) {
        toggleMenu();
    }
}
</script>

<template>
    <section class="nav">
        <div class="hamburger" @click="toggleMenu" v-show="menuOpen">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <transition name="slide">
            <nav v-show="!menuOpen">
                <font-awesome-icon class="cross" :icon="['fas', 'square-xmark']" @click="toggleMenu" />
                <ul>
                    <li @click="clickNav(Home)">Accueil</li>
                    <li @click="clickNav(AboutSection)">À propos</li>
                    <!-- <li @click="clickNav(ProjectList)">Projets</li> -->
                    <li @click="clickNav(SkillBadge)">Compétences</li>
                    <li @click="clickNav(ContactForm)">Contact</li>
                </ul>
            </nav>
        </transition>
    </section>
</template>

<style>
/* Transition slide pour le menu */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.4s ease, opacity 0.4s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}
</style>