<script setup>
import InputForm from "./InputForm.vue";

import { heCalRes_RType } from "../../store.js";
import { calibrate_he } from "../../pyFuncs.js";
</script>

<template>
  <InputForm title="CALIBRATION TYPE">
    <div class="btn-group" role="group">
      <input
        type="radio"
        class="btn-check"
        name="vbtn-radio"
        id="vbtn-radio1"
        autocomplete="off"
        checked
      />
      <label
        class="btn btn-outline-light p-1 position-relative"
        for="vbtn-radio1"
      >
        <img
          src="/EyeInHandToothy.jpg"
          class="img-fluid rounded object-fit-cover"
          alt="EYE-IN-HAND"
        />
        <h4
          class="bg-dark h4 position-absolute bottom-0 start-50 mb-2 translate-middle-x text-nowrap fw-bolder text-white p-1 rounded bg-opacity-50"
        >
          EYE-IN-HAND
        </h4>
      </label>

      <input
        type="radio"
        class="btn-check"
        disabled
        name="vbtn-radio"
        id="vbtn-radio2"
        autocomplete="off"
      />
      <label
        class="btn btn-outline-light p-1 position-relative"
        for="vbtn-radio2"
      >
        <img
          src="/EyeToHandToothy.jpg"
          class="img-fluid rounded"
          alt="EYE-TO-HAND"
        />
        <div
          class="bg-dark h4 position-absolute bottom-0 start-50 mb-2 translate-middle-x text-nowrap fw-bolder text-white p-1 rounded bg-opacity-50"
        >
          EYE-TO-HAND
        </div>
      </label>
    </div>
  </InputForm>
</template>

<style scoped></style>
