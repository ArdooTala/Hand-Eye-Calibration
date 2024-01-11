<script setup>
import World from "@/components/World/World.vue";
import { rob_poses } from "@/store.js";
</script>

<template>
  <div class="bg-dark-subtle border rounded-3 my-2 overflow-hidden">
    <World
      :posesList="rob_poses"
      :inverse="false"
      :camPos="[-1, -1, 1]"
      :upDir="[0, 0, 1]"
      :showBoard="false"
    />
  </div>
</template>
