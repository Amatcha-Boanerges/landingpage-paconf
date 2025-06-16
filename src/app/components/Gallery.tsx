'use client'

import Image from "next/image";
import { useState } from 'react'


//placeholder images
const images = [
    '/images/attend1.jpg',
    '/images/attend2.jpg',
    '/images/attend3.jpg',
]

export default function Gallery() {
    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (


        <div className="relative w-full max-w-6xl mx-auto mt-10 mb-10 overflow-hidden rounded-lg shadow-lg ">
            
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[550px]">
                <Image
                    src={images[index]}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-500 ease-in-out"
                />
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center z-10"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center z-10"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="absolute bottom-2 w-full flex justify-center space-x-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === i ? 'bg-gray-600' : 'bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>

    );
}