import HeaderLogOut from "./HeaderLogOut";
import HeaderLogIn from "./HeaderLogIn";

function Header({ onlineUser , logOut }) {
	if (!onlineUser) {
		return (
			<div className='header'>
				<HeaderLogOut />
			</div>
		)
	} else {
		return (
			<div className='header'>
				<HeaderLogIn onlineUser={onlineUser} logOut={logOut} />
			</div>
		)
	}
}

export default Header