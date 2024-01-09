<script setup>
import { images_path_in } from "../../store.js";
import {
  v_make_detector,
  v_auto_detect_cam,
  v_get_poses,
} from "../../pyFuncs.js";
import InputForm from "./InputForm.vue";

function auto_process() {
  v_make_detector();
  v_auto_detect_cam();
  v_get_poses();
}
</script>

<template>
  <InputForm title="IMAGES DIRECTORY">
    <div class="row">
      <div class="input-group col-12">
        <span class="input-group-text" id="basic-addon1">
          <i class="bi bi-folder"></i>
        </span>
        <input
          type="text"
          v-model="images_path_in"
          placeholder="<Path to Images Directory>"
          class="form-control"
        />
      </div>

      <div class="btn-toolbar mt-2 col-12" role="toolbar">
        <div class="btn-group me-2" role="group">
          <button
            type="button"
            class="btn btn-outline-light"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
          >
            <span class="bi bi-sliders"> Settings</span>
          </button>
        </div>

        <button
          type="button"
          class="btn btn-outline-secondary dropdown-toggle ms-auto"
          data-bs-toggle="dropdown"
        >
          Manual
        </button>
        <ul class="dropdown-menu">
          <li>
            <a type="button" class="dropdown-item" @click="v_make_detector"
              >Load Images</a
            >
          </li>
          <li>
            <a type="button" class="dropdown-item" @click="v_auto_detect_cam"
              >Calibrate Camera</a
            >
          </li>
          <li>
            <a type="button" class="dropdown-item" @click="v_get_poses"
              >Extract Poses</a
            >
          </li>
        </ul>

        <div class="btn-group ms-2" role="group">
          <button type="button" class="btn btn-light" @click="auto_process">
            AUTO PROCESS
          </button>
        </div>
      </div>
    </div>
  </InputForm>
</template>
