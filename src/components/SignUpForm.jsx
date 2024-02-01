import { useState } from 'react'
import '../app.css'

function SignUpForm({ setToken }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event){
        event.preventDefault();

        if(username.length >= 8 && password.length >= 8){
            try{
                let url = "https://fsa-jwt-practice.herokuapp.com/signup";
                let request = await fetch(url, 
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: `${username}`,
                            password: `${password}`
                        })
                    });
                let result = await request.json();
                let token = result.token;

                setToken(token);
            }
            catch(err){
                setError(error.message);
            }
        } else {
            if(username.length >= 8) alert("Password must be at least 8 characters long");
            else if(password.length >= 8) alert("Username must be at least 8 characters long");
            else alert("Username and Password must be at least 8 characters long");
        }

    }

    return (
        <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form className="signup-form" onSubmit={handleSubmit}>
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
