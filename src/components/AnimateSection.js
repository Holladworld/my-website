import React from "react";

const AnimateSection = props => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`${props.prefix} ${isVisible ? props.stylename : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default AnimateSection;
