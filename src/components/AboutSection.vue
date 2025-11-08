<script setup>
import experiences from '@/assets/experiences.json' with { type: 'json' };
import formations from '@/assets/formations.json' with { type: 'json' };

</script>

<template>
    <section class="about">
        <h2>À propos de moi</h2>

        <div class="cv">
            <div class="cv-experiences">
                <h3>Expériences professionnelles</h3>
                <div class="experiences">
                    <div class="card" v-for="experience in experiences" :key="experience">
                        <h4 class="card-title">{{ experience.poste }}</h4>
                        <p class="card-periode">{{ experience.periode }}</p>
                        <p class="card-society">{{ experience.entreprise }}</p>
                        <div class="realisations" v-for="realisation in experience.realisations" :key="realisation">
                            <p class="realisation">{{ realisation }}</p>

                        </div>
                    </div>

                </div>
            </div>
            <div class="break"></div>
            <div class="cv-formations">
                <h3>Formations</h3>
                <div class="formations">
                    <div class="card" v-for="formation in formations" :key="formation">
                        <h4 class="card-title">{{ formation.intitule }}</h4>
                        <p class="card-periode">{{ formation.annee }}</p>
                        <p class="card-society">{{ formation.organism }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
