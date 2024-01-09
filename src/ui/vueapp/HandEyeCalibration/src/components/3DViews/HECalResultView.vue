<script setup>
import WorldResult from "@/components/World/WorldResult.vue";
</script>

<template>
  <div class="bg-dark-subtle border rounded-3 my-2 overflow-hidden flex-fill">
    <WorldResult :camPos="[-1, -1, 1]" style="min-height: 10vh" />
  </div>
</template>
