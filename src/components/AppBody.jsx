import Main from './Main/Main.jsx'
import Header from './Header/Header.jsx'

function AppBody({
	onlineUser,
	addUser,
	users,
	addProject,
	logIn,
	logOut,
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
	return (
		<div>
			<Header onlineUser={onlineUser} logOut={logOut} />
			<Main
				addProject={addProject}
				addUser={addUser}
				users={users}
				onlineUser={onlineUser}
				logIn={logIn}
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

export default AppBody
