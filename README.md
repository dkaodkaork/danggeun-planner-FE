
#  ![profile_pic](https://user-images.githubusercontent.com/110963294/217171052-b6d171f4-2d52-416e-9c14-9adb0e4c597b.png) 당근플래너

![600x340](https://user-images.githubusercontent.com/110963294/217157702-6b17cf6f-40f2-4611-9da9-d5e11eadca2d.png)

## 🗂️ 목차

### 1. [프로젝트 소개](#-프로젝트-소개)
### 2. [Stack](#-stack)
### 3. [프로젝트 아키택처](#-프로젝트-아키택처)
### 4. [주요 기능](#-주요-기능)
### 5. [트러블 슈팅](#-트러블-슈팅)
### 6. [유저 피드백](#-유저-피드백)
### 7. [팀원 소개](#-팀원-소개)

<hr>

## 🚩 프로젝트 소개

안녕하세요. 당신의 근처 당근 플래너 "당근 플래너" 입니다! 
뽀모도로 기법의 시간관리 타이머를 기반으로 시간을 계획하고, 관리하며 당근을 보상으로 받을 수 있는 서비스를 제공합니다!
추후에 당근을 이용한 다양한 보상 컨텐츠도 계획중입니다!

### 📆 개발기간 : 2022년 12월 30일 ~ 2022년 02월 01일

### 🥕 홈페이지 [당근플래너 이용하기](https://www.dggnplanner.com/)

### 👨‍👨‍👧‍👧 팀 블로그 [팀 블로그 둘러보기](https://danggeunplanner.tistory.com/)

### 👄 구글 폼 리뷰 [리뷰 남기기](https://docs.google.com/forms/d/1LwUiqNQoysQiWK3vZF4Tbshc6GNsFTwIbiyQ-sgTW-U/edit)

### 📕 원페이지 소개 [Notion](https://suhjaesuk.notion.site/1131a8383e724f63b53469466b20cb99)

<hr>

##  🛠️ Stack

- FE 

<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-0067A3.svg?&style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Redux-8B00FF.svg?&style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4.svg?&style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled components&logoColor=white"> <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=for-the-badge&logo=ReduxToolkit&logoColor=white"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">


- BE

![Java](https://img.shields.io/badge/Java-007396.svg?&style=for-the-badge&logo=Java&logoColor=white) ![Spring](https://img.shields.io/badge/Spring-6DB33F.svg?&style=for-the-badge&logo=Spring&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white) ![SpringBoot](https://img.shields.io/badge/Spring_Boot-6DB33F.svg?&style=for-the-badge&logo=SpringBoot&logoColor=white) <img src="https://img.shields.io/badge/Spring Security-6DB33F.svg?&style=for-the-badge&logo=Spring Security&logoColor=white"> <img src="https://img.shields.io/badge/JWT-000000.svg?&style=for-the-badge&logo=JSON Web Tokens&logoColor=white"> <img src="https://img.shields.io/badge/Gradle-02303A.svg?&style=for-the-badge&logo=Gradle&logoColor=white"> <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"> <img src="https://img.shields.io/badge/Amazon EC2-yellow?style=for-the-badge&logo=AmazonEC2&logoColor=white"> <img src="https://img.shields.io/badge/Amazon S3-yellow?style=for-the-badge&logo=AmazonS3&logoColor=white"> <img src="https://img.shields.io/badge/Github Actions-2088FF?style=for-the-badge&logo=Github Actions&logoColor=white"> <img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=for-the-badge&logo=Amazon RDS&logoColor=white">

- Tool

<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">

<hr>


## 🏗️ 프로젝트 아키택쳐

![당근플래너 아키텍쳐](https://user-images.githubusercontent.com/110963294/217158066-0b1365bb-7f69-4982-9b13-084128f81d54.png)

### 아키텍쳐에 대한 이해 

<details>
<summary> Vercel </summary>
<div markdown="1">

- 복잡한 절차없이 github 레포지토리와 연동하여 빠른 배포가 가능하며 휘발성 있는 https 주소를 이용하여 개발중에 수시로 디버깅을 편하게 할 수 있는 vercel을 선택하여 배포하였습니다.

</div>
</details>

<details>
<summary> Axios </summary>
<div markdown="1">

- Axios를 이용하여 통신하고, 요청한 rest api의 결과를 react를 통해 시각적으로 전달합니다.

</div>
</details>

<details>
<summary> Redux Toolkit </summary>
<div markdown="1">

- 효율적인 데이터 전역 관리를 위해 리덕스 툴킷을 도입하였습니다.

</div>
</details>

<details>
<summary> Styled Component </summary>
<div markdown="1">

- 스타일로는 JS환경을 최대한 활용하여 조건부 스타일링 할 수 있는 styled component를 선택하였습니다.

</div>
</details>

<details>
<summary> SSE (Server-sent events) </summary>
<div markdown="1">

- 실시간 알림 기능 구현을 위하여 SSE를 이용하였습니다.

</div>
</details>

<hr>


## 🎯 주요 기능

### 👥 로그인/회원가입

<details>
<summary> JWT 토큰과 RefreshToken을 이용한 로그인/회원가입/로그인 유지를 구현하였습니다. </summary>
<div markdown="1">

</br>
<img width="375" alt="image" src="https://user-images.githubusercontent.com/87013822/218977404-c149623a-d05c-4f63-800a-94e8d5a2719c.png">

</div>
</details>

### 👀 튜토리얼

<details>
<summary> 메인화면 접속시 당근 플래너에 대한 컨텐츠 소개를 미리 볼 수 있는 페이지를 제공합니다.</summary>
<div markdown="1">

</br>
<img width="368" alt="image" src="https://user-images.githubusercontent.com/87013822/218977799-d3a4da6f-68df-4fa6-bc4b-d8007d1de4a3.png">

</div>
</details>


### 👤 마이페이지 

<details>
<summary> 닉네임, 프로필 사진, 플래너 공개/비공개를 설정, 공지사항을 볼 수 있는 당근 플래너 블로그 링크와 로그아웃 기능을 제공합니다.</summary>
<div markdown="1">

</br>
<img width="375" height="667" alt="image" src="https://user-images.githubusercontent.com/87013822/218974886-54d32fac-85f5-4b25-b15d-405ae7ad0ab0.png">

</div>
</details>


### ⏰ 타이머

<details>
<summary> 뽀모도로 기법에 맞춰 25분 타이머 5분 휴식 사이클을 4번 "연속으로" 반복하면 15분의 긴휴식이 나오도록 설계되었습니다. 
25분의 집중을 완료한 유저는 보상으로 당근을 획득합니다!</summary>
<div markdown="1">

</br>
📌 집중타이머는 시작하고 멈출 수 있습니다.

![타이머는 시작하고 멈출 수 있다](https://user-images.githubusercontent.com/110963294/217167518-0a2a7fee-54b0-46ee-8a25-1ee3eb9e45fc.gif)

📌 집중을 시작하고 25분이 지나면 당근을 수확합니다.


![타이머는 시작하고 멈출 수 있다](https://user-images.githubusercontent.com/110963294/217167643-8ccf12e4-f034-4a3d-afc4-f8d84f378bdd.gif)

</div>
</details>



### 📅 캘린더

<details>
<summary> 유저가 뿌듯함을 느껴 계속해서 집중할 수 있도록
당근을 얻을 수록 개별 날짜의 색깔을 단계별로  나누었습니다.</summary>
<div markdown="1">

</br>
![217168588-959e6d89-594e-4e91-8e52-492de03f84ed](https://user-images.githubusercontent.com/110963294/217225666-09da2fc2-e1d4-4db7-9128-1b9dbdcbf76f.png)

</div>
</details>


### 📕 플래너

<details>
<summary> 플래너는 계획을 기록할 수 있고 오늘 집중을 언제했는지 확인 할 수 있습니다.</summary>
<div markdown="1">

</br>

📌 당근을 수확한 경우 집중한 기록으로 플래너에 자동으로 추가됩니다.

![217169210-9d98fc3a-de8c-400b-a1e](https://user-images.githubusercontent.com/110963294/217224216-5b9436e0-c772-4cc7-9e4b-9c93f9408c9c.gif)

📌 사생활 보호를 위해 플래너 비공개 설정 시 다른 유저는 볼 수 없습니다.

![217169340-009f6744-b3e2-4ae8-a24](https://user-images.githubusercontent.com/110963294/217224511-40a3cbbb-b7dc-4e1a-a0c2-06f1193ffe08.png)

</div>
</details>



### 👩‍👩‍👦 그룹

<details>
<summary> 그룹을 통해 같이 집중하여 동기부여를 느낄 수 있습니다.</summary>
<div markdown="1">

</br>

📌 그룹원의 랭킹을 확인 할 수 있습니다. 이번 달에 당근을 많이 얻을 수록 랭킹이 높아집니다.

![217169766-a9d30296-1878-4848-b5f](https://user-images.githubusercontent.com/110963294/217224721-889de740-b782-4620-81a0-2e305bd427b5.png)

📌 초대하고 싶은 유저를 리스트에 담아 초대합니다.

![그룹원을 초대할 수 있다](https://user-images.githubusercontent.com/110963294/217170045-8438f362-1326-4e29-93a7-de8bd1c1ed88.gif)

 📌 유저의 편의성을 위해 그룹원 초대 시 실시간 알림을 구현했습니다.

![그룹 초대 승락](https://user-images.githubusercontent.com/110963294/217169902-62012f33-c600-46bf-b6d3-8822a55cb308.gif)

</div>
</details>

### 🔎 회원 검색

<details>
<summary> 회원을 검색 할 수 있으며, 검색된 회원의 캘린더와 플래너를 볼 수 있습니다. </summary>
<div markdown="1">

</br>
<img width="361" alt="image" src="https://user-images.githubusercontent.com/87013822/218978188-8518cdb6-e09b-4ab7-9391-bba0684508d4.png">

</div>
</details>


<hr>

## 🕹️ 트러블 슈팅

<details>
<summary> 🪲 SSE 구독중 연결이 끊기는 문제 </summary>
<div markdown="1">

### 🔴 에러 발생

**SSE 구독중 연결이 끊겨 실시간 알림 기능이 작동되지 않는 문제가 발생함.**  

`INCOMPLETE_CHUNKED_ENCODING` **에러를 확인**. **로컬환경에선 잘 작동하다 서버에 배포 시 에러가 터짐.**

![image](https://user-images.githubusercontent.com/87013822/218991439-646b606e-5150-420d-b3de-cf8349a4e089.png)

### 🟡원인

**Nginx**는 기본적으로 Upstream 요청시에 HTTP/1.0버전을 사용함. 

HTTP/1.1은 지속연결이 기본이기 때문에 헤더를 따로 설정해줄 필요가 없지만, 

Nginx에서 백엔드 WAS로 요청을 보낼때에는 HTTP/1.0을 사용하고 `Connection: close` 헤더를 사용하게 됨.

`Connection: close`형태로 요청을 하더라도 HTTP 1.1에서는 본문내용을 chunked encoding형식으로 표시함으로 인해 생기는 오류임을 확인.

### 🟢해결

**Nginx를 다음과 같이 설정.** 

- `proxy_http_version 1.1;`
- `proxy_set_header Upgrade $http_upgrade;`
- `proxy_set_header Connection '';`
- `proxy_buffering off;`
- `proxy_cache off;`
- `chunked_transfer_encoding off;`
 ![image (1)](https://user-images.githubusercontent.com/87013822/218991833-e931fb68-664a-4252-8c61-395a97f85ec5.png)


**Controller에서 HTTP 헤더 값 조작**

nginx 서버 설정을 해도 연결유지가 안된다면, SSE를 사용하여 구독하는 Controller에 아래 코드를 추가하여 HTTP 헤더의 값을 조작.

**여기서 `response`는 `HttpServletResponse`를 매개변수로 받음,**

- `response.setHeader("Connection", "keep-alive");`
- `response.setHeader("Cache-Control", "no-cache");`
- `response.setHeader("X-Accel-Buffering", "no");`
 ![image (2)](https://user-images.githubusercontent.com/87013822/218992122-47210944-a099-4f7d-b1fd-b8ce60038ce4.png)



</div>
</details>

<details>
<summary> 🪲 SSE 구독이 되었는데도 계속해서 구독을 시도하는 현상 </summary>
<div markdown="1">

### 🔴 에러 발생

       SSE 구독이 되었는데도 페이지가 이동할 때 **계속해서 구독을 시도하는 문제**가 발생함.

### 🟡원인

      페이지가 이동할 때마다 메인메뉴가 렌더링되어, **메인메뉴에 담긴 SSE 코드가 계속해서 반복적으로 실행**되기 때문임.

### 🟢해결

      기존엔 **sse 연결 여부를 확인하지 않고** 메뉴가 렌더링 될 때마다 구독을 시도했지만,

      sse 연결 여부를 로컬스토리지로 관리하고, **sse 연결이 끊어졌을 때만 구독을 시도하도록** 코드를 변경하여

      **불필요한 리소스를 줄이고 SSE 연결의 안정성을 높임.**
      
sse를 구독 할 때, ‘sse’의 값이 ‘connect’가 아닐 경우 구독을 시도함.

 <img width="447" alt="Untitled (6)" src="https://user-images.githubusercontent.com/87013822/218993794-709c6d49-3979-445d-9679-d0843ff53e08.png">

sse가 연결될 때, 메세지를 받으면 로컬스토리지의 ‘sse’ 값을 ‘connect’로 변경함.

 <img width="334" alt="Untitled (7)" src="https://user-images.githubusercontent.com/87013822/218993842-295d13b5-0c6e-42c8-b199-3cfe49a1fdc6.png">

sse 메세지에 “EventStream Created”(더미데이터) 가 포함되어 있지 않으면 읽음 상태를 false로 변경함.

 <img width="388" alt="Untitled (8)" src="https://user-images.githubusercontent.com/87013822/218993859-cc650db4-fa08-45c0-9bab-eab389961f1c.png">

sse 에러가 생기면 ‘sse’ 값을 null로 변경함.

 <img width="379" alt="Untitled (9)" src="https://user-images.githubusercontent.com/87013822/218993880-c73c6b02-e58b-4fb5-800f-4879f064df9d.png">


</div>
</details>

<details>
<summary> 🪲 웹 페이지 성능 최적화 하기 </summary>
<div markdown="1">

### 🔴 **에러 발생**

      **lighthouse를 이용한 성능 측정 결과 성능 및 접근성의 점수가 낮아 해당 사항들을 정리하고, 개선하기로 결정** 

- **개선 전** **lighthouse 실행 이미지**
    
<img width="1000" alt="image (3)" src="https://user-images.githubusercontent.com/87013822/218992664-8462f553-fc4b-4a1c-a5bf-0dba38ed4f84.png">

    

### 🟡 원인

       **성능**: 사용하지 않는 JS, 압축률이 낮은 이미지 등이 로딩을 지연시킴, 

       **접근성**: 버튼과 링크에 접근가능한 이름이 없음, 용도에 맞지 않는 html 태그 사용, html 태그에 맞는 적절한 속성을 부여하지 않음 등

### 🟢 해결

       **성능 향상**: 초기 렌더링에 사용되지 않는 컴포넌트를 추후에 사용될 때에 동적으로 불러올 수 있는 REACT.lazy 메서드를 이용하여 개선, 

                           애니메이션, 반응형등의 구현시 JS로 DOM에 접근하는 대신 CSS를 최대한 이용.

       **접근성 향상**: 이미지에 캡션을 적용, 확대 축소 허용, 버튼과 링크에 이름을 부여, 의미에 맞는 적절한 태그 사용

       **개선 후 성능 데스크탑 기준 150%, 모바일 300% 향상, 웹접근성 100점으로 향상**

- **개선 후 lighthouse 실행 이미지**

<img width="1000" alt="image (4)" src="https://user-images.githubusercontent.com/87013822/218992759-e3684ff7-64ce-4cc2-a066-f87d096d185d.png">


</div>
</details>

<details>
<summary> 🪲 router를 이용한 접근 제한 구현  </summary>
<div markdown="1">

로그인 여부에 따라서 router를 다르게 설정해 주는 과정에서 로컬스토리지안의 토큰의 존재 유무를 감지해서 라우팅을 다르게 해주려고 함  

<img width="468" alt="Untitled (3)" src="https://user-images.githubusercontent.com/87013822/218993005-d45247ac-4387-4bcf-a08e-49061d71887e.png">


이 과정에서 로컬 스토리지의 변경 이벤트는 같은 탭에서는리스닝 할수 없다는 것을 알게됨 (리엑트는 SPA 이기 때문에  이에 해당됨)

<img width="756" alt="Untitled (4)" src="https://user-images.githubusercontent.com/87013822/218993041-b72a3333-cb20-48ee-9842-b54eb42d39db.png">

임시 방편으로 로컬 스토리지에 토큰의 존재 변화가 일어나는 곳에서 이벤트를 발생시켜 줌.

<img width="470" alt="Untitled (5)" src="https://user-images.githubusercontent.com/87013822/218993166-def16761-d529-4473-b1e9-19fe81dd7efe.png">


로컬 스토리지는 앱의 상태를 관리하기 위한 API가 아니라, 앱 상태를 캐시하고 탭 간의 정보 교환을 위한 API라는 것을 알게됨 ( 로컬스토리지의 변경 이벤트를 같은 탭에서 리스닝 할 수 없는 이유) 

추후에 토큰을 쿠키에 저장하고, 각각의 루트 컴포넌트 안에 로그인을 검증하는 모듈을 삽입하여 접근제한을 구현하고자 함

</div>
</details>

<details>
<summary> 🪲 책임분리 </summary>
<div markdown="1">

타이머 구현 트러블 슈팅 추가 

</div>
</details>

<details>
<summary> 🪲 AccessToken 다중요청 </summary>
<div markdown="1">

다중요청 관련 트러블 슈팅 추가

</div>
</details>

<hr>

## 🔧 유저 피드백
### 당근 플래너 만족도 평점 8.7점 (10점 만점)
### 66개의 피드백 중 32개 반영 (약 48%, 2.5(일) 기준)

> **당근플래너**는 **2월 1일 배포를 시작**으로 설문조사를 통해 많은 피드백이 들어왔습니다.
유저피드백을 바탕으로 수정 및 개선 작업을 아래와 같이 진행하였습니다.
>

### 🧑‍🔧 버그 수정 사항 

<details>
<summary> 다른 날짜에 계획 추가 시 오늘 날짜에 반영되는 문제 해결 </summary>
<div markdown="1">
</br>

![계획 추가](https://user-images.githubusercontent.com/87013822/219585871-d2d727c6-34ca-4f0b-a14a-3c8cb9cb79af.gif)

</div>
</details>

<details>
<summary> 이모티콘 깨지는 문제 해결 </summary>
<div markdown="1">
</br>

<img width="404" alt="Untitled (10)" src="https://user-images.githubusercontent.com/87013822/219585913-75a0803f-48a4-493e-b778-d9535aeb1825.png">


</div>
</details>

<details>
<summary> 그룹 상세 페이지에서 숫자를 길게 쓸 경우 숫자가 페이지를 벗어나는 문제 해결 </summary>
<div markdown="1">
</br>

![숫자](https://user-images.githubusercontent.com/87013822/219585957-1ee51182-544f-450a-aabc-ac4047069e95.png)

</div>
</details>

<details>
<summary> 에러페이지에서 뒤로가기 버튼이 안눌림 해결 </summary>
<div markdown="1">
</br>

![에러페이지 뒤로가기](https://user-images.githubusercontent.com/87013822/219586008-30fe3fd6-9e0e-440e-b9be-04d917282af6.gif)


</div>
</details>

### 🙋‍♂️UI/UX 개선사항

<details>
<summary> 브라우저로 접속 시 화면 위치를 조금 왼쪽으로 변경 </summary>
<div markdown="1">

화면이 오른쪽으로 치우쳐져 있다는 피드백을 받아 화면 위치를 조정하였습니다.
</br>

![실행화면을 오른쪽으로 변경](https://user-images.githubusercontent.com/87013822/219586247-5381127f-a419-4358-ba82-d26dff39048e.png)


</div>
</details>

<details>
<summary> 프로필 사진 변경 부분 마우스 커서 포인터 추가 </summary>
<div markdown="1">

사진 변경 시 포인터가 없어 오해를 불러일으킨다는 피드백을 받아 포인터를 추가하였습니다.
</br>

![프로필 이미지 포인터](https://user-images.githubusercontent.com/87013822/219586425-880452bc-45b2-4974-8054-339c7e11fd5c.gif)


</div>
</details>

<details>
<summary> 집중 타이머를 그만둘 경우 한번 더 확인 </summary>
<div markdown="1">

그만두기를 누를 경우 바로 타이머가 초기화되어 불편하다는 피드백을 받아 한번 더 확인하는 메세지를 추가하였습니다.
</br>

![그만두기](https://user-images.githubusercontent.com/87013822/219586586-c5ef6e84-9ae1-4140-9cf7-be8928c3fb4e.gif)



</div>
</details>

<details>
<summary> 메뉴 UI/UX 개선 </summary>
<div markdown="1">

**저가 아이콘들이 어떤 역할을 하는지 알아보기 힘들다는 피드백을 받아 아이콘을 수정하였습니다.** 

- 프로필 이미지에 설정 아이콘을 추가하여 클릭 시 **마이페이지**로 이동 가능한 걸 알려줌.
- 유저 검색 아이콘 변경
</br>

![메뉴](https://user-images.githubusercontent.com/87013822/219586716-a600e6e9-0b46-42af-8a87-bc466a0e7868.png)


</div>
</details>

<details>
<summary> 계획 추가 시 아이콘 대신 계획 추가 버튼으로 직관성있게 변경 </summary>
<div markdown="1">
</br>

![계획 추가 바뀐 이미지](https://user-images.githubusercontent.com/87013822/219586803-5601d69f-960b-475b-9ce8-2ee9d08655bf.jpg)


</div>
</details>

<details>
<summary> 캘린더 페이지에 뒤로가기 버튼 추가  </summary>
<div markdown="1">
</br>

![캘린더 뒤로가기](https://user-images.githubusercontent.com/87013822/219586869-804c24b8-df23-43bb-8a84-63387bd4cdcb.gif)

</div>
</details>


<hr>


## 👥 팀원 소개

![팀원소개이미지](https://user-images.githubusercontent.com/110963294/217158202-5df9b5ce-10c4-4297-adf2-4886f12692b0.jpg)

UI/UX
- 이예랑

FE
- 장다혜 [DahyeJang](https://github.com/DahyeJang)
- 서강산 [Noa](https://github.com/dkaodkaork)

BE
- 서재석 [JaeSuk](https://github.com/suhjaesuk)
- 정성원 [sungwon](https://github.com/SungwonJeong)
- 정진 [JeongO](https://github.com/JeongO41)


