import Swal from "sweetalert2";

import { IMAGES } from "../../constants/index";

export const carrotAlert = (errMsg) => {
  Swal.fire({
    imageUrl: `${IMAGES.alertImg}`,
    text: errMsg,
    padding: 24,
    confirmButtonText: "확인",
    confirmButtonColor: "#F27808",
  });
};

export const carrotConfirm = (img, msg, callback1, callback2) => {
  Swal.fire({
    imageUrl: img,
    text: msg,
    padding: 24,
    showCancelButton: true,
    confirmButtonText: "예",
    confirmButtonColor: "#F27808",
    cancelButtonColor: "#4A8A51",
    cancelButtonText: "아니요",
  }).then((result) => {
    if (result.isConfirmed) {
      callback1();
      callback2();
    }
  });
};
