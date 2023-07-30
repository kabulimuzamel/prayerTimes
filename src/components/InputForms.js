import React, { useState } from "react"
export function InputForms({ submitHandler }) {
    const [address, setAddress] = useState('')
    return (
        <div>
            <h1>
                Prayer Times for: {address}
            </h1>
            <div>
                <input 
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
                <button onClick={() => submitHandler(address)}>Search</button>
            </div>
        </div>
    )
}