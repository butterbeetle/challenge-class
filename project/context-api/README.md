# Context API

Contxet API는 provider의 value가 하나로 취급됨.

Context API는 거의 모든 경우에 파일 하나를 만들어 거기서 만들어쓰는게 좋음.

Context API의 한계(단점)
value안의 일부 값만 바뀌더라도 전체 리렌더링됨.
사용해야 될 때도 있긴한데 useMemo, useCallback과는 무관
경우에 따라서 의미가 있긴함
