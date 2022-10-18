import { useEffect, useState } from "react";
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    // window.onload = function () {
    //   Calendly.initBadgeWidget({
    //     url: "https://calendly.com/vapourwareco/one-on-one-meetup",
    //     text: "schedule meeting",
    //     color: "#0069ff",
    //     textColor: "#ffffff",
    //     branding: undefined,
    //   });
    // };
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
};
export default useMousePosition;
