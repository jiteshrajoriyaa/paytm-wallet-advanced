"use client"

interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    type?: "button" | "submit";
}

export const Button = ({children, onClick, type = "button"}: ButtonProps) => {
    return (
        <button onClick={onClick} type={type}
         className="bg-customBlue hover:bg-customDarkBlue text-white p-2 font-sans rounded-md font-semibold flex justify-center" >
            {children}
        </button>
    )
}