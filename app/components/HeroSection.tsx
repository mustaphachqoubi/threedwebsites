import { useEffect, useState } from "react";
import { Sentences } from "./Sentences";
import { WantAWebsite } from "./WantAWebsite";

export const HeroSection = () => {
  const [opacity, setOpacity] = useState(9);
  const [index, setIndex] = useState(0);

  const handleScroll = () => {
    if( index > Sentences.length / 3){
      setIndex(0)
    }else{
      setIndex(Sentences.length - 1)
      setOpacity(9)
    }
  };

  const showNextSentence = () => {
    index < Sentences.length - 1 && setIndex(index + 1);
  };

  const showPreviousSentence = () => {
    index > 0 && setIndex(index - 1);
  };

  const handleWheel = (e: any) => {
    const maxOpacityToChangeIndex = 10;

    if (e.deltaY >= 0) {
      setOpacity((prevOpacity: number) => prevOpacity + 0.1);

      if (opacity >= maxOpacityToChangeIndex && index < Sentences.length - 1) {
        showNextSentence();
        setOpacity(0);
      }
    } else {
      setOpacity(opacity - 0.1);

      if (opacity <= 0 || index === Sentences.length - 1) {
        setOpacity(10);
        showPreviousSentence();
      }
    }
  };

  const handleStart = () => {
  }

  const handleEnd = () => {
  }

  const handleCancel = () => {
  }

    let previousClientY = 0
  const handleMove = (evt: any) => {

    const touches = evt.changedTouches;
    const currentClientY = touches[0].clientY

    console.log(touches[0].clientY)
    console.log('kjndkjbgkdsj')

    if(currentClientY > previousClientY){
      console.log("down")
    }
    if(currentClientY < previousClientY){
      console.log("up")
    }
    
    const maxOpacityToChangeIndex = 10;
    setOpacity((prevOpacity: number) => prevOpacity + 0.3);

      if (opacity >= maxOpacityToChangeIndex && index < Sentences.length - 1) {
        showNextSentence();
        setOpacity(0);
      }
  }

  useEffect(() => {
  window.addEventListener("wheel", handleWheel);

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
  }, [handleWheel]);

  useEffect(() => {
  window.addEventListener("touchstart", handleStart);
  window.addEventListener("touchend", handleEnd);
  window.addEventListener("touchcancel", handleCancel);
  window.addEventListener("touchmove", handleMove);
  })

  return (
    <>
      <div className="sticky top-0 text-white grid grid-cols-1 grid-rows-[1fr_50px_1fr] md:grid-cols-[1fr_50px_1fr] md:grid-rows-1 reverse-grid h-screen">
        <div className="flex justify-center items-center text-[10vw] md:text-[4vw] text-center p-2">
          3D model
        </div>

        <div className="flex justify-center items-center md:items-end md:py-12">
          <div
            onClick={handleScroll}
            className="animate-bounce border-2 border-white/30 hover:border-white p-2 rounded-full cursor-pointer duration-300"
          >
            {index >= Sentences.length - 3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>

        <div
          data-scroll
          style={{ opacity: `0.${ Math.floor(opacity) }` }}
          className="flex flex-col justify-center items-center font-bold text-[10vw] md:text-[4vw] text-center p-2 overflow-auto "
        >
          {Sentences[index]}
        </div>
      </div>

      {index === Sentences.length - 1 && opacity > 9 ? <WantAWebsite /> : null}
    </>
  );
};
