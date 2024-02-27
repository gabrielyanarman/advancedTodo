
import ProjectItems from "../Project/ProjectItems"

function MainBodyPO({
	openProject,
	onlineUser,
	removeProject,
}) {
	return (
		<ProjectItems
			openProject={openProject}
			onlineUser={onlineUser}
			removeProject={removeProject}
		/>
	)
}

export default MainBodyPO