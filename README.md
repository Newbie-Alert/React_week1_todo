## 11.01 
- 디렉토리명 변경
- 관심사에 따른 컴포넌트 분리
- 삭제 기능 작동 시 확인 모달 추가

### 문제
- TodoList를 공통 컴포넌트로 만드는 것




### 투두리스트 요구사항

- layOut을 1280px x 800px 사이즈로 하고 가운데 정렬하여 배치. `(완료)`
- todo 데이터의 isDone 값에 따라 버튼 요소의 innerText가 '완료' 또는 '취소'가 되게 적용. `(완료)`
- input에 값을 입력하고 submit 발생 시 input 비워주기 완료. `(완료)`
- 완료되지 않은 항목은 리스트의 상단, 완료 된 항목은 리스트의 하단으로 배치. `(완료)`
- CSS Module을 사용하여 각각의 컴포넌트 스타일을 관리 `(완료)`

<br>

### 과제 질문에 대한 답

1. **JSX 문법**이란 무엇일까요?

   - Javascript를 확장한 문법입니다.  
     Javascript 안에서 html 태그를 사용할 수 있습니다.  
     리액트의 요소를 그리는 문법입니다.

2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은  
   **애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요**?

   - `useState 훅`으로 상태를 관리하였습니다.

3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?

   - 최상위 컴포넌트인 App.js에서 Todo 데이터를 전역 state로 만들고  
     하위 컴포넌트에 `props 전달 방식`으로 공유하였습니다.

4. 기능 구현을 위해 **불변성 유지**가 필요한 부분이 있었다면 하나만 설명해 주세요.

   - **Todo State를 업데이트 하는 부분**  
     할 일을 담는 Todo state는 Array를 사용했는데,  
     이 **Todo state를 업데이트 하기 위해**
     **Todo state의 복사본을 만들어  
     state 변경 함수**를 통해 변경하였습니다.

5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?**  
   그렇다면 **어떠한 이점이 있었나요?**
   - 재사용성을 위해 컴포넌트를 분리하지는 않았지만 분리는 해보았습니다.  
     컴포넌트를 분리해서 사용해봤을 때 느낀점은  
     각 컴포넌트마다 맡고 있는 기능이 뚜렷하여  
     관리와 유지/보수에 좋다는 부분이었습니다.

<br>

### 컴포넌트 분리

- Header Component
- Input Component
- Working Component  
  ↪ 자식 - Working ItemList
- Done Component  
  ↪ 자식 - Done ItemList

