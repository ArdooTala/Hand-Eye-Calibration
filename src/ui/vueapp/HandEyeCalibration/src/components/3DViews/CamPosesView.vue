<script setup>
import World from "@/components/World/World.vue";
import { camPoses } from "@/store.js";
</script>

<template>
  <div class="bg-dark-subtle border rounded-3 my-2 overflow-hidden">
    <World
      :posesList="camPoses"
      :inverse="true"
      :camPos="[-1, -1, -1]"
      :upDir="[0, 0, -1]"
      :showBoard="true"
    />
  </div>
</template>
