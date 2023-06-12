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
- (TodoInsert) startDate, diffDate state 로그
Thu Jun 15 2023 18:56:56 GMT+0900 (한국 표준시)

- (TodoListItem) startDate, diffDate state 로그
TODO undefined(오류): state 받아오질 않는 듯