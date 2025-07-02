<script setup>
const props = defineProps({ image: String, tag: String, description: String, linkProject: String, linkGitHub: String, isVisible: Boolean })
import { ref, reactive } from 'vue'
const imageStyle = reactive({});
const isOpen = ref(false);
function toggleImage() {
    if (!isOpen.value) {
        imageStyle.width = "100vw";
        imageStyle.position = "absolute";

        imageStyle.zIndex = 1000;
        imageStyle.transition = "all 0.5s ease";
        isOpen.value = true;
    } else {
        imageStyle.width = "90%";
        imageStyle.position = "";

        imageStyle.zIndex = "";
        imageStyle.transition = "all 0.5s ease";
        isOpen.value = false;
    }
}


</script>

<template>
    <div class="card-details" v-show="isVisible">

        <img :src="image" @click="toggleImage" :style="imageStyle">

        <p class="description">{{ description }}</p>
        <div class="linkProjects"><a :href="linkProject"><button class="link-project">Lien du projet</button></a>
            <a :href="linkGitHub" v-show="linkGitHub"><button class="link-github">Lien GitHub</button></a>
        </div>
    </div>

</template>