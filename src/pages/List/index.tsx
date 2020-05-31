import React, { useCallback } from 'react';
import {
  // useRecoilState, // read, write
  useSetRecoilState, // non-subscribe
  useRecoilValue, // read
} from 'recoil';
import { counterState, counterStateKey } from '../../recoilAtoms'
import { Button } from '../../components';

export const List = () => {
  const count = useRecoilValue(counterState);
  const setCount = useSetRecoilState(counterState);
  const countUp = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  return (
    <div>
      <h1>ListPage</h1>
      <p>{counterStateKey}: {count}</p>
      <Button
        text="CountUp" onClick={countUp}
      />
    </div>
  );
};
