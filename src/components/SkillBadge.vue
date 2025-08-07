<script setup>
import skills from '@/assets/skills.json' with { type: 'json' };
import { ref, reactive, computed } from 'vue';

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
        <div class="badges">
            <div class="badge" v-for="skill in skillsFilter" :key="skill.name">
                <!-- <div class="badge-item"> -->
                <img :src="skill.badge" :alt="skill.name">
                <h3>{{ skill.name }}</h3>
                <div class="progress-container">
                    <div class="progress-bar" :style="{ width: skill.progress + '%' }"></div>
                </div>
                <h4>Source :</h4>
                <p>{{ skill.source }}</p>
                <h4>Réalisations :</h4>
                <p>{{ skill.exemple }}</p>
                <!-- </div> -->
            </div>
        </div>
    </section>
</template>
<style scoped></style>