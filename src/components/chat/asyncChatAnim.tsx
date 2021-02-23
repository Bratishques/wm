import { MutableRefObject } from 'react';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isInViewport(element: HTMLDivElement) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const asyncAnim = async (
  msgRef: MutableRefObject<HTMLDivElement>,
  setWasTriggered: Function,
  setDisplayed: Function,
  setIsTyping: Function,
  setAccumHeight: Function,
  accumHeight: number,
  msgBoxRef: MutableRefObject<HTMLDivElement>,
  containRef: MutableRefObject<HTMLDivElement>,
  last: boolean = false,
) => {
  setWasTriggered(true);
  setDisplayed(true);
  setIsTyping(true);
  await sleep(2500);
  setIsTyping(false);
  msgRef.current.style.marginTop = msgRef.current.scrollHeight + 32 + 'px';
  msgRef.current.style.marginTop = '0px';
  msgRef.current.style.height = msgRef.current.scrollHeight + 32 + 'px';
  msgBoxRef.current.style.top = accumHeight + 'px';
  if (!last) {
    setAccumHeight(msgRef.current.scrollHeight + accumHeight + 42 + 32 + 28);
  }
  if (last) {
    setAccumHeight(msgRef.current.scrollHeight + accumHeight);
  }
};

export default asyncAnim;
