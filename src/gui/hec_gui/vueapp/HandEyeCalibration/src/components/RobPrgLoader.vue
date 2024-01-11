<script setup>
import ImagesTable from "./ImagesTable.vue";
import World from "./World/World.vue";
import { rob_poses } from "../store.js";
import { v_parse_program } from "../pyFuncs.js";
</script>

<template>
  <div class="d-flex flex-column">
    <div class="bg-dark-subtle border rounded-3 p-2 my-2 flex-fill">
      <div class="row h-100">
        <div class="col-12 d-flex">
          <ImagesTable
            :PosesList="rob_poses"
            tableTitle="Robot TCP Poses"
            @refreshTable="v_parse_program"
            class="flex-fill"
          />
        </div>
      </div>
    </div>
  </div>
</template>
