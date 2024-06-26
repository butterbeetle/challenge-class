# 과제 04 - 토스트 만들기

---

- 이번 과제는 토스트 만들기
- 토스트는 화면에 잠시 동안 나타나 정보를 알려주고 사라지는 UI 요소
- 구체적인 동작 방식은 아래 샘플 이미지, 영상, 웹사이트를 참고

## 샘플

---

<p align="center">
  <img width="710" alt="toast sample" src="https://github.com/butterbeetle/challenge-class/assets/50831567/dfbfac66-5b2d-47d5-b40f-b238378e0335">
</p>

https://github.com/butterbeetle/challenge-class/assets/50831567/23ff4a54-de06-4058-b3f3-e3ba8ded2d80

## 요구사항

### 기술스택

- `react`: 모든 UI는 리액트 위에서 작업되어야 합니다.
- `tailwindcss`: 스타일링은 tailwindcss로만 작업합니다.
- `clsx`: 조건부 클래스명은 clsx 라이브러리를 사용하여 구현합니다.
- `Context API`: 토스트 서비스는 Context API를 사용하여 구현합니다.

### 필수 요구 기능

- `useToast`라는 커스텀 훅을 사용하여 토스트 기능을 사용하고 싶은 컴포넌트에서 토스트를 띄울 수 있어야 합니다.
- 토스트는 동시에 여러 개가 노출 될 수 있어야 합니다.
- 토스트 내 표현되는 제목과 내용 그리고 토스트의 노출 시간을 직접 설정할 수 있어야 합니다.
- 토스트가 나타나고 사라지는 시간은 500ms로 합니다.
- 토스트의 노출 시간이 2000ms 일 경우 토스트가 사라지는 애니메이션 시간 500ms는 2000ms와 별도로 합니다. <br/>즉, 노출 시간을 2000ms 설정할 경우 실제로 화면에 토스트가 보이는 시간은 총 2500ms 입니다. <br/>(나타나는 애니메이션과 노출되는 시간 2000ms + 사라지는 애니메이션 시간 500ms)
- 노출 시간을 입력하지 않을 경우 기본 노출 시간을 2000ms 로 설정합니다.
- 이외의 모든 디테일한 부분(스타일과 기능)을 주어진 샘플 웹사이트와 동일하게 구현합니다.

### 선택 요구 기능

- 각 토스트 내에 닫기 버튼을 만들어서 닫기 버튼을 누르면 해당 토스트가 남은 노출 시간을 기다리지 않고, 그 즉시 사라지는 애니메이션이 시작되며 사라집니다.

## 반드시 지켜주세요!

1. 구현 중 어려움이 있을 경우 반드시 챌린지반 튜터(유진영 튜터, 안동훈 튜터, 하승우 튜터)들에게 찾아와 물어보며 진행합니다. 어려워서 구현하지 못하는 경우는 없어야 합니다. 어려우면 같이 고민해 줄 튜터가 항상 여러분 곁에 있습니다.
2. 스타일링은 구체적인 수치 값(넓이, 색상값, 폰트 크기 등)을 확인해야 할 때만 개발자 도구를 열어보고 이외의 경우에는 직접 결과물을 눈으로 보며 스타일링을 완성해 나가야 합니다.

리팩토링이란?

1. 기능상 변화점은 없는 것
2. 코드를 더 나은 방향으로 바꾸는 것
