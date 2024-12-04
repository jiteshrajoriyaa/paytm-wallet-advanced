"use client"

interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void
}

export const Button = ({children, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick} className="bg-customBlue hover:bg-customDarkBlue text-white p-2 font-sans rounded-md font-semibold flex justify-center" >
            {children}
        </button>
    )
}