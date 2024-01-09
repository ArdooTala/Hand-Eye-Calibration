<script setup>
import { rob_prg_path_in } from "../../store.js";
import { v_parse_program } from "../../pyFuncs.js";
import InputForm from "./InputForm.vue";
</script>

<template>
  <InputForm title="ROBOT PROGRAM FILE">
    <div class="row">
      <div class="input-group col-12">
        <span class="input-group-text" id="basic-addon1">
          <i class="bi bi-file-earmark-text"></i>
        </span>
        <input
          type="text"
          v-model="rob_prg_path_in"
          placeholder="<Path to Robot Program>"
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

        <div class="btn-group ms-auto" role="group">
          <button type="button" class="btn btn-light" @click="v_parse_program">
            GET ROBOT POSES
          </button>
        </div>
      </div>
    </div>
  </InputForm>
</template>
