<script setup>
import {
  res_x,
  res_y,
  camera_fx,
  camera_fy,
  camera_cx,
  camera_cy,
  dist_coeff,
} from "../../store.js";

import { v_auto_detect_cam } from "../../pyFuncs.js";

import InputForm from "./InputForm.vue";
</script>

<template>
  <InputForm title="CAMERA INTRINSICS">
    <div class="d-flex flex-column flex-fill">
      <div class="mb-auto">
        <button
          type="button"
          class="btn btn-outline-light col-12"
          @click="v_auto_detect_cam"
        >
          CALIBRATE CAMERA
        </button>
      </div>

      <div class="input-group mb-3" id="Resolution">
        <span class="input-group-text">Size</span>

        <input
          type="number"
          id="res_x"
          class="form-control"
          v-model="res_x"
          placeholder="9"
        />

        <span class="input-group-text">x</span>

        <input
          type="number"
          id="res_y"
          class="form-control"
          v-model="res_y"
          placeholder="9"
        />
      </div>

      <div class="mb-3">
        <label for="grid_len" class="form-label">Intrinsic Matrix</label>
        <div class="input-group" id="grid_len">
          <span class="input-group-text">fx</span>
          <!-- <label for="cam_fx">fx</label> -->
          <input
            type="number"
            id="cam_fx"
            class="form-control"
            v-model="camera_fx"
            placeholder="0.040"
          />

          <span class="input-group-text">fy</span>
          <input
            type="number"
            id="cam_fy"
            class="form-control"
            v-model="camera_fy"
            placeholder="0.035"
          />
        </div>
      </div>

      <div class="input-group mb-3" id="grid_len">
        <span class="input-group-text">cx</span>
        <input
          type="number"
          id="cam_fx"
          class="form-control"
          v-model="camera_cx"
          placeholder="0.040"
        />

        <span class="input-group-text">cy</span>
        <input
          type="number"
          id="cam_fy"
          class="form-control"
          v-model="camera_cy"
          placeholder="0.035"
        />
      </div>

      <div class="mb-3">
        <label for="dist_coeffs" class="form-label"
          >Distortion Coeeficients</label
        >
        <input
          type="list"
          id="dist_coeff"
          class="form-control"
          v-model="dist_coeff"
          placeholder=""
        />
      </div>

      <div class="">
        <button type="button" class="btn btn-outline-light w-100" disabled>
          Apply
        </button>
      </div>
    </div>
  </InputForm>
</template>
