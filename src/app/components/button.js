export const Button = ({ text }) => {
    return (
        <button className='border-[1px] border-customPrimary hover:border-customHover py-1 px-4 text-customPrimary hover:text-customHover rounded-full text-sm'>
            { text }
        </button>
    )
}

export const ButtonOutline = ({ text }) => {
    return (
        <button className='bg-btnPrimary hover:bg-btnHovered border-[1px] border-customPrimary hover:border-customHover text-white text-sm py-1 px-4 rounded-full font-normal'>
            { text }
        </button>
    )
}