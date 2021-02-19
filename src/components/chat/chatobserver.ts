const chatObserver = (trigger: Function, element: HTMLDivElement) => {
  const options = {
    rootMargin: '20px',
    threshold: 1.0,
  };
  const callback = function (entries: IntersectionObserverEntry[]) {
    entries.forEach((a) => {
      if (a.isIntersecting) {
        console.log('Intersection observed!');
        trigger(true);
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(element);
};

export { chatObserver };
