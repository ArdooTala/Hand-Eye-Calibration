<script setup>
const props = defineProps(["listTitle"]);
</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex">
      <h4 class="flex-fill">{{ props.listTitle }}</h4>

      <h1
        type="button"
        class="btn btn-dark bi bi-arrow-clockwise my-auto"
        @click="$emit('refreshList')"
      />
    </div>

    <div class="border rounded-3 overflow-auto h-100" style="flex: 1 1 0">
      <slot></slot>
    </div>
  </div>
</template>
