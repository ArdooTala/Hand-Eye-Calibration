<script setup>
import { ref, onMounted, watch } from "vue";
import * as THREE from "three";

const threecanvas = ref(null);
const props = defineProps([
  "posesList",
  "inverse",
  "camPos",
  "upDir",
  "showBoard",
]);

watch(
  () => props.posesList,
  () => {
    add_cams();
  }
);

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

if (props.showBoard) {
  const planeGeo = new THREE.PlaneGeometry(bW, bH);
  const material = new THREE.MeshBasicMaterial({
    color: 0x8888ff,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(planeGeo, material);
  plane.position.x += bW / 2;
  plane.position.y += bH / 2;
  scene.add(plane);
}

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
  props.posesList.forEach((pose) => {
    try {
      var camMesh = new THREE.Mesh(camGeo, camMat);
      var camAxes = new THREE.AxesHelper(0.1);

      let m = new THREE.Matrix4();
      m.makeRotationFromQuaternion(new THREE.Quaternion(...pose.rvec));
      m.setPosition(...pose.tvec);
      if (props.inverse) m.invert();

      camMesh.applyMatrix4(m);
      camAxes.applyMatrix4(m);

      sceneCams.push(camMesh);
      scene.add(camMesh);
      scene.add(camAxes);

      // sceneLines.push(drawLine(origin, camMesh.position, 0x888888));
    } catch (error) {}
  });
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
  camera.up.set(...props.upDir);
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
