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
) => {
  setWasTriggered(true);
  setDisplayed(true);
  setIsTyping(true);
  await sleep(2500);
  msgRef.current.style.marginTop = msgRef.current.scrollHeight + 32 + 'px';
  setIsTyping(false);
  msgRef.current.style.marginTop = '0px';
  msgRef.current.style.height = msgRef.current.scrollHeight + 32 + 'px';
  if (window.innerWidth <= 768 && isInViewport(msgRef.current)) {
    console.log(window.scrollY);
    window.scrollTo(0, window.scrollY + msgRef.current.scrollHeight + 32);
    await sleep(500);
    window.scrollTo(0, window.scrollY + 70);
  }
};

export default asyncAnim;
