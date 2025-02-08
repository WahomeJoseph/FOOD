'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import burger from '@/assets/burger.jpg';
import curry from '@/assets/curry.jpg';
import dumplings from '@/assets/dumplings.jpg';
import macncheese from '@/assets/macncheese.jpg';
import pizza from '@/assets/pizza.jpg';
import schnitzel from '@/assets/schnitzel.jpg';
import tomatoSalad from '@/assets/tomato-salad.jpg';

const images = [
  { image: burger, alt: 'A delicious, juicy burger' },
  { image: curry, alt: 'A delicious, spicy curry' },
  { image: dumplings, alt: 'Steamed dumplings' },
  { image: macncheese, alt: 'Mac and cheese' },
  { image: pizza, alt: 'A delicious pizza' },
  { image: schnitzel, alt: 'A delicious schnitzel' },
  { image: tomatoSalad, alt: 'A delicious tomato salad' },
];

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full md:flex-row rounded-sm overflow-hidden" style={{ boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.5)'}}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`w-full h-full absolute top-0 left-0 transition-all ease-in-out duration-500 ${
            index === currentImage
              ? 'z-10 opacity-100 transform scale-100 translate-x-0 rotate-0'
              : 'opacity-0 transform scale-[1.1] translate-x-[-1rem] rotate-[-5deg]'
          }`}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
