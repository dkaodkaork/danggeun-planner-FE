export function isValidEmail(email) {
  return email.match(
    /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
  );
}

export const isValidPassword = (pwd) => {
  return pwd.match(
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,13}$/
  );
};

export const messages = {
  emailInvalidMsg: "올바른 이메일 형식으로 작성해주세요.",
  pwdInvalidMsg: "영문, 숫자, 특수문자가 모두 포함된 8~13자리로 작성해주세요.",
  checkPwdInvalidMsg: "비밀번호가 일치하지 않습니다.",
};
