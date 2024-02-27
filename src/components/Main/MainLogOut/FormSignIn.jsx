import { useState } from "react"

function FormSignIn({addUser,users}) {
    const newUserState0 = {
			id: Math.random(),
			email: '',
			name: '',
			lastName: '',
			password: '',
            isOnline: false,
            projects: [],
		}
    const confirmPassword0 = '';
    const [newUser,setNewUser] = useState(newUserState0)
    const [confirmPassword, setConfirmPassword] = useState(confirmPassword0)

    function userVerification(newUser,users) {
        let values = Object.values(newUser)
        if(confirmPassword !== newUser.password) {
            alert('You entered 2 different passwords')
            return false
        }
        for(let value of values) {
           if(value === '') {
            alert('All fields must be filled in')
            return false
           }
        }
        for(let user of users) {
            if(newUser.email === user.email) {
                alert('The user with this email is already registered')
                return false
            }
        }
        return true
    }

    return (
        <div className="box-sign-in">
            <h1>Sign In</h1>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                let verified = userVerification(newUser, users)
                if (!verified) return
                alert('You have successfully registered, please log in')
                addUser(newUser)
                setNewUser(newUserState0)
                setConfirmPassword(confirmPassword0)
            }}>
                <input type="mail" name="mail" value={newUser.email} placeholder="EMAIL" onChange={(evt) => {
                    setNewUser({...newUser,email: evt.target.value})
                }}/> 
                <input type="text" name="name" value={newUser.name} placeholder="NAME" onChange={(evt) => {
                    setNewUser({...newUser,name: evt.target.value})
                }}/>
                <input type="text" name="lastname" value={newUser.lastName} placeholder="LASTNAME" onChange={(evt) => {
                    setNewUser({...newUser,lastName: evt.target.value})
                }}/>
                <input type="password" name="password" value={newUser.password} placeholder="PASSWORD" onChange={(evt) => {
                    setNewUser({...newUser,password: evt.target.value})
                }}/>
                <input type="password" value={confirmPassword} name="password" placeholder="CONFIRM PASSWORD" onChange={(evt) => {
                    setConfirmPassword(evt.target.value)
                }}/>
                <button>SignIn</button>
            </form>
        </div>
    )
}

export default FormSignIn