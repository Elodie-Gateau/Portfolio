<script setup>
const props = defineProps({ image: String, tag: String, description: String, linkProject: String, linkGitHub: String, isVisible: Boolean })
import { ref, reactive, computed } from 'vue';


const isOpen = ref(false);
function toggleImage() {
    isOpen.value = !isOpen.value

}


</script>

<template>
    <div class="card-details" v-show="isVisible">

        <img :src="image" @click="toggleImage" :class="{ expand: isOpen }">

        <p class="description">{{ description }}</p>
        <div class="linkProjects"><a :href="linkProject"><button class="link-project">Lien du projet</button></a>
            <a :href="linkGitHub" v-show="linkGitHub"><button class="link-github">Lien GitHub</button></a>
        </div>
    </div>

</template>