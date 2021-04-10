# Project-HOGUMA

## 1. 프로젝트 소개

**1. 사용하려는 데이터(제안된 데이터 중 하나 또는 선택한 다른 데이터 세트)를 명시, 이에 대한 설명**
+ 드라마 ‘거침없이 하이킥’ 대본 (1화~167화(최종화))
+ 누락데이터(공식 대본을 찾을 수 없음) : 총 5개 (87화, 88화, 98화, 107화, 137화) 

**2. 기술 스택 (python, d3, panda, jupyter, javascript, MySql 등)**
+ 프론트 : javascript, css, react, react-router, react-redux, axios 
+ 백엔드 : Python, Flask, Mysql, Gunicorn 
+ 데이터분석 : Python, panda, jupyter, colab

**3. 사용된 라이브러리**
+ flask-restful, flask-sqlalchemy, numpy, pandas, matplotlib

**4. 웹서비스에 대한 자세한 개요**

+ 서비스 소개 : 2007년, 국민 시트콤 "거침없이 하이킥" 대본 기반, 등장인물들 사이의 인사이트 정보제공 및 가이드 서비스 
+ 추억의 뽑기게임 : 분석자료 결과를 일반적으로 보여주는 것이 아닌, 추억을 뽑는다는 게임적인 요소를 가미해 사용자가 뽑기 버튼을 누르면 간단한 퀴즈와 함께 DB에 있는 분석자료 결과를 랜덤으로 화면에 표시
+ 나와 닮은 캐릭터 : 사용자가 설문조사( 이지선다형 / 단어선택 )로 데이터를 제공해주면, input 한 데이터와 가장 유사한 극중 인물과 그 인물에 대한 데이터 분석값을 화면에 표시 
+ 인물 관계 : 대본 분석으로 인물간의 관계성을 화살표 굵기&방향으로 표현. 상세정보가 궁금한 인물의 사진을 클릭하면, 해당 인물에 대한 데이터 분석값을 화면에 표시
+ 하이킥 덕후 테스트 : 타겟층의 사이트이용 흥미도를 높이기 위해, 하이킥과 관련된 질문 총 10개를 모의고사형식으로 제공


## 2. 프로젝트 목표

아무도 알려고 하지 않지만 막상 알려준다고 하면 재밌게 볼만한 정보들을 제공하므로, 기존 ‘거침없이 하이킥’을 잘 안다고 생각했던 골수팬들에게도 새로운 인사이트를 제공하고, 유입되는 새로운 팬들에게는 색다른 흥미요소를 줄 수 있을 것으로 예상

- 세부사항 :
   - 평소 궁금하거나 알기 힘든 하이킥의 면면을 수치화된 자료로 확인가능
   - 시각화를 통해 하이킥 내 등장인물의 특성과 인물 간 관계를 한 눈에 파악
   - 내 성격과 매칭되는 캐릭터를 알아보고 공감할 수 있는 재미 제공 
   - 각 캐릭터별 구체적 특성 파악 가능 (각 캐릭터의 팬에게 어필)

**1. 프로젝트 아이디어 동기**

- 다양한 장르의 대본 중 우리가 실제로 사용하고 익숙한 일상적인 말들을 분석해 볼 수 있는 서비스 필요성에 대한 논의를 시작으로 목표와 부합하는 최상의 콘텐츠는 영화가 아닌 국내 시트콤 "거침없이 하이킥"이라는 결론에 도달함. 이 시트콤은 일상 가족들 사이에서 전개되는 콘텐츠로 다른 장르의 대본보다 서비스의 목표를 뚜렷하게 보여줄 수 있을 것으로 판단함.

**2. 문제를 해결하기 위한 특정 질문 명시**

- 프로젝트 메인부분인 감정분석 해결을 위한 방법 및 방향 ?

**감정분석해결을_위한_방법_및_방향**

![1](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRIGkp%2Fbtq2gX2rTXH%2Fw0lOJHoTQy7ZtFKcGaJRH0%2Fimg.jpg)
![highkick_connection_analysis](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbMomPp%2Fbtq2h2hEJfV%2FofEY323sMjgHk46TkNfzSk%2Fimg.jpg)


**3. 데이터를 통해 탐색하려는 문제를 구체적으로 작성**

+ 등장인물 별, 최다 빈도 단어 수
+ 등장인물들 간의 인물 관계도
+ 등장인물 별, 언어 성향 측정
+ 등장인물 회차별, 대사 비중도 측정
+ 각 등장인물 별 시그니쳐 행동 횟수 수치 분석

**4. 웹서비스에 대한 자세한 개요**

+ 서비스 소개 : 웹사이트 이용에 흥미를 줄 수 있는 내용 표시 
+ 추억의 뽑기게임 : 분석자료 결과를 일반적으로 보여주는 것이 아닌, 추억을 뽑는다는 게임적인 요소를 가미해 사용자가 뽑기 버튼을 누르면 간단한 퀴즈와 함께 DB에 있는 분석자료 결과를 랜덤으로 화면에 표시
+ 나와 닮은 캐릭터 : 사용자가 설문조사( 이지선다형 / 단어선택 )로 데이터를 제공해주면, input 한 데이터와 가장 유사한 극중 인물과 그 인물에 대한 데이터 분석값을 화면에 표시 
+ 인물 관계 : 대본 분석으로 인물간의 관계성을 화살표 굵기&방향으로 표현. 상세정보가 궁금한 인물의 사진을 클릭하면, 해당 인물에 대한 데이터 분석값을 화면에 표시
+ 하이킥 덕후 테스트 : 타겟층의 사이트이용 흥미도를 높이기 위해, 하이킥과 관련된 질문 총 10개를 모의고사형식으로 제공


## 3. 프로젝트 기능 설명

**1. 주요 기능 (주된 활용성) 및 서브 기능**
+ 대본 데이터 기반, 인물별 연관도 제공
+ 등장인물 별, 최대 빈도 수 단어들 분석 데이터 및 제공
+ 회차별, 인물의 대사 비중도(중요도) 분석 및 제공
+ 특정 인물의 시그니쳐 행위 or 말 분석 및 제공
+ 사전 테스트 기반, 등장인물간의 비슷한 성향 분석 매칭
+ 대표적인 하이킥 대본 기반, 사용자 하이킥 중독성 측정결과 제공

**2. 프로젝트만의 차별점, 기대 효과**
+ 콘텐츠에 대한 단순한 분석 보고서가 아닌 분석기반 데이터와 사용자 input값과 매칭된 내용제공 및 공유가능
+ 드라마 방영시기인 2007년 테마와 맞추어 뽑기머신(가챠)을 연상시킨 놀이형태의 흥미 제공
+ 비슷한 세대 임에도 불구하고, 하이킥의 재미요소를 모르는 사람들을 위해 서비스를 한번 둘러보는 것만으로도, "하이킥 콘텐츠를 보러가고 싶다!" 라는 향수를 불러일으킬 것으로 예상

## 4. 프로젝트 구성도
+ 스토리보드    
[hoguma_스토리보드_ver2.4.pdf](uploads/fcea5326997b976875e5f3a7aab5e668/hoguma_스토리보드_ver2.4.pdf)
+ 와이프레임   
https://www.figma.com/file/vCEKQsMqQHvSZV35DZzyuo/ver1?node-id=11%3A0
  

## 5. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 위영민 | 리더/프론트엔드 개발 |
| 윤맑은이슬 | 프론트엔드 개발 |
| 김기범 | 백엔드 개발/데이터 분석 |
| 양혜진 | 백엔드 개발/데이터 분석 |
| 차시현 | 기획/데이터 분석 |

## 6. 버전
  
- Ver1.0 : [링크이동](http://elice-kdt-ai-track-vm-da-02.koreacentral.cloudapp.azure.com/)   

## 7. FAQ
  - 자주 받는 질문 정리
