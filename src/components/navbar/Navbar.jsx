'use client';

import Link from "next/link"
import styles from "@/mystyles.module.css";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const Navbar = ()=>{
    const pathname= usePathname();
    return (
        <>
            <div className={ styles.mystyle}> 
            <Link href ="/" className={clsx(
              'justify-center gap-2 rounded-md bg-gray-50 p-3',
              {
                'bg-sky-100 text-blue-600': pathname === "/",
              },
            )} >Homepage</Link>
            <Link href ="/about" className={clsx('justify-center gap-2 rounded-md bg-gray-50 p-3 ', { 'bg-sky-100 text-blue-600': pathname === "/about",}, )}>
                About</Link>
            <Link href ="/contact"className={clsx(
              'justify-center gap-2 rounded-md bg-gray-50 p-3 ',
              {
                'bg-sky-100 text-blue-600': pathname === "/contact",
              },
            )}>Contact</Link>
            </div>
        </>
    )
}

export default Navbar