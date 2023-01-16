import { ReactComponent as Menu } from "../assets/images/menuicon.svg";
import { ReactComponent as Home } from "../assets/images/home.svg";
import { ReactComponent as CompleteCarrot } from "../assets/images/timer/completeCarrot.svg";
import { ReactComponent as BlingCarrot } from "../assets/images/timer/blingCarrot.svg";
import { ReactComponent as GroupAdd } from "../assets/images/group/groupAdd.svg";
import { ReactComponent as GroupListPeople } from "../assets/images/group/groupListPeople.svg";
import { ReactComponent as NextArrow } from "../assets/images/calendar/next_month.svg";
import { ReactComponent as PreviousArrow } from "../assets/images/calendar/previous_month.svg";
import { ReactComponent as DownArrow } from "../assets/images/group/down-arrow.svg";
import { ReactComponent as InviteIcon } from "../assets/images/group/inviteIcon.svg";
import { ReactComponent as CalendarIcon } from "../assets/images/planner/calendarIcon.svg";
import { ReactComponent as AddBtn } from "../assets/images/planner/plan_add.svg";
import { ReactComponent as RangeBtn } from "../assets/images/planner/range_button.svg";
import { ReactComponent as CarrotSticker } from "../assets/images/planner/carrot.svg";
import { ReactComponent as CheckBtn } from "../assets/images/planner/check.svg";
import { ReactComponent as Kakao } from "../assets/images/login/kakao.svg";
import { ReactComponent as Naver } from "../assets/images/login/naver_logo.svg";
import { ReactComponent as Google } from "../assets/images/login/google.svg";
import { ReactComponent as Fold } from "../assets/images/mypage/fold_icon.svg";
import { ReactComponent as Edit } from "../assets/images/mypage/fold_icon.svg";

export const IMAGES = {
  // 로그인
  kakao: <Kakao />,
  naver: <Naver />,
  google: <Google />,

  // 마이페이지
  fold: <Fold />,
  edit: <Edit />,

  // 타이머 이미지
  defalut: require("../assets/images/timer/default.png"),
  step1: require("../assets/images/timer/step1.png"),
  step2: require("../assets/images/timer/step2.png"),
  step3: require("../assets/images/timer/step3.png"),
  step4: require("../assets/images/timer/step4.png"),
  step5: require("../assets/images/timer/step5.png"),
  step6: require("../assets/images/timer/step6.png"),
  rest: require("../assets/images/timer/rest.png"),
  // 테스트용 이미지 추후 삭제
  test: require("../assets/images/rabbit_icon.png"),

  // 플래너
  calendarIcon: <CalendarIcon />,
  addBtn: <AddBtn />,
  rangeBtn: <RangeBtn />,
  carrotSticker: <CarrotSticker />,
  checkBtn: <CheckBtn />,
  //
  menu: <Menu />,
  home: <Home />,
  completeCarrot: <CompleteCarrot />,
  blingCarrot: <BlingCarrot />,
  groupAdd: <GroupAdd />,
  nextArrow: <NextArrow />,
  previousArrow: <PreviousArrow />,
  groupListPeople: <GroupListPeople />,
  downArrow: <DownArrow />,
  inviteIcon: <InviteIcon />,
};
