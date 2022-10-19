import { useEffect, useState } from "react";
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      let mouse = document.querySelector(".cursor");
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
      let height =window.innerHeight;
      let width = window.innerWidth;
      if (
        (clientX <= 0 ||
        clientX >= width )||
        (clientY <= 0 ||
        clientY >= height)
      ) {
        mouse.classList.add("hide");
      } else if ((
        clientX > 0 ||
        clientX < width )||(
        clientY > 0 ||
        clientY < height)
      ) {
        mouse.classList.remove("hide");
      }
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
};
export default useMousePosition;

