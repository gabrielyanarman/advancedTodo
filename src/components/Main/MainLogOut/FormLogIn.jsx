import { useState } from "react"

function FormLogIn({ users, logIn }) {
	const [data, setData] = useState({
		email: '',
		password: '',
	})

	function searchUser(data, users) {
		for (let user of users) {
			if (user.email === data.email && user.password === data.password)
				return user.id
		}
		alert('User is not found')
		return false
	}

	return (
		<div className='box-log-in'>
			<h1>Log In</h1>
			<form
				onSubmit={evt => {
					evt.preventDefault()
					let userFound = searchUser(data, users)
					if (!userFound) return
                    logIn(userFound);
					setData({ email: '', password: '' })
				}}
			>
				<input
					type='mail'
					value={data.email}
					name='mail'
					placeholder='EMAIL'
					onChange={evt => {
						setData({ ...data, email: evt.target.value })
					}}
				/>
				<input
					type='password'
					value={data.password}
					name='password'
					placeholder='PASSWORD'
					onChange={evt => {
						setData({ ...data, password: evt.target.value })
					}}
				/>
				<button>LogIn</button>
			</form>
		</div>
	)
}

export default FormLogIn