export const serverUrl = process.env.REACT_APP_TEST_SERVER + "/api";

// 카카오
const REST_API_KEY = process.env.REACT_APP_REDIRECT_URI;
const REDIRECT_URI = process.env.REACT_APP_REST_API_KEY;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

// 누르면 백이 알려준 주소로 요청이가고 -> 동의하기 (파람 값으로 오는 인가 코드를 뽑아내서 ) 백에 보내준다 // 두번의 다 통신다
