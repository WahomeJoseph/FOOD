'use client'
export default function Error(){
    return(
        <main className="mt-10">
            <h1 className="text-[2rem] text-center p-1 rounded-sm font-bold font-sans-montserrat tracking-wide bg-transparent uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905]" style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>An Error Occured!</h1>
            <p className="text-[#ddd6cb] tracking-wide bg-transparent uppercase font-bold text-center text-[1.2rem]">Failed to fetch meals data. Please try again!</p>
        </main>
    )
}