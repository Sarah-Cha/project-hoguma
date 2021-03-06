**`타이틀`**

1. 프로젝트 주제
   + 드라마 '거침없이 하이킥' 대본분석을 기반으로 '아무도 몰랐던 하이킥 정보'와 '자신의 성향과 비슷한 극중 인물'을 찾아주는 서비스
2. 타겟층 
   + ‘거침없이 하이킥’ 마니아와 골수팬들
   + 실제 ‘ 거침없이 하이킥 ’ 신드롬을 함께하고 본방사수를 했던 80-90 년대생
3. 팀 구성원의 전체 이름과 역할

| 이름 | 담당 업무 |
| ------ | ------ |
| 위영민 | 리더/프론트엔드 개발 |
| 윤맑은이슬 | 프론트엔드 개발 |
| 김기범 | 백엔드 개발/데이터 분석 |
| 양혜진 | 백엔드 개발/데이터 분석 |
| 차시현 | 기획/데이터 분석 |

**`데이터세트`**

1. 기본데이터
   + 드라마 ‘거침없이 하이킥’ 대본 (1화~167화(최종화)) 
   + 누락데이터(공식 대본을 찾을 수 없음): 총 5개 (87화, 88화, 98화, 107화, 137화)

2. 출처(링크)
   + https://blog.daum.net/kehstudent/13620233

3. 데이터 선택이유 
   + 등장인물 간 성격과 개성이 뚜렷함
   + 영화와 달리 , 시트콤은 대본 데이터 분량이 많음

4. 예상되는 어려움 
   + 대사에서 사용한 단어를 정제해 감정언어를 추출하는 과정

**`기획 방법`**

1. 문제 정의
   + 2006 년 첫 방영한 ‘ 거침없이 하이킥 ’ 은 2021 년에도 최고의 시트콤으로 평가되며 , 어느 드라마보 다 팬층이 두터움 . 하지만 팬들이 즐길 수 있는 놀이터 즉 , 콘텐츠를 활용한 즐길거리는 극히 드뭄

2. 가설 설정 방법
   + 여전히 ‘ 밈 ’ 으로 가득한 ‘ 거침없이 하이킥 ’ 에 대한 심층분석으로 , 지금까지 몰랐던 새로운 정보를 제공하여 타겟층의 트래픽을 유도.

3. 엘리스에서 배운 데이터분석 개념, 알고리즘 및 라이브러리 응용 방법
   + 감정사전 직접 제작
   + 형태소분석
   + 불용어 제거
   + 토큰화

4. 데이터 분석 종류 (시각화, 통계 대시보드)

1) 인물별 필요 데이터 목록화
   + 인물별 대사추출
   + 전체 시리즈 내 데이터 대사/행동 빈도수 카운트
2) 캐릭터 간 관계를 수치화
   + 캐릭터 - 캐릭터 간 함께 등장한 횟수 카운팅
   + 카운팅 결과를 캐릭터 간 관계를 나타내는 수치로 사용 - 관계 수치가 높을수록 연결선 색을 다르게 표시
3) 캐릭터별대사를 분석의 3개의 대표 감정 추출
   + 주요 캐릭터의 전체 대사 추출 > 형태소 분석 > 불용어 제거 > 빈도 수 기준으로 리스팅>'기쁨', ‘슬픔', '분노'의 감정사전 제작
   + 캐릭터별 대사 추출 > 형태소 분석 > 불용어 제거 > 토큰화된 대사 데이터셋 확보> 감정 사전의 단어와 일치할 경우 count += 1 > 감정 수치 도출
4) 캐릭터별 상세 페이지
   + 대표단어 : 워드클라우드
   + 감정언어분석 수치 (행복, 슬픔, 분노) - 대사 분향 변화 그래프

**`서비스 설명`**

1. 웹 서비스의 최종적인 기능과 형식

   1) 서비스 소개
      - 웹사이트 이용에 흥미를 줄 수 있는 내용 표시
   2) 추억의 뽑기게임
      - 분석자료 결과를 일반적으로 보여주는 것이 아닌 , 추억을 뽑는다는 게임적인 요소를 가미해 사용자가 뽑기 버튼을 누르면 DB 에 있는 분석자료 결과를 콘텐츠와 함께 랜덤으로 화면에 표시
   3) 나와 닮은 캐릭터
      - 사용자가 설문조사 ( 삼지선다형 / 다중선택 ) 로 데이터를 제공해주면 , input 한 데이터와 가 장유사한 극중 인물과 그 인물에 대한 데이터 분석값을 화면에 표시
   4) 인물 관계
      - 대본 분석으로 인물간의 관계성을 화살표 방향과 색으로 표현. 상세정보가 궁금한 인물의 사진 을 클릭하면,해당 인물에 대한 데이터 분석값을 화면에 표시
   5) 하이킥 고사
      - 타겟층의 사이트이용 흥미도를 높이기 위해, 하이킥과 관련된 질문 총 10개를 모의고사형식으로 제공

2. 웹 서비스의 사용자가 데이터 분석 시각화 자료를 통해 얻는 인사이트

   + 아무도 알려고 하지 않지만 막상 알려준다고 하면 재밌게 볼만한 정보들을 제공하므로, 기존 ‘거 침없이 하이킥’을 잘 안다고 생각했던 골수팬들에게도 새로운 인사이트를 제공하고, 유입되는 새 로운 팬들에게는 색다른 흥미요소를 줄 수 있을 것으로 예상
   + 세부사항 :
      - 평소 궁금하거나 알기 힘든 하이킥의 면면을 수치화된 자료로 확인가능 
      - 시각화를통해하이킥내등장인물의특성과인물간관계를한눈에파악 
      - 내성격과매칭되는캐릭터를알아보고공감할수있는재미제공
      - 각캐릭터별구체적특성파악가능(각캐릭터의팬에게어필)


**`스토리보드 & 시나리오`**

[hoguma_스토리보드__ver2.7.pdf](docs/hoguma___ver2.7.pdf)
