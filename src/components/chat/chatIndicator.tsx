import { MutableRefObject, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {
  hidden: boolean;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const ChatIndicatior = ({ hidden }: Props) => {
  const ball1 = useRef() as MutableRefObject<HTMLDivElement>;
  const ball2 = useRef() as MutableRefObject<HTMLDivElement>;
  const ball3 = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const asyncAnim = async () => {
      const balls = [ball1.current, ball2.current, ball3.current];
      for (let ball of balls) {
        /*const timeline = gsap.timeline({ repeat: 10, repeatDelay: 0.4 });
        timeline.to(ball, { y: -6, duration: 0.4, ease: '' });
        timeline.to(ball, { y: 0, duration: 0.4, ease: "back.out(4)" }); */
        ball.classList.add('animate-ball-bounce');
        await sleep(300);
      }
    };
    asyncAnim();
  }, []);

  return (
    <div
      className={`h-auto px-6 py-3 w-20 bg-indicator-bg rounded-30px ${
        hidden ? 'hidden' : ''
      }`}
    >
      <div
        className={`mx-auto my-auto h-2.5 flex justify-between item-center relative`}
      >
        <div
          ref={ball1}
          className={`w-2 h-2 bg-indicator-ball rounded-full animate-ball1-bounce`}
        />
        <div
          ref={ball2}
          className={` w-2 h-2 bg-indicator-ball rounded-full animate-ball2-bounce`}
        />
        <div
          ref={ball3}
          className={`w-2 h-2 bg-indicator-ball rounded-full animate-ball3-bounce`}
        />
      </div>
    </div>
  );
};

export default ChatIndicatior;
