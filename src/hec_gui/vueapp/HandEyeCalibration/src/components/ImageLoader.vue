<script setup>
import ImagesTable from "./ImagesTable.vue";
import World from "./World/World.vue";
import { imageData, camPoses } from "../store.js";
import { v_get_poses } from "../pyFuncs.js";
</script>

<template>
  <div class="d-flex flex-column">
    <!-- <div class="bg-dark-subtle border rounded-3 my-2 overflow-hidden">
      <World
        :posesList="camPoses"
        :inverse="true"
        :camPos="[-1, -1, -1]"
        :upDir="[0, 0, -1]"
        :showBoard="true"
      />
    </div> -->

    <div class="bg-dark-subtle border rounded-3 p-2 my-2 flex-fill">
      <div class="row h-100">
        <div class="col-12 d-flex">
          <ImagesTable
            :PosesList="imageData"
            tableTitle="Charuco Board Poses"
            @refreshTable="v_get_poses"
            class="flex-fill"
          />
        </div>
      </div>
    </div>
  </div>
</template>
