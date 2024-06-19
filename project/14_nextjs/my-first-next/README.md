### 레이아웃의 두 가지 용도

1. 통일된 UI를 구성하기 위해서 사용
2. 통일된 로직을 실행하기 위해서 사용

### NEXT.JS 에서 딱 하나 기억해야 한다면?

1. app 디렉터리 아래에서의 폴더 구조가 그대로 url 경로가 된다.

##### 예외 사항

app 디렉터리 아래에 폴더로 존재함에도 불구하고 url 경로가 되지 않는 경우

1. (폴더명) : url 경로에서 해당 폴더가 제외되지만, 라우팅 시스템 내부에 여전히 포함된다.

- app/hello/page.tsx
  - /hello
- app/(hello)/page.tsx
  - (hello)가 사라져서 루트경로에 page.tsx가 들어감

2. \_폴더명 : url 경로에서 해당 폴더가 제외되며 라우팅 시스템 내부에서 완전히 제외된다.

- app/\_hello/page.tsx
  - \_hello가 사라져벌임
  - 해당 페이지와 관련된 컴포넌트, 훅, 유틸 등등을 넣으때 사용함

# "use client"

## 언제쓰나요?

1. 컴포넌트 내에서 hook을 사용할 때. hook은 대부분 브라우저 환경에서만 작동하기 때문에
2. window.kakao.maps. ~~ window, document 등 브라우저 환경에서만 존재하는 변수에 접근 시

# SSG

Static Stie Generation
정적 사이트 생성
