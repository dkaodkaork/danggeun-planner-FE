
#  ![profile_pic](https://user-images.githubusercontent.com/110963294/217171052-b6d171f4-2d52-416e-9c14-9adb0e4c597b.png) 당근플래너

![600x340](https://user-images.githubusercontent.com/110963294/217157702-6b17cf6f-40f2-4611-9da9-d5e11eadca2d.png)

## 🗂️ 목차

### 1. [프로젝트 소개](#-프로젝트-소개)
### 2. [기술스택](#-기술스택)
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

## 🛠️ 기술스택

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

ㅇㅇ

<hr>

## 🔧 유저 피드백



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


