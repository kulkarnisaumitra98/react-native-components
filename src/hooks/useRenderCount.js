import { useRef } from 'react';

// Used to check how many times a component rendered
const useRenderCount = () => {
  const ref = useRef(0);

  console.log(ref.current++, 'rendered');
};

export default useRenderCount;
