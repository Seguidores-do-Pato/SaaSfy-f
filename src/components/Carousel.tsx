import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react"

interface CarouselProps {
    slides: string[]; // Defina o tipo de children como React.ReactNode
    children?: React.ReactNode;
}

function Carousel({ slides }: CarouselProps) {

    const [curr, setCurr] = useState(0)
    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    return (
        <div className="relative overflow-hidden h-full">
            <div className="h-full w-full flex transition-transform ease-out duration-500">
                {slides.map((slide) => (
                    <img src={slide} alt="" className='transform transition-transform duration-300 ease-in-out group-hover:scale-190 rounded-lg h-full w-full object-cover' style={{ transform: `translateX(-${curr * 100}%)` }} />
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-1">
                <button onClick={prev} className="rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className="rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronRight size={40} />
                </button>
            </div>

            <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Carousel