<script setup>
import experiences from '@/assets/experiences.json' with { type: 'json' };
import formations from '@/assets/formations.json' with { type: 'json' };

</script>

<template>
    <section class="about">
        <h2>À propos de moi</h2>

        <p>Psychologue du travail de formation, <span class="yellow-span">passionnée</span> de solutions numériques et
            en reconversion dans
            le
            développement web et web mobile, je souhaite allier aujourd'hui mes compétences humaines et techniques pour
            concevoir des solutions digitales orientées <span class="orange-span">utilisateurs.</span></p>

        <p>Ma passion pour les outils numériques fut un véritable fil conducteur dans toutes mes expériences.
            Mon parcours m'a permis de réaliser des projets de digitalisation variés : <span
                class="yellow-span">création de sites
                vitrines</span>,
            développement d'<span class="blue-span">application No Code</span>, <span class="blue-span">déploiement de
                CRM</span>, gestion de projets
            collaboratifs et
            accompagnement au changement. Aujourd'hui, je développe mes compétences techniques en suivant le
            Titre Professionnel Développeur Web et Web Mobile <span class="yellow-span">(TP DWWM)</span>, avec une
            appétence particulière
            pour la
            conception d'<span class="blue-span">interfaces utilisateurs</span> et le développement d'<span
                class="orange-span">applications web</span>
            dynamiques sécurisées.
        </p>
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
