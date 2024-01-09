<script setup>
import { save_path_in, save_path_out } from "../../store.js";
import { v_save_cam_cal, v_save_he_cal } from "../../pyFuncs.js";
import InputForm from "./InputForm.vue";

function save_all() {
  v_save_cam_cal();
  v_save_he_cal();
}
</script>

<template>
  <InputForm title="SAVE CALIBRATION RESULT">
    <div class="row">
      <div class="input-group col-12">
        <span class="input-group-text" id="basic-addon1">Save Directory</span>
        <input
          type="text"
          v-model="save_path_in"
          placeholder="<Path to Directory for Saving>"
          class="form-control"
        />
      </div>

      <div class="btn-toolbar mt-2 col-12" role="toolbar">
        <div class="btn-group btn-group-sm me-2" role="group">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="v_save_cam_cal"
          >
            Save Camera
          </button>

          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="v_save_he_cal"
          >
            Save Hand-Eye
          </button>
        </div>
        <div class="btn-group ms-auto" role="group">
          <button type="button" class="btn btn-light" @click="save_all">
            SAVE ALL
          </button>
        </div>
      </div>

      <div class="input-group input-group-sm col-12 mt-2">
        <span class="input-group-text" id="save-path-out">Saved File</span>
        <input
          type="text"
          v-model="save_path_out"
          class="form-control"
          readonly
        />
      </div>
    </div>
  </InputForm>
</template>
