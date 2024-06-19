2024.06.10 월
조금 더 신뢰할 수 있는 코드
규모가 커질수록 강점이 있기 때문에
컴파일 시 타입 오류를 발견할 수 있다.
JavaScript의 SuperSet(그대로 추가된 것)이므로 완벽하게 호환된다.

node에서는 ts 실행이 안됨.

npm init -y

npm i ts-node

npm i typescript

--project -> tsconfig 를 어떤걸 사용할지

null은 값이 없음을 명시적으로 알려주는 값이 null임

```typescript
function incrementNumber(value: number, gap: number): null {
  return null;
}
```

null 반환시 위와같이 null 지정 해야함.

interface는 객체의 형태만 정의가능

type은 interface와 유사하지만 더 유연함, 다양한 타입 정의 가능

대부분 type을 쓰는데 interface는 확장할 경우 많이 쓰는듯?

```typescript
interface User {
  x: number;
  y: number;
}

type Point = {
  x: number;
  y: number;
};
```

React Props는 interface
그 이외에는 type 키워드 쓸거임

한 번 정의한 함수가 다양하게 재사용 될 수 있는 이유?
-> 매개변수 덕분에
한 번 정의한 타입을 다양하게 재사용 하는 방법?
-> 타입에도 매개변수를 줄 수는 없을까?
