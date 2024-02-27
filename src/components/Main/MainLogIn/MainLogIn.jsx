import MainHeaderPO from "./ProjectOut/MainHeaderPO"
import MainBodyPO from "./ProjectOut/MainBodyPO"
import MainHeaderPi from "./ProjectIn/MainHeaderPI"
import MainBodyPI from "./ProjectIn/MainBodyPI"

function MainLogIn({
	onlineUser,
	addProject,
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
	let projectIsOpen = onlineUser.projects.filter(
		project => project.isOpen === true
	)[0]

	if (!projectIsOpen) {
		return (
			<div className='main-log-in'>
				<MainHeaderPO onlineUser={onlineUser} addProject={addProject} />
				<MainBodyPO
					openProject={openProject}
					onlineUser={onlineUser}
					removeProject={removeProject}
				/>
			</div>
		)
	} else {
		return (
			<div className='main-log-in'>
				<MainHeaderPi
					projectIsOpen={projectIsOpen}
					onlineUser={onlineUser}
					closeProject={closeProject}
					addTodo={addTodo}
				/>
				<MainBodyPI
					projectIsOpen={projectIsOpen}
					onlineUser={onlineUser}
					changeText={changeText}
					changesEnd={changesEnd}
					edit={edit}
					toTODO={toTODO}
					toIN_PROGRESS={toIN_PROGRESS}
					toDONE={toDONE}
					removeTodo={removeTodo}
				/>
			</div>
		)
	}
}

export default MainLogIn