<script setup>
import { ref } from "vue";
import InputForm from "./InputForm.vue";

import { manufacturer } from "../../store.js";
</script>

<template>
  <InputForm title="ROBOT MODEL">
    <div class="row">
      <div class="input-group col-12 mb-3">
        <label class="input-group-text" for="inputGroupSelect01"
          >Manufacturer</label
        >
        <select
          class="form-select"
          id="inputGroupSelect01"
          v-model="manufacturer"
        >
          <option value="UR" selected>UR</option>
          <option value="ABB">ABB</option>
          <option value="KUKA" disabled>KUKA</option>
        </select>
      </div>

      <div class="col-12">
        <button type="button" class="btn btn-outline-light w-100">Apply</button>
      </div>
    </div>
  </InputForm>
</template>
