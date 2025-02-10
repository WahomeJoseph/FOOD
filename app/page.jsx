import ImageSlider from "@/components/hero/ImageSlider";
import Link from "next/link";
export default function Home() {
  console.log('Welcome Back...')
  return (
    <>
      <header className="flex gap-12 sm:gap-4 sm-p-2 sm:text-base mx-12 mt-8 w-[100%] max-w-[80rem]">
        <div className="w-[45rem] h-[25rem]">
          <ImageSlider />
        </div>

        <div className="p-4">
          <div className="text-[1.5rem] text-[#ddd6cb]">
            <h1 className="text-[2rem] p-1 rounded-sm font-bold font-sans-montserrat tracking-wide bg-transparent uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905]" style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Greatest African Food Of All Time</h1>
            <p className="text-start leading-relaxed p-1 sm:text-justify">With your buddies give your taste buds the sumptuousness of African cuisine..</p>
          </div>
          <div className="flex gap-3 text-[1.5rem] sm:p-2 sm:mt-6 ">
            <Link href='/meals' className="inline-block mt-3 p-3 sm:p-2 rounded-md text-[#f1f1f1] font-bold hover:bg-gradient-to-r from-[#f9572a] to-[#ffc905] first:bg-transparent first:text-[#ff9b05] first:hover:text-black">🍲 Explore Meals 🍲</Link>
            <Link href='/community' className="inline-block mt-3 p-3 sm:p-2 rounded-md text-[#f1f1f1] font-bold hover:bg-gradient-to-r from-[#f9572a] to-[#ffc905] hover:text-black">👥 Join Community</Link>
          </div>
        </div>
      </header>
      {/* main part */}
      <main className="flex flex-col items-center space-y-8 p-4 mt-10 justify-center sm:p-8 w-full">
        <section className="flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] text-center">
          <h1 className="text-[#f1f1f1] text-[2rem] font-bold" style={{
            textShadow: '2px 2px 4px rgba(247, 162, 17, 0.97)',
          }}>How it works?</h1>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] text-center ">
          <h2 className="text-[#f1f1f1] text-[2rem] font-bold" style={{
            textShadow: '2px 2px 4px rgba(247, 162, 17, 0.97)',
          }}>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
