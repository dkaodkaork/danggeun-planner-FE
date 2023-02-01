import { useState } from "react";

export const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  const modalHandler = () => {
    setIsModal(!isModal);
  };

  return { isModal, modalHandler };
};
