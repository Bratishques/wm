import { useEffect } from 'react';
import gsap from 'gsap';

interface Props {
  hidden: boolean;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const ChatIndicatior = ({ hidden }: Props) => {
  useEffect(() => {
    const asyncAnim = async () => {
      const balls = document.getElementsByClassName(`jump-ball`);
      for (let ball of balls) {
        const timeline = gsap.timeline({ repeat: 10, repeatDelay: 0.5 });
        timeline.to(ball, { y: -6, duration: 0.4, ease: '' });
        timeline.to(ball, { y: 3, duration: 0.4, ease: '' });
        timeline.to(ball, { y: 0, duration: 0.4, ease: '' });
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
        <svg
          className={`jump-ball`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 12"
          width="9"
          height="9"
        >
          <circle fill="#dea4c0" cx="6" cy="6" r="6" />
        </svg>
        <svg
          className={`jump-ball`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 12"
          width="9"
          height="9"
        >
          <circle fill="#dea4c0" cx="6" cy="6" r="6" />
        </svg>
        <svg
          className={`jump-ball`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 12"
          width="9"
          height="9"
        >
          <circle fill="#dea4c0" cx="6" cy="6" r="6" />
        </svg>
      </div>
    </div>
  );
};

export default ChatIndicatior;
