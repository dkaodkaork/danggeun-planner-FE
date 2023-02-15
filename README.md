
#  ![profile_pic](https://user-images.githubusercontent.com/110963294/217171052-b6d171f4-2d52-416e-9c14-9adb0e4c597b.png) 당근플래너

![600x340](https://user-images.githubusercontent.com/110963294/217157702-6b17cf6f-40f2-4611-9da9-d5e11eadca2d.png)

## 🗂️ 목차
### 1. [프로젝트 소개](#-프로젝트-소개)
### 2. [기술스택 및 툴](#-기술스택-및-툴)
### 3. [프로젝트 아키택처](#-프로젝트-아키택처)
### 4. [핵심 기능](#-핵심-기능)
### 5. [트러블 슈팅](#-트러블-슈팅)
### 6. [유저 피드백](#-유저-피드백)

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

## 🛠️ 기술스택 및 툴

- FE 

<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-0067A3.svg?&style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Redux-8B00FF.svg?&style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4.svg?&style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled components&logoColor=white"> <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=for-the-badge&logo=ReduxToolkit&logoColor=white"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">


- BE

![Java](https://img.shields.io/badge/Java-007396.svg?&style=for-the-badge&logo=Java&logoColor=white) ![Spring](https://img.shields.io/badge/Spring-6DB33F.svg?&style=for-the-badge&logo=Spring&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white) ![SpringBoot](https://img.shields.io/badge/Spring_Boot-6DB33F.svg?&style=for-the-badge&logo=SpringBoot&logoColor=white) <img src="https://img.shields.io/badge/Spring Security-6DB33F.svg?&style=for-the-badge&logo=Spring Security&logoColor=white"> <img src="https://img.shields.io/badge/JWT-000000.svg?&style=for-the-badge&logo=JSON Web Tokens&logoColor=white"> <img src="https://img.shields.io/badge/Gradle-02303A.svg?&style=for-the-badge&logo=Gradle&logoColor=white"> <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"> <img src="https://img.shields.io/badge/Amazon EC2-yellow?style=for-the-badge&logo=AmazonEC2&logoColor=white"> <img src="https://img.shields.io/badge/Amazon S3-yellow?style=for-the-badge&logo=AmazonS3&logoColor=white"> <img src="https://img.shields.io/badge/Github Actions-2088FF?style=for-the-badge&logo=Github Actions&logoColor=white"> <img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=for-the-badge&logo=Amazon RDS&logoColor=white">

- Tool

<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">

<hr>

## 🏗️ 프로젝트 아키텍쳐

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


## 🎯주요 기능

- 회원가입, 로그인
- 뽀모도로 타이머
- Daily 플래너 - 집중 시간과 계획 관리
- Monthly 캘린더 - 집중 현황 파악
- 그룹 - 그룹 멤버들 실시간 상태 확인 가능
- 회원 검색

<br />
<br />

![소개화면6장](https://user-images.githubusercontent.com/110980231/213668486-7151d1d6-8817-4414-83ca-1673a881d195.png)

<br />
<br />

## 🪄서비스 구조

<img width="937" alt="서비스구조" src="https://user-images.githubusercontent.com/110980231/213668704-4067988c-81e1-49f8-a38b-8cb9297d5343.png">


<br />
<br />


## 🏗️아키텍쳐

![당근플래너아키텍처-페이지-1 drawio](https://user-images.githubusercontent.com/110980231/213653472-ffceb83e-4cbc-4e29-b091-448587ca1eec.png)
![당근플래너아키텍처](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c8e18ad-ad18-419e-a913-e5156fd850af/Untitled.png)

<br />
<br />

## 👥멤버

FE
- 장다혜 [DahyeJang](https://github.com/DahyeJang)
- 서강산 [Noa](https://github.com/dkaodkaork)

BE
- 서재석 [JaeSuk](https://github.com/suhjaesuk)
- 정성원 [sungwon](https://github.com/SungwonJeong)
- 정진 [JeongO](https://github.com/JeongO41)


