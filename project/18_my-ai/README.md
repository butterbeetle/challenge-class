# 2024.07.10 수요일 수업

## 01.Hydration

- Node 환경 -> Browser 환경
- SSR이라는거는, 서버에서 즉 Node 환경에서 뭔가를 한 번 그리는 것,
  그리면서 이런 저런 상태(state, 정보)가 발생할 수 있음
  예를 들어 Posts 100개를 api로 부터 받아와서 그림
  - 이걸 가지고 HTML을 만들었기 때문에 Browser에서 그리는거 자체는 문제 없음, 이미 그려서 보냈으니까
  - Browser 환경의 Tanstack Query Cache store - Node 환경에서 가진 상태를 Dehydration(탈수화, 건조 오징어화)
    HTTP 통신을 통해서 Browser로 보낼 수 있음
    Browser에 도착한 정보를 다시 적절한 스토어(Redux Store, Zustand Store, Tanstack Query Cache Store)에서
    Hydration(수화, 오징어화)

기본은 SSG
Dynamic Router 는 SSR
강제로는 export const dynamic = "force-static" 이런식

```URL
https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
```

## 02.마지막 실습 - ChatGPT 활용
