import React, {useEffect, useRef} from 'react';

export default function AbortControllerComp() {
  const controller = useRef();
  useEffect(() => {
    //abort any request if still pending
    controller.current?.abort();
    //create a new controller
    controller.current = new AbortController();
    fetch('/api', {signal: controller.current?.signal}).then(res => res.json());
  }, []);
  return <div>AbortControllerComp</div>;
}
