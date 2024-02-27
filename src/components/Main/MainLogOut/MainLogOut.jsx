import FormLogIn from "./FormLogIn";
import FormSignIn from "./FormSignIn";

function MainLogOut({addUser,users,logIn}) {
	return (
		<div className='main-log-out'>
			<FormLogIn users={users} logIn={logIn} />
			<FormSignIn addUser={addUser} users={users} />
		</div>
	)
}

export default MainLogOut