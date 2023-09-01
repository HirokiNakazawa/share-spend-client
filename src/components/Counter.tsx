'use client'

import { FC } from "react";
import { atom, useRecoilState } from "recoil"; 

const countAtom = atom({
  key: 'count',
  default: 0,
});

export const Counter: FC = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <button onClick={() => setCount(count => count + 1)}>
      {count}
    </button>
  );
}
