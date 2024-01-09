<script setup>
const props = defineProps(["title"]);
</script>

<template>
  <div class="bg-dark-subtle border rounded-3 p-2 my-2 d-flex flex-column">
    <h6 class="mb-3">{{ props.title }}</h6>

    <slot></slot>
  </div>
</template>
