import Link from 'next/link';
import Image from 'next/image';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className='flex flex-col text-[#ddd6cb] justify-between h-100vh rounded-md overflow-hidden transition-all ease-in-out duration-300' style={{boxShadow: '0 0 12px rgba(0, 0, 0, 0.3)', background: 'linear-gradient(90deg, #2c1e19, #25200f)'}}>
      <header>
        <div className='relative m-4 rounded-sm h-[20rem]'>
          <Image src={image} alt={title} fill/>
        </div>
        <div className='p-3'>
          <h2 className='text-[1.5rem] font-sans-Montserrat'>{title}</h2>
          <p className='text-[0.75rem] text-[#cfa69b] italic'>by {creator}</p>
        </div>
      </header>
      <div className='flex flex-col justify-between h-100vh'>
        <p className='p-3'>{summary}</p>
        <div className='p-4 text-right'>
          <Link href={`/meals/${slug}`} className='inline-block mt-4 p-2 rounded-sm text-[#dddfcb] font-bold hover:bg-gradient-to-r from-[#fd4715] to-[#f9b241] hover:shadow-[0_0_18px_rgba(248,190,42,0.8)]' style={{background: 'linear-gradient(90deg, #f9572a, #ff9b05)'}}>View Details</Link>
        </div>
      </div>
    </article>
  );
}