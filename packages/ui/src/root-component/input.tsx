"use client"
import { FieldErrors, FieldValues } from "react-hook-form"; 
interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string,
    onChange: (value: string) => void,
    register?: (name: string) => void,
    errors?: FieldErrors<FieldValues>,
    name?: string
}

export const InputHeadingWithPlaceholder = ({ label, type, placeholder, onChange, register, errors={}, name="" }: LabelledInputType) => {
    return <div className="flex flex-col">
        <div className="font-semibold">{label}</div>
        <div >
            <input
                    {...(register && name ? register(name) : {})}
                    className={`border-2 border-gray-200 rounded-md p-1 pl-3 mt-1 w-full font-medium focus:outline-none focus:border-blue-200 ${errors[name] ? "border-red-500" : "border-gray-300"
                    }`}
                type={type || "text"}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
            {errors[name]?.message && (
                <p className="text-sm text-red-500">{errors[name]?.message as string}</p>
            )}
        </div>
    </div>
}