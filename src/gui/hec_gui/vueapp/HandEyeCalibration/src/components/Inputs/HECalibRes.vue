<script setup>
import { heCal_t, heCal_r } from "../../store.js";

import InputForm from "./InputForm.vue";

import { heCalRes_RType } from "../../store.js";
import { calibrate_he } from "../../pyFuncs.js";
</script>

<template>
  <InputForm title="HAND-EYE CALIBRATION">
    <div class="d-flex flex-column flex-fill">
      <div class="flex-fill d-flex flex-column">
        <div class="input-group col-12 mb-3">
          <label class="input-group-text" for="inputGroupSelectREP"
            >Representation</label
          >
          <select
            class="form-select"
            id="inputGroupSelectREP"
            v-model="heCalRes_RType"
          >
            <option value="rotvec">TVec + RVec</option>
            <option value="quat">TVec + Quaternion</option>
            <option value="matrix" disabled>4x4 Matrix</option>
          </select>
        </div>
        <button
          class="btn btn-lg btn-light mb-3 w-100 flex-fill"
          @click="calibrate_he"
        >
          CALIBRATE HAND-EYE
        </button>
      </div>

      <table class="table text-center font-monospace">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Translation</th>
            <th scope="col">Rotation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">x</th>
            <td>{{ heCal_t[0] }}</td>
            <td>{{ heCal_r[0] }}</td>
          </tr>
          <tr>
            <th scope="row">y</th>
            <td>{{ heCal_t[1] }}</td>
            <td>{{ heCal_r[1] }}</td>
          </tr>
          <tr>
            <th scope="row">z</th>
            <td>{{ heCal_t[2] }}</td>
            <td>{{ heCal_r[2] }}</td>
          </tr>
          <tr>
            <th scope="row">w</th>
            <td></td>
            <td>{{ heCal_r?.[3] ?? "" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </InputForm>
</template>
