<template>
  <a
    :class="['navbar-item', { 'is-active': isActive }]"
    :href="link.link"
    :target="link.target || null"
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

// The link is active if its path exactly matches the current page's path.
const isActive = computed(() => {
  return props.link && props.link.link === props.currentPathname;
});
</script>