<script setup>
import CameraParams from "./Inputs/CameraParams.vue";
import HECalibRes from "./Inputs/HECalibRes.vue";
</script>

<template>
  <div class="row flex-fill">
    <div class="col-6 d-flex">
      <CameraParams class="flex-fill" />
    </div>
    <div class="col-6 d-flex">
      <HECalibRes class="flex-fill" />
    </div>
  </div>
</template>
