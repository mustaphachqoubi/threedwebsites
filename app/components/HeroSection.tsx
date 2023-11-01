import { useEffect, useState } from "react";
import { Sentences } from "./Sentences";

export const HeroSection = () => {

  const [opacity, setOpacity] = useState(1);
  const [index, setIndex] = useState(0);
  const [scrollLevel, setScrollLevel] = useState(1);

  const showNextSentence = () => {
    index < Sentences.length - 1 && setIndex(index + 1);
  };

  const showPreviousSentence = () => {
    index > 0 && setIndex(index - 1);
  };

  const handleWheel = (e: any) => {
    const maxScrollToChange = 100;
    const maxOpacityToChangeIndex = 10;

    setScrollLevel((prevDeltaY) => prevDeltaY + e.deltaY)

    if (e.deltaY >= 0) {
      setOpacity((prevOpacity: number) => prevOpacity + 0.1)

      if(opacity >= maxOpacityToChangeIndex && index < Sentences.length - 1){
        showNextSentence();
        setOpacity(0)
      } 
    } else {
      setOpacity((prevOpacity: number) => prevOpacity - 0.1)

     showPreviousSentence()
      if(index > 0 && opacity >= 0) {
      } 
    }

  };

  useEffect(() => {
   window.addEventListener("wheel", handleWheel) 
  })

  return (
    <>
      <div className="text-white grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 reverse-grid h-screen">
        <div className="flex justify-center items-center text-[10vw] md:text-[4vw] text-center p-2">
          3D model
        </div>
        <div data-scroll style={{ opacity: `0.${index === 0 ? 9 : Math.floor(opacity)}`}} className="flex flex-col justify-center items-center font-bold text-[10vw] md:text-[4vw] text-center p-2 overflow-auto ">
          {Sentences[index]}
        </div>
      </div>

      {
        //index === Sentences.length - 1 ? <div className="h-screen text-white bg-black flex justify-center items-center">I want a 3d website</div> : null
      }
    </>
  );
};
