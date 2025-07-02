<script setup>

import Navigation from './components/Navigation.vue';
import Home from './components/Home.vue';


import { shallowRef } from 'vue';

let componentName = shallowRef(Home)


function switchComponent(component) {
  componentName.value = component;

}


</script>

<template>
  <!-- Home -->

  <Navigation @nav="switchComponent">
  </Navigation>
  <main>
    <Transition>
      <component :is="componentName" />
    </Transition>
  </main>
</template>

<style>
.v-enter-active {
  transition: all 0.8s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(50%);
}

.v-enter-to {
  opacity: 1;
  transform: translateX(0);
}


.v-leave-active {
  transition: none;
}

.v-leave-from,
.v-leave-to {
  opacity: 0;
}
</style>