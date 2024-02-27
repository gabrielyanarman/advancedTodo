
function HeaderLogIn({ onlineUser, logOut }) {
	return (
		<div className='header-log-in'>
			<div className='user'>
				<div className='user-img'></div>
				<span>
					{onlineUser.name} {onlineUser.lastName}
				</span>
			</div>
			<button
				onClick={() => {
					logOut(onlineUser.id)
				}}
			>
				LogOut
			</button>
		</div>
	)
}

export default HeaderLogIn