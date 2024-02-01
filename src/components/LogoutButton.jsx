function LogoutButton({ setCurrentUser, setToken }){
    function handleClick(event){
        event.preventDefault();
        setCurrentUser(null);
        setToken(null);
    }

    return (
        <>
        <button onClick={(e) => handleClick(e)}>Logout</button>
        </>
    )
}

export default LogoutButton
