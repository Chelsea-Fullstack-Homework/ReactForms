function CurrentUser({ currentUser }){
    console.log(currentUser)
    return (
        <>
        {currentUser && <h1>Welcome {currentUser}!</h1>}
        </>
    )
}

export default CurrentUser
