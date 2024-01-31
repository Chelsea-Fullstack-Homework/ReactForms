import { useState } from 'react'

function SignUpForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event){
        event.preventDefault();
        try{
            let url = "https://fsa-jwt-practice.herokuapp.com/signup";
            let request = await fetch(url, 
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: "some-username",
                        password: "super-secret-999"
                    })
                }
            );
            let result = await request.json();

            console.log(result);
        }
        catch(err){
            setError(error.message);
        }
    }

    return (
        <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
        <label>
        Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>

        <label>
        Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>

        <button>Submit</button>
        </form>
        </>
    )
}

export default SignUpForm
