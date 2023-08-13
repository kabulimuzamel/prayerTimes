import { useState } from "react"

export function InputForms({ setAddress }) {
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
                onClick={() => setAddress(address)}
            >
                Search 
            </button>
        </div>
    )
}