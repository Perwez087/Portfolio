import React, { useEffect, useState } from 'react'
import { IoMdArrowRoundUp } from "react-icons/io";

const BackToTop = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {
                backToTopButton && (
                    <button className='fixed bottom-[50px] right-[50px] bg-inherit border border-[#8750f7] px-3 py-3 rounded-full text-[#8750f7] duration-300 z-50 hover:bg-purple-900 hover:text-white' onClick={scrollUp}>
                        <IoMdArrowRoundUp />
                    </button>
                )
            }
        </div>
    )
}

export default BackToTop