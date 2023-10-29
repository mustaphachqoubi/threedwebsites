import { useEffect, useState } from "react"
import { Sentences } from "./Sentences"

export const HeroSection = () => {

  const [index, setIndex] = useState(0)
  let scroll = 0

  const showNextSentence = () => {
    index < Sentences.length - 1 && setIndex(index + 1)
  }

  const showPreviousSentence = () => {
    index > 0 && setIndex(index - 1)
  }

  const handleWheel = (e: any) => {
  e.deltaY >= 0 ? showNextSentence() : showPreviousSentence() 
  }

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
  })

  return (
  <>
      <div className="text-white grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 reverse-grid h-screen">
  <div className="flex justify-center items-center text-[10vw] md:text-[4vw] text-center p-2">3D model</div>
  <div className="flex flex-col justify-center items-center font-bold text-[10vw] md:text-[4vw] text-center p-2 overflow-auto">{Sentences[index]}</div>
</div>

{
  scroll === Sentences.length ? <div className="h-screen text-white bg-black flex justify-center items-center">I want a 3d website</div> : null
}

  </>
  )
}
