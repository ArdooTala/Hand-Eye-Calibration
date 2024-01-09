// store.js
import { ref, reactive } from "vue";

export const store = reactive({
  count: 0,
});

export const image_files = ref([]);
export const images_path_in = ref("");
export const save_path_in = ref("");
export const save_path_out = ref("");

export const rob_prg_path_in = ref("");
export const camPoses = ref([]);
export const rob_poses = ref([]);

export const imageData = ref([]);

export const res_x = ref(1280);
export const res_y = ref(720);
export const camera_fx = ref(1);
export const camera_fy = ref(1);
export const camera_cx = ref(640);
export const camera_cy = ref(360);
export const dist_coeff = ref([1, 1, 1, 1, 1]);

export const manufacturer = ref("UR");

export const heCal_t = ref([0, 0, 0]);
export const heCal_r = ref([0, 0, 0]);
export const heCal_r_quat = ref([0, 0, 0, 0]);
export const heCalRes_RType = ref("rotvec");
