import { useState } from 'react'

function Authenticate({ token }){
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null);

    async function handleClick(event){
        event.preventDefault();
        try{
            let url = 'https://fsa-jwt-practice.herokuapp.com/authenticate';
            let response = await fetch(url,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
            let result = await response.json();
            let message = result.message;
            console.log(result);

            setSuccessMessage(message);
        }
        catch(err){
            setError(err.message); 
        }
    }

    return (
        <>
        <h2>Authenticate</h2>

        {error && <p>Error: {error}</p>}
        {successMessage && <p>Message: {successMessage}</p>}

        <button onClick={(e)=>handleClick(e)}>Authenticate Token</button>
        </>
    )
}

export default Authenticate
