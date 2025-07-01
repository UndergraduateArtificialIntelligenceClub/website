<template>
  <a
    class="navbar-item"
    :class="{ 'is-active': isActive }"
    :target="link.target"
    :href="link.link"
    :aria-current="isActive ? 'page' : null"
  >
    <span v-if="link.icon" class="icon has-text-info">
      <i :class="link.icon"></i>
    </span>
    <span>{{ link.text }}</span>
  </a>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  link: Object,
  currentPathname: String,
});

const isActive = computed(() => {
  // Check for exact match, but handle the homepage case ('/' vs '')
  return props.link.link === props.currentPathname || (props.link.link === '/' && props.currentPathname === '');
});
</script>