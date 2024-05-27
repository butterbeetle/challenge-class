# 2024.05.27 챌린지반 수업

```javascript
//  부모 컴포넌트는 자식 컴포넌트에게데이터를 전달할 수 있다.(props 형태로)
//  -> 따라서 Wrapper는 div의 부모가 아니다.

// 부모 컴포넌트가 리렌더링되면, 자식 컴포넌트도 리렌더링 된다.

// 부모 컴포넌트(App)
const App = () => {
  return (
    <Warpper>
      // 상위 컴포넌트(Wrapper)
      <div></div>
    </Warpper>
  );
};
```

# 전역상태관리

1. Props Drilling

Props Drilling 너무 힘들어

2. 전역 상태 관리 라이브러리 - ex) Redux

- recoil, zustand : redux 너무 복잡해
- react query : 서버와의 데이터 통신을 보다 편리하게 하기 위해서

리액트 개발자들 자존심 상해

3.  Context API

## redux

#### 특징

1.  flux 아키텍처 - 단방향 데이터 흐름
2.  복잡함, 엄격함 Predictable and maintainable

#### redux에서 가장 중요한 두 가지

1.  store:저장소
2.  reducer:공장

#### redux는 데이터를 저장하고, 저장한 데이터를 불러다 보여주고, 저장한 데이터를 업데이트하는 라이브러리

- 저장소 + CRUD

#### CRUD 구조분해

- R : 너무 쉽다. useSelector
- CUD : 복잡하다. reducer를 통해 구현

#### 공장을 활용한 예시

- 리덕스는 공장이 있다.
- 저장소에 담겨있는 값을 Mutate(변형) 하는 일을 한다.
- 이 공장은 특징이 있다.
- 까다롭다.
- 그 이유는? 작업명세서가 없으면 작업을 안해주기 때문에, 꼭 작업명세서 필요
- 이 작업명세서는 어떠한 정보를 포함하고있나
  - 작업의 종류(type) - 필수 정보
  - 작업에 필요한 정보(payload) - 선택 정보
- 이 작업명세서는 누가 작성? 컴포넌트(작업 진행이 필요한 녀석)
- 컴포넌트가 작업명세서를 작성했다. 공장에 작업명세서를 전달해 주어야한다.
- 우체부에게 작업명세서를 전달한다.(dispatch)
- 공장은 우체부를 통해 작업명세서를 받고 진행한다.

- 공장에서 상태를 다루려면, 최초의 상태가 존재해야함 -> initialState의 필요성
- 작업명세서에 적히게 될 작업의 종류들은 미리 정해져 있어야 한다 -> action type들의 필요성
- 작업명세서를 매번 작성하는 것은 비효율적이고 동시에 휴먼에러의 가능성이 있다. -> action creator의 필요성

- 공장:reducer(함수)
- 작업명세서:action(객체)
  - 작업 종류:type
  - 작업 정보:payload
- 우체부 : dispatch(함수)
- 우체부 소환술 : useDispatch()
- 작업명세서 프린터 : action creator(함수)

# Redux Toolkit(RTK)

## 01.목적

1. 너무 복잡함
2. 잘 쓰려면 추가 패키지 필요
3. 간단한 걸 하기 위해서도 많은 코드를 사용해야 한다 (쓰는게 귀찮다)

# Immer.js

## 01.설치

`npm install immer`

## 02. 작동 방식 및 사용법

- current에 대한 복사본을 만들어 불변성 고민없이 수정본을 만들 수 있고 Immer가 알아서 새로운 객체로 돌려줌

`produce`라는 api 이거 하나만 기억하자.

```javascript
// draft 는 관습적으로 레시피라 불림
const nextState = produce(current(수정본 만들고 싶은 원본), draft(마음껏 수정해도 되는 수정본) => {
  draft[1].done = true
  draft.push({title:"Tweet about it"})
  })
```

redux toolkit은 이미 기본적으로 적용되어있음
zustand와 react query는 적용되어 있지 않아서
따로 설치한 후 스스로 써야함.
