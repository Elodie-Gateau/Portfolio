<script setup>
import data from '@/assets/data/projects.json' with { type: 'json'};
import { Code, ChevronLeft, ChevronRight } from '@lucide/vue';
import {computed, onBeforeUnmount, onMounted, ref} from "vue";

const nbProjects = ref(3);
const isCarousel = ref(false);
const track = ref(null);
let mediaQuery;

function handleMediaChange(e) {
  isCarousel.value = e.matches;
}

onMounted(() => {
  mediaQuery = window.matchMedia('(min-width: 768px)');
  handleMediaChange(mediaQuery);
  mediaQuery.addEventListener('change', handleMediaChange);
});

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener('change', handleMediaChange);
});

const projects = computed(() =>
  isCarousel.value
    ? data
    : data.filter((project) => project.position <= nbProjects.value)
);

const hasMore = computed(() => !isCarousel.value && nbProjects.value < data.length);

function seeMore() {
  nbProjects.value += 3;
}

function scrollByCard(direction) {
  if (!track.value) return;
  const card = track.value.querySelector('.project');
  if (!card) return;
  const gap = parseFloat(getComputedStyle(track.value).gap) || 0;
  track.value.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
}
</script>

<template>
  <section id="projects">
    <div>
      <h2>Projets réalisés</h2>
      <h3>Quelques réalisations</h3>
    </div>

    <div class="carousel">
      <button v-if="isCarousel" class="carousel-nav prev" @click="scrollByCard(-1)" aria-label="Projet précédent">
        <ChevronLeft />
      </button>

      <div ref="track" class="track">
        <div v-for="project in projects" :key="project.position" class="project">
          <img :src= "project.image" :alt="project.name">
          <h5>{{ project.subtitle }}</h5>
          <h4>{{ project.name }}</h4>
          <p>{{ project.description }}</p>
          <div>
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
          <a v-if="project.link" :href="project.link" target="_blank"><Code /><span>Code</span></a>
        </div>
      </div>

      <button v-if="isCarousel" class="carousel-nav next" @click="scrollByCard(1)" aria-label="Projet suivant">
        <ChevronRight />
      </button>
    </div>

    <button v-if="hasMore" @click="seeMore()">Voir plus</button>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/style/glassPanel" as *;
@use "@/assets/style/variables" as *;
@use "@/assets/style/typography" as *;
@use "@/assets/style/button" as *;
@use "@/assets/style/breakpoint" as *;

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

  .carousel {
    display: flex;
    align-items: center;
    gap: $size-10;

    .track {
      display: flex;
      flex-direction: column;
      gap: $size-16;
      flex: 1;
      min-width: 0;
    }

    .carousel-nav {
      display: none;
    }
  }

  .project {
    @include glass-default($size-22, $size-16, $size-20);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
      justify-content: space-evenly;
      gap: $size-8;
      row-gap: $size-6;

      span {
        @include button-ghost-accent();
        padding: $size-8 $size-12;
      }
    }

    a {
      @include button-link-glass();
      @include glass-dark($size-12, $size-8 $size-12, $size-10);
      align-self: flex-end;
      display: flex;
      gap: $size-6
    }
  }

  button {
    @include button-secondary();
    @include glass-soft($size-12, $size-8 $size-12, $size-32);
    align-self: center;
    cursor: pointer;
  }

  @media (min-width: $md) {
    .carousel {
      .track {
        flex-direction: row;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        padding-block: $size-32;
        margin-block: -#{$size-32};

        &::-webkit-scrollbar {
          display: none;
        }
      }

      .project {
        flex: 0 0 calc((100% - #{$size-16}) / 2);
        scroll-snap-align: start;

        h4 {
          font-size: $size-22;
        }
      }

      .carousel-nav {
        @include glass-soft($size-32, 0, 0);
        display: flex;
        align-items: center;
        justify-content: center;
        width: $size-32;
        height: $size-32;
        flex-shrink: 0;
        border: none;
        cursor: pointer;
        color: inherit;

        svg {
          width: $size-14;
          height: $size-14;
        }
      }
    }
  }

  @media (min-width: $lg) {
    .carousel {
      .project {
        flex: 0 0 calc((100% - #{$size-16} * 2) / 3);
      }
    }
  }
}
</style>