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
