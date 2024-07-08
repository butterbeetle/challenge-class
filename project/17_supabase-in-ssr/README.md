# 2024.07.08 월요일 수업

## SSR 환경에서 Supabase 사용하기

```typescript
// 설치
npm install @supabase/supabase-js @supabase/ssr
```

1. 브라우저에 사용할 Client
2. 서버에서 사용할 Client

이렇게 2가지 필요함.

왜 쿠키 설정이 나오느냐?
서버사이드와 통신할때의 supabase 인증 정보를 넣고 빼고 이럴것이기 때문에
