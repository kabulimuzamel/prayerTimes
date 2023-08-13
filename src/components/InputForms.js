export function InputForms({ setAddress, address, searchHandler }) {
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
            </div>
            <button
                onClick={searchHandler}
            >
                Search 
            </button>
        </div>
    )
}