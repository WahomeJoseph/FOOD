import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/logo.png'

export default function Navigation() {
    return (
        <>
        <header className="flex justify-between sm:p-5 items-center p-8 md:px-40">
            <Link href='/' className="flex items-center justify-center gap-8 text-[#ddd6cb] font-bold uppercase text-2xl">
                <Image src={logo.src} width={72} height={72} priority alt="Meal Logo"/> 
                <span>African Cuisine</span>
            </Link>
            <nav className="nav">
                <ul className="flex gap-6 list-none m-0 p-0 text-xl">
                    <li><Link href='/meals' className="text-[#ddd6cb] font-bold p-2.5 rounded hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:shadow-[0_0_18px_rgba(248,190,42,0.8)]">Our Meals</Link></li>
                    <li><Link href='/community' className="text-[#ddd6cb] font-bold p-2.5 rounded hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:shadow-[0_0_18px_rgba(248,190,42,0.8)]">Community</Link></li>
                </ul>
            </nav>
        </header>
        </>
        
    )
}