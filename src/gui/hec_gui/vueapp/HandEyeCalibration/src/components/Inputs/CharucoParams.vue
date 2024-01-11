<script setup>
import { ref } from "vue";
import InputForm from "./InputForm.vue";

const x_num = ref(9);
const y_num = ref(6);
const len_squares = ref(0.04);
const len_markers = ref(0.035);
const markers_dictionary = ref(2);
</script>

<template>
  <InputForm title="CHARUCO BOARD">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="form-floating">
          <input
            type="number"
            id="marker_dict"
            class="form-control"
            v-model="markers_dictionary"
            placeholder="2"
          />
          <label for="marker_dict">ARUCO Dictionary</label>
        </div>
      </div>

      <div class="input-group col-12 mb-3" id="grid_size">
        <div class="form-floating">
          <input
            type="number"
            id="x_num"
            class="form-control"
            v-model="x_num"
            placeholder="9"
          />
          <label for="x_num">X Count</label>
        </div>

        <span class="input-group-text">X</span>

        <div class="form-floating">
          <input
            type="number"
            id="y_num"
            class="form-control"
            v-model="x_num"
            placeholder="9"
          />
          <label for="y_num">Y Count</label>
        </div>
      </div>

      <div class="input-group col-12 mb-3" id="grid_len">
        <div class="form-floating">
          <input
            type="number"
            id="sq_len"
            class="form-control"
            v-model="len_squares"
            placeholder="0.040"
          />
          <label for="sq_len">Square Length</label>
        </div>

        <div class="form-floating">
          <input
            type="number"
            id="marker_len"
            class="form-control"
            v-model="len_markers"
            placeholder="0.035"
          />
          <label for="marker_len">Marker Length</label>
        </div>
      </div>

      <div class="col-12">
        <button type="button" class="btn btn-outline-light w-100">Apply</button>
      </div>
    </div>
  </InputForm>
</template>
