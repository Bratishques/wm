const tagsObserver = (trigger: Function, element: HTMLDivElement) => {
  const options = {
    rootMargin: '40px',
    threshold: 0.9,
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

export { tagsObserver };
