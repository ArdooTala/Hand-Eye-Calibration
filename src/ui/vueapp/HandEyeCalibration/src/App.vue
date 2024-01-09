<script setup>
import InputsPath from "./components/Inputs/InputsPath.vue";
import ImageLoader from "./components/ImageLoader.vue";
import CharucoParams from "./components/Inputs/CharucoParams.vue";
import CameraParams from "./components/Inputs/CameraParams.vue";
import ProgramInput from "./components/Inputs/ProgramInput.vue";
import RobotType from "./components/Inputs/RobotType.vue";
import RobPrgLoader from "./components/RobPrgLoader.vue";
import CalibrationType from "./components/Inputs/CalibrationType.vue";
import SavePath from "./components/Inputs/SavePath.vue";
import Calibration from "./components/Calibration.vue";
import CamPosesView from "@/components/3DViews/CamPosesView.vue";
import RobPosesView from "@/components/3DViews/RobPosesView.vue";
import HECalResultView from "@/components/3DViews/HECalResultView.vue";
</script>

<template>
  <div class="container-fluid h-100 bg-secondary-subtle">
    <div
      class="offcanvas offcanvas-start bg-secondary-subtle"
      tabindex="-1"
      id="offcanvasExample"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title display-5" id="offcanvasExampleLabel">
          CONSTANTS
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div class="offcanvas-body">
        <CharucoParams />
        <RobotType />
      </div>
    </div>

    <div class="row h-100">
      <div class="col-8">
        <div class="d-flex flex-column h-100">
          <div class="row">
            <div class="col-6">
              <CalibrationType />
              <InputsPath />
              <ProgramInput />
            </div>
            <div class="col-6 d-flex flex-column">
              <h2 class="display-3 text-center">HAND-EYE CALIBRATION</h2>
              <Calibration />
            </div>
          </div>

          <div class="row flex-fill">
            <div class="col-6">
              <ImageLoader class="h-100" />
            </div>
            <div class="col-6">
              <RobPrgLoader class="h-100" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="d-flex flex-column h-100">
          <div class="d-flex">
            <CamPosesView class="flex-fill" />
            <RobPosesView class="flex-fill" />
          </div>
          <HECalResultView class="flex-fill" />
          <SavePath />
        </div>
      </div>
    </div>
  </div>
</template>
