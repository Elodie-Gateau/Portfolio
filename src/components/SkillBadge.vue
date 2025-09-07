<script setup>
import skills from '@/assets/skills.json' with { type: 'json' };
import { ref, reactive, computed } from 'vue';

const base = import.meta.env.BASE_URL;

const skillsCategories = computed(() => {
    const categoriesList = [];
    for (let skill of skills) {
        if (!categoriesList.includes(skill.category)) {
            categoriesList.push(skill.category);
        }
    }
    return categoriesList;
})
let selectedSkillCategory = ref("");

const skillsFilter = reactive([]);

function showAll(skills) {
    skillsFilter.length = 0;
    for (let skill of skills) {
        skillsFilter.push(skill);
    }
}
showAll(skills);

function showBadges(cat) {
    skillsFilter.length = 0;
    selectedSkillCategory.value = cat;
    for (let skill of skills) {
        if (selectedSkillCategory.value === skill.category) {
            skillsFilter.push(skill);
        }
    }
}


const openIndex = ref(null);
function toggleImage(i) {
    if (openIndex.value === i) {
        openIndex.value = null;

    } else {
        openIndex.value = i;

    }
}


const openProjectIndex = ref(null);

function toggleProjects(i) {
    openProjectIndex.value = (openProjectIndex.value === i ? null : i);
}


</script>

<template>
    <section class="skills">
        <h2>Découvez mes compétences</h2>
        <div class="container-filter">
            <div class="filter" v-for="skillsCategory in skillsCategories" :key="skillsCategory">
                <button @click="showBadges(skillsCategory)">{{ skillsCategory }}</button>
            </div>
            <div class="filter">
                <button @click="showAll(skills)">Toutes</button>
            </div>
        </div>
        <div v-if="openIndex !== null" class="lightbox-overlay" @click="toggleImage(openIndex)"></div>
        <div class="badges">
            <div class="badge" v-for="skill in skillsFilter" :key="skill.name">

                <img :src="base + skill.badge" :alt="skill.name">

                <h3>{{ skill.name }}</h3>
                <div class="progress-container">
                    <div class="progress-bar" :style="{ width: skill.progress + '%' }"></div>
                </div>
                <h4>Source :</h4>
                <p>{{ skill.source }}</p>
                <h4 v-if="skill.projects && skill.projects.length" @click="toggleProjects(skill.name)">
                    Mes réalisations {{ openProjectIndex === skill.name ? '−' : '✚' }}
                </h4>
                <div v-if="skill.projects && skill.projects.length" class="skills-projects" :class="{
                    hidden: openProjectIndex !== skill.name,
                    'lightbox-open': openIndex !== null
                }">
                    <div class="projets" v-for="(project, i) in skill.projects" :key="project.name" :class="{
                        'is-active': openIndex === i,
                        'is-hidden': openIndex !== null && openIndex !== i
                    }">
                        <h5>{{ project.name }}</h5>

                        <img :src="base + project.image" :alt="project.name" :class="{ expand: openIndex === i }"
                            @click="toggleImage(i)" />

                        <p class="description">{{ project.description }}</p>

                        <a v-if="project.link" :href="project.link" target="_blank" rel="noopener">
                            <button class="link-project">En voir plus</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>