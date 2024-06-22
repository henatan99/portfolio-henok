export const ButtonOutline = ({ text, styles }) => {
    return (
        <button className={`border-[1px] border-customPrimary hover:border-customHover py-1 px-4 text-customPrimary hover:text-customHover rounded-full text-sm ${styles}`}>
            { text }
        </button>
    )
}

export const Button = ({ text, styles }) => {
    return (
        <button className={`bg-btnPrimary hover:bg-btnHovered border-[1px] border-customPrimary hover:border-customHover text-white text-sm py-1 px-4 rounded-full font-normal ${styles}`}>
            { text }
        </button>
    )
}