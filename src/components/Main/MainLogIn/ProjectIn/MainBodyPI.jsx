import ProjectTodo from "../Project/ProjectTodo"

function MainBodyPI({
	projectIsOpen,
	changeText,
	onlineUser,
	changesEnd,
	edit,
	toTODO,
	toIN_PROGRESS,
	toDONE,
	removeTodo,
}) {
	return (
		<div>
			<ProjectTodo
				todos={projectIsOpen.todos}
				changeText={changeText}
				onlineUser={onlineUser}
				projectId={projectIsOpen.id}
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

export default MainBodyPI