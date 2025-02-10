'use client'
import Link from "next/link"
import PropTypes from 'prop-types'
import { usePathname } from "next/navigation";

export default function NavLink ({ href, children }) {
    const path = usePathname()

    return (
        <Link href={href} className={path.startsWith(href) ? 'clip-text p-2 font-bold rounded-lg bg-gradient-to-r from-[#ff8a05] to-[#f9b331]' : 'text-[#ddd6cb] font-bold p-2.5 rounded hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:shadow-[0_0_18px_rgba(248,190,42,0.8)]'}>{children}</Link>
    )
}

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}