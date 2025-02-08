import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

export default function Community() {
  return (
    <>
      <header className="max-w-[80rem] w-full gap-12 mx-12 mt-20 mb-6 text-[#ddd6cb] text-center ">
        <h1 className='text-3xl'>
          One shared passion: <span className="text-[2rem] rounded-sm font-bold font-sans-montserrat tracking-wide uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905]" style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Food</span>
        </h1>
        <p className='text-xl font-sans-montserrat tracking-wide'>Come One! Come All! Join our Diverse Communities and share your Cavorite Cuisine!</p>
      </header>
      <main className="flex mx-12 my-10 space-y-4 flex-col justify-center items-center w-full">
        <h2 className='text-[2rem] font-bold text-[#ddd6cb] font-sans-montserrat'>Community Perks</h2>

        <ul className="">
          <li className='flex flex-col items-center'>
            <Image src={mealIcon} objectFit='contain' alt="A delicious meal" />
            <p className='font-sans-montserrat font-bold text-[1.5rem] text-[#dddfcb]'>Share & discover recipes</p>
          </li>
          <li className='flex flex-col items-center'>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p className='font-sans-montserrat font-bold text-[1.5rem] text-[#dddfcb]'>Find new friends & like-minded people</p>
          </li>
          <li className='flex flex-col items-center'>
            <Image src={eventsIcon} alt="A crowd of people at a cooking event"/>
            <p className='font-sans-montserrat font-bold text-[1.5rem] text-[#dddfcb]'>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}