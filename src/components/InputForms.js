import { useState } from "react"

export function InputForms({ searchHandler }) {
    const [address, setInsideFormChangeAddress] = useState() 

    

    return (
        <div>
            <h1>
                Prayer Times for: {address}
            </h1>
            <div>
                <input 
                    type="text"
                    value={address}
                    onChange={(e) => setInsideFormChangeAddress(e.target.value)}
                />
            </div>
            <button
                onClick={(e) => searchHandler(e, address)}
            >
                Search 
            </button>
        </div>
    )
}