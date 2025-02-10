import Link from "next/link"
import Image from "next/image"
import logo from '@/assets/logo.png'
import NavLink from "./NavLink.jsx"

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
                    <NavLink href='/meals'>Our Meals</NavLink>
                    <NavLink href='/community'>Community</NavLink>
                </ul>
            </nav>
        </header>
        </>
        
    )
}