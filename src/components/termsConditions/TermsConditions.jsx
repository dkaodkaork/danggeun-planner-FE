import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TermsConditions = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/signup");
  };
  return (
    <StContainer>
      <div>
        <h1>당근 플래너</h1>
      </div>
      <StAgreeForm>
        <div>
          <h3>약관동의</h3>
          <form name="register" autoComplete="off">
            <StCheckForm id="fregister_chkall">
              <input type="checkbox" name="chk_all" value="1" id="chk_all" />
              <label htmlFor="chk_all">회원가입 약관에 모두 동의합니다</label>
            </StCheckForm>
            <section id="fregister_term" />
            <div>
              <input type="checkbox" name="agree" value="1" id="agree11" />
              <label htmlFor="agree11">
                이용약관 동의<span>(필수)</span>
              </label>
            </div>
            <textarea
              readOnly
              value="제1조(목적) 이 약관은 업체 회사(전자상거래 사업자)가 운영하는 업체
            사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하
            “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및
            책임사항을 규정함을 목적으로 합니다. ※「PC통신, 무선 등을 이용하는
            전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을
            준용합니다.」 제2조(정의) ① “몰”이란 업체 회사가 재화 또는 용역(이하
            “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등
            정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의
            영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도
            사용합니다. ② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이
            제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③ ‘회원’이라 함은
            “몰”에 회원등록을 한 자로서, 계속적으로 “몰”이 제공하는 서비스를
            이용할 수 있는 자를 말합니다. ④ ‘비회원’이라 함은 회원에 가입하지
            않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다."
            ></textarea>
            <section />
            <section>
              <fieldset>
                <input type="checkbox" name="agree2" value="1" id="agree21" />
                <label htmlFor="agree21">
                  개인정보 수집 및 이용 동의<span>(필수)</span>
                </label>
              </fieldset>
              <textarea
                readOnly
                value=" 개인정보처리방침 [차례] 1. 총칙 2. 개인정보 수집에 대한 동의 3.
              개인정보의 수집 및 이용목적 4. 수집하는 개인정보 항목 5. 개인정보
              자동수집 장치의 설치, 운영 및 그 거부에 관한 사항 6. 목적 외 사용
              및 제3자에 대한 제공 7. 개인정보의 열람 및 정정 8. 개인정보 수집,
              이용, 제공에 대한 동의철회 9. 개인정보의 보유 및 이용기간 10.
              개인정보의 파기절차 및 방법 11. 아동의 개인정보 보호 12. 개인정보
              보호를 위한 기술적 대책 13. 개인정보의 위탁처리 14. 의겸수렴 및
              불만처리 15. 부 칙(시행일)"
              ></textarea>
            </section>
            <div>
              <button onClick={clickHandler}>동의하기</button>
            </div>
          </form>
        </div>
      </StAgreeForm>
    </StContainer>
  );
};
export default TermsConditions;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin: 50px 0;
    font-size: 40px;
    color: #2d3043;
    font-weight: bold;
    text-align: center;
  }
`;

const StAgreeForm = styled.div`
  max-width: 600px;
  margin: 50px auto 0;
  padding: 40px 40px;
  background: #fff;
  border: 1px solid #d8d9de;
  border-radius: 4px;

  h3 {
    position: relative;
    padding: 0 0 10px 0;
    font-size: 16px;
    color: #2d2f43;
    font-weight: 500;
    border-bottom: 2px solid #3d435f;
  }

  form {
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

const StCheckForm = styled.div`
  line-height: 55px;
  border-bottom: 1px solid #d8d9df;
  text-align: left;
`;
