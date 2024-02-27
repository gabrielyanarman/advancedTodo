import './Main.css';
import MainLogOut from './MainLogOut/MainLogOut';
import MainLogIn from './MainLogIn/MainLogIn';

function Main({
	addProject,
	addUser,
	users,
	onlineUser,
	logIn,
	openProject,
	closeProject,
	addTodo,
	changeText,
	changesEnd,
	edit,
	toTODO,
	toIN_PROGRESS,
	toDONE,
	removeTodo,
	removeProject,
}) {
	if (!onlineUser) {
		return (
			<div className='main'>
				<MainLogOut addUser={addUser} users={users} logIn={logIn} />
			</div>
		)
	} else {
		return (
			<div className='main'>
				<MainLogIn
					addProject={addProject}
					onlineUser={onlineUser}
					openProject={openProject}
					closeProject={closeProject}
					addTodo={addTodo}
					changeText={changeText}
					changesEnd={changesEnd}
					edit={edit}
					toTODO={toTODO}
					toIN_PROGRESS={toIN_PROGRESS}
					toDONE={toDONE}
					removeTodo={removeTodo}
					removeProject={removeProject}
				/>
			</div>
		)
	}
}

export default Main