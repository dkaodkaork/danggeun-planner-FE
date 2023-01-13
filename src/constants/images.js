import { ReactComponent as Menu } from "../assets/images/menuicon.svg";
import { ReactComponent as Home } from "../assets/images/home.svg";
import { ReactComponent as CompleteCarrot } from "../assets/images/timer/completeCarrot.svg";
import { ReactComponent as BlingCarrot } from "../assets/images/timer/blingCarrot.svg";
import { ReactComponent as GroupAdd } from "../assets/images/group/groupAdd.svg";
import { ReactComponent as GroupListPeople } from "../assets/images/group/groupListPeople.svg";
import { ReactComponent as NextArrow } from "../assets/images/calendar/next_month.svg";
import { ReactComponent as PreviousArrow } from "../assets/images/calendar/previous_month.svg";

export const IMAGES = {
  // 타이머 이미지
  defalut: require("../assets/images/timer/default.png"),
  step1: require("../assets/images/timer/step1.png"),
  step2: require("../assets/images/timer/step2.png"),
  step3: require("../assets/images/timer/step3.png"),
  step4: require("../assets/images/timer/step4.png"),
  step5: require("../assets/images/timer/step5.png"),
  step6: require("../assets/images/timer/step6.png"),
  rest: require("../assets/images/timer/rest.png"),
  //
  menu: <Menu />,
  home: <Home />,
  completeCarrot: <CompleteCarrot />,
  blingCarrot: <BlingCarrot />,
  groupAdd: <GroupAdd />,
  nextArrow: <NextArrow />,
  previousArrow: <PreviousArrow />,
  groupListPeople: <GroupListPeople />,
};
