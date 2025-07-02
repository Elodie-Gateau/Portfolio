<script setup>
import projects from '@/assets/projects.json' with { type: 'json' };
import ProjectCard from './ProjectCard.vue';
import { ref, computed, onMounted, reactive } from 'vue';
import Multiselect from 'vue-multiselect'


const projectsJson = reactive(projects);

onMounted(async () => {
    const response = await fetch('https://api.github.com/users/Elodie-Gateau/repos');
    const datas = await response.json();


    const projectsGitHub = [];
    for (let data of datas) {
        const dataItem = {
            id: data.id,
            name: data.name,
            description: data.description,
            linkGitHub: data.html_url,
            image: "/images/badges/logo-github.png",
            tag: data.language
        };
        if (dataItem.id !== 888997695 && dataItem.id !== 896897158)
            projectsGitHub.push(dataItem);
    }
    for (let projectGitHub of projectsGitHub) {
        projectsJson.push(projectGitHub);
    }
    return projectsJson
})


// Exports des catégories
const categories = computed(() => {
    const colorSchemes = [
        { background: "#023047", color: "#ffffff" },
        { background: "#8ecae6", color: "#222222" },
        { background: "#219ebc", color: "#000000" },
        { background: "#ffb703", color: "#000000" },
        { background: "#fb8500", color: "#000000" },
    ];

    const newCategories = [];

    for (let project of projectsJson) {
        if (project.tag && !newCategories.some(c => c.label === project.tag)) {
            const colorIndex = newCategories.length % colorSchemes.length;
            newCategories.push({
                label: project.tag,
                background: colorSchemes[colorIndex].background,
                color: colorSchemes[colorIndex].color
            });
        }
    }

    return newCategories;
});


const selectedCategory = ref([])


// Filtre
const filterProjects = computed(() => {
    const result = [];
    for (let project of projectsJson) {
        let match = false;

        if (selectedCategory.value.length === 0) {
            match = true;
        } else {
            for (let category of selectedCategory.value) {
                if (category.label === project.tag) {
                    match = true;
                    break;
                }
            }
        }

        if (match) {
            result.push(project);
        }
    }
    return result;
});

// Fonctions
let selectedProject = ref('');
let isVisible = ref(false);

function showProject(id) {
    if (selectedProject.value === id) {
        selectedProject.value = null;
    } else {
        selectedProject.value = id;
    }
}

function categoriesStyle(projectTag) {
    for (let category of categories.value) {
        if (projectTag === category.label) {
            return {
                backgroundColor: category.background,
                color: category.color
            }
        }
    }
}

</script>

<template>
    <section class="projets">
        <h2>Projets</h2>
        <div class="multiselect">
            <multiselect v-model="selectedCategory" :options="categories" label="label"
                placeholder="Sélectionnez une catégorie" selectLabel="" deselectLabel="" selectedLabel=""
                :multiple="true">

            </multiselect>
        </div>
        <div class="container-card">
            <div class="card" v-for="project in filterProjects" :key="project.id">
                <!-- <div class="card-item" > -->
                <h3 @click="showProject(project.id)">{{ project.name }}</h3>
                <p :style="categoriesStyle(project.tag)">{{ project.tag }}</p>
                <!-- </div> -->
                <ProjectCard :image="project.image" :tag="project.tag" :description="project.description"
                    :linkProject="project.linkProject" :linkGitHub="project.linkGitHub"
                    :isVisible="selectedProject === project.id">
                </ProjectCard>
            </div>
        </div>
    </section>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>