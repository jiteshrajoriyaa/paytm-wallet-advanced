interface selectionInput {
    label: string,
    options: {
        key: string,
        value:string
    }[],
    onSelect: (value: string) => void
}

export const Selection = ({ label, options, onSelect }: selectionInput) => {
    return (
        <div className="flex flex-col">
            <label className="font-semibold">{label}</label>
            <select onChange={(e) => 
                onSelect(e.target.value)
            }
                className="border-2 border-gray-200 rounded-md p-1 pl-3 mt-1 w-full font-medium focus:outline-none focus:border-blue-200"
                name="options" id="options">
                <option className="font-semibold" value="option0">{"---Select---"}</option>
                {
                    options.map(option => <option value={option.key}>{option.value}</option>)
                }
            </select>
        </div>
    )
}