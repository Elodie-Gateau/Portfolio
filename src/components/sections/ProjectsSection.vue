<script setup>
import data from '@/assets/data/projects.json' with { type: 'json'};
import {computed, ref} from "vue";

const nbProjects = ref(3);

const projects = computed(() =>
  data.filter((project) => project.position <= nbProjects.value)
);

const hasMore = computed(() => nbProjects.value < data.length);

function seeMore() {
  nbProjects.value += 3;
}

</script>

<template>
  <section>
    <h2>Projets réalisés</h2>
    <h3>Quelques réalisations</h3>
    <div v-for="project in projects" :key="project.position" class="project">
      <img :src= "project.image" :alt="project.name">
      <h5>{{ project.subtitle }}</h5>
      <h4>{{ project.name }}</h4>
      <p>{{ project.description }}</p>
      <div>
        <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      </div>
      <a v-if="project.link" :href="project.link">Voir le code</a>
    </div>
    <button v-if="hasMore" @click="seeMore()">Voir plus</button>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/style/glassPanel" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/typography" as *;
@use "@/assets/style/button" as *;

section {
  display: flex;
  flex-direction: column;
  gap: $size-16;

  h2 {
    @include text-kicker();
    padding: 0 $size-20;
  }

  h3 {
    @include text-h2();
    padding: 0 $size-20;
  }

  .project {
    @include glass-default($size-22, $size-12, $size-20);
    display: flex;
    flex-direction: column;
    gap: $size-10;

    img {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      border-radius: $size-22;
    }

    h5 {
      @include text-kicker();
    }

    h4 {
      @include text-h2();
      margin: 0;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      gap: $size-8;
      row-gap: $size-6;

      span {
        @include button-ghost-accent();
        padding: $size-8 $size-12;
      }
    }

    a {
      @include button-link-glass();
      @include glass-soft($size-12, $size-8 $size-12, $size-10);
      align-self: flex-start;
    }
  }

  button {
    @include button-secondary();
    @include glass-soft($size-12, $size-8 $size-12, $size-32);
    align-self: center;
  }
}
</style>