# 필요한 패키지 설치 npm install
react-router-dom styled-components@5.3.11 styled-reset react-icons

# 구조
App
- TodoMain
  - TodoTemplate
    - TodoInsert
    - TodoList

* TodoTemplate
- 왼쪽
  TodoInsert
  \ addButton: TodoDetail 컴포넌트 보이도록
  \ deleteButton: TodoList 컴포넌트 \ TodoListItem 컴포넌트 Remove 보이도록

  TodoDeatail
  text input
  deadline input
  (memo)

- 오른쪽
  TodoList
    deadline
    d-day
    checkbox
    text
    remove


* 리액트 단방향성 부모가 자식에게만 데이터 줄 수 있음
오류(해결): state 끌어올리기 해서 해결해야함 state 사용되는 공통된 최상위에 선언해야함 - TodoTemplate에 todos state 선언해야함


https://react-icons.github.io/react-icons/icons?name=md

#0612
* Datepicker 라이브러리 사용
npm install react-datepicker --save

[디데이]
- (TodoInsert) startDate, endDate state 로그
Thu Jun 15 2023 18:56:56 GMT+0900 (한국 표준시)

- (TodoListItem) startDate, endDate state 로그
 undefined(오류): state 받아오질 않는 듯

#0613
* todo 전체 미완료 완료 개수
(오류) props 변경없이 페이지 이동만 했는데 완료 개수 초기화됨(재렌더링 되는 거 같음..)

* 페이지 이동 이전 상태 유지
* todos에 id, text(-> title), content, date -> start, end, checked
* 새로운 객체 checked가 true인(Done) 따로 관리 -> working 밑에 done이 오도록

#0614
0613 오류 수정
(오류) dday 계산

#0615
0614 오류 수정
(오류) endDate state 기본값 new Date()로 오늘 날짜 받아오는데 
잘 받아오다가도 가끔 getTime 오류 발생 콘솔 확인 -> endDate 날짜 받아오지 못하고 undefined이 이유
TODO 수정하기 기능

(배포) build settings
build command CI=false run build