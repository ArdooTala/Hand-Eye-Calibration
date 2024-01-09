<script setup>
import { ref, onMounted, watch } from "vue";
import * as THREE from "three";

import { camPoses, rob_poses, heCal_t, heCal_r_quat } from "@/store";

const threecanvas = ref(null);
const props = defineProps(["camPos"]);

watch([heCal_t, heCal_r_quat], () => {
  console.log(heCal_t.value);
  console.log(heCal_r_quat.value);

  add_cams();
});

const scene = new THREE.Scene();

function drawLine(p1, p2, color) {
  const lineMat = new THREE.LineBasicMaterial({ color: color });
  const lineGeo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
  const line = new THREE.Line(lineGeo, lineMat);
  scene.add(line);
  return line;
}
const origin = new THREE.Vector3(0, 0, 0);

const axesHelper = new THREE.AxesHelper(2);
// axesHelper.position.z += 0.0001;
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(4, 40, 0x222222, 0x111111);
gridHelper.rotation.x = Math.PI / 2;
scene.add(gridHelper);

const bH = 6 * 0.04;
const bW = 9 * 0.04;

const planeGeo = new THREE.PlaneGeometry(bW, bH);
const material = new THREE.MeshBasicMaterial({
  color: 0x8888ff,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeo, material);
plane.position.x += bW / 2;
plane.position.y += bH / 2;
scene.add(plane);

const ZAXIS = new THREE.Vector3(0, 0, 1);

const camGeo = new THREE.BoxGeometry(0.05, 0.02, 0.02);
// const camGeo = new THREE.PlaneGeometry(bW, bH);
// camGeo.translate(bW / 2, bH / 2, 0);
const camMat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});

const sceneCams = [];
const sceneLines = [];

function add_cams() {
  const cal_xform = new THREE.Matrix4();
  cal_xform.makeRotationFromQuaternion(
    new THREE.Quaternion(...heCal_r_quat.value)
  );
  cal_xform.setPosition(...heCal_t.value);
  console.log(cal_xform);

  for (let i = 0; i < rob_poses.value.length; i++) {
    const rob_pose = rob_poses.value[i];
    const cam_pose = camPoses.value[i];

    try {
      let rob_m = new THREE.Matrix4();
      rob_m.makeRotationFromQuaternion(new THREE.Quaternion(...rob_pose.rvec));
      rob_m.setPosition(...rob_pose.tvec);

      let cam_m = new THREE.Matrix4();
      cam_m.makeRotationFromQuaternion(new THREE.Quaternion(...cam_pose.rvec));
      cam_m.setPosition(...cam_pose.tvec);

      var tcpAxes = new THREE.AxesHelper(0.05);
      tcpAxes.applyMatrix4(rob_m);
      scene.add(tcpAxes);

      var camMesh = new THREE.Mesh(camGeo, camMat);
      camMesh.applyMatrix4(cal_xform);
      camMesh.applyMatrix4(rob_m);
      scene.add(camMesh);

      var boardAxes = new THREE.AxesHelper(0.2);

      boardAxes.applyMatrix4(cam_m);
      boardAxes.applyMatrix4(cal_xform);
      boardAxes.applyMatrix4(rob_m);
      scene.add(boardAxes);

      // sceneLines.push(drawLine(origin, camMesh.position, 0x888888));
    } catch (error) {}
  }

  // rob_poses.value.forEach((pose) => {
  //   try {
  //     var tcpAxes = new THREE.AxesHelper(0.05);

  //     let m = new THREE.Matrix4();
  //     m.makeRotationFromQuaternion(new THREE.Quaternion(...pose.rvec));
  //     m.setPosition(...pose.tvec);

  //     tcpAxes.applyMatrix4(m);

  //     // sceneCams.push(camMesh);
  //     scene.add(tcpAxes);

  //     var camMesh = new THREE.Mesh(camGeo, camMat);
  //     camMesh.applyMatrix4(cal_xform);
  //     camMesh.applyMatrix4(m);
  //     scene.add(camMesh);
  //     // sceneLines.push(drawLine(origin, camMesh.position, 0x888888));
  //   } catch (error) {}
  // });
}

onMounted(() => {
  const renderer = new THREE.WebGLRenderer({ canvas: threecanvas.value });
  renderer.setSize(threecanvas.value.width, threecanvas.value.height);
  // renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

  const camera = new THREE.PerspectiveCamera(
    60,
    threecanvas.value.width / threecanvas.value.height,
    0.01,
    10
  );

  camera.position.set(...props.camPos);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);

  function resizeCanvasToDisplaySize() {
    // console.log(threecanvas.value.clientWidth);
    // console.log(threecanvas.value.clientHeight);
    const width = threecanvas.value.clientWidth;
    const height = threecanvas.value.clientHeight;
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function animate() {
    resizeCanvasToDisplaySize();
    requestAnimationFrame(animate);

    camera.position.applyAxisAngle(ZAXIS, 0.001);
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  animate();
});
</script>

<template>
  <div
    class="position-relative p-0 h-100 d-flex flex-column"
    style="min-height: 30vh"
  >
    <canvas ref="threecanvas" class="w-100 flex-fill"> </canvas>

    <button
      type="button"
      class="btn btn-dark position-absolute top-0 end-0"
      @click="add_cams"
    >
      <i class="bi bi-arrow-clockwise"></i>
    </button>
  </div>
</template>
