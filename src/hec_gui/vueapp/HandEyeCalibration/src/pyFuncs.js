import {
  res_x,
  res_y,
  camera_fx,
  camera_fy,
  camera_cx,
  camera_cy,
  dist_coeff,
  imageData,
  images_path_in,
  image_files,
  camPoses,
  rob_poses,
  rob_prg_path_in,
  save_path_in,
  heCal_t,
  heCal_r,
  heCal_r_quat,
  heCalRes_RType,
  save_path_out,
} from "./store.js";

export function calibrate_he(event) {
  eel.run_he_cal(heCalRes_RType.value)((res) => {
    heCal_r.value = res[0].map((n) => n.toFixed(4));
    heCal_t.value = res[1].map((n) => n.toFixed(5));
    heCal_r_quat.value = res[2].map((n) => Number(n));
  });
}

export function v_save_cam_cal(event) {
  eel.save_cam_cal_res(save_path_in.value)((res) => {
    save_path_out.value = res;
  });
}

export function v_save_he_cal(event) {
  eel.save_he_res(save_path_in.value)((res) => {
    save_path_out.value = res;
  });
}

export function v_make_detector(event) {
  eel.make_detector(images_path_in.value)((files) => {
    // image_files.value = files;
    imageData.value = [];
    files.forEach((f) => {
      imageData.value.push({ name: f });
    });
  });
}

export function v_auto_detect_cam(event) {
  eel.auto_detect_camera()((cam) => {
    res_x.value = cam[2][0];
    res_y.value = cam[2][1];
    dist_coeff.value = cam[1];
    camera_fx.value = cam[0][0];
    camera_fy.value = cam[0][4];
    camera_cx.value = cam[0][2];
    camera_cy.value = cam[0][5];
  });
}

export function v_get_poses(event) {
  eel.detect_cam_poses()((ps) => {
    camPoses.value = [];
    ps.forEach((p) => {
      const imgD = imageData.value.find((i) => i.name == p[0]);
      imgD.tvec = p[2];
      imgD.rvec = p[1];
    });
    camPoses.value = imageData.value;
  });
}

export function v_parse_program(event) {
  eel.parse_robot_program(rob_prg_path_in.value)((robPs) => {
    rob_poses.value = [];
    robPs.forEach((p) => {
      const rp = {
        name: p[0],
        tvec: p[2],
        rvec: p[1],
      };
      rob_poses.value.push(rp);
    });
  });
}
