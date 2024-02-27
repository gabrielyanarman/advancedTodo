import { useEffect } from "react"

function ProjectItems({
	openProject,
	onlineUser,
	removeProject,
}) {

	return (
		<div className='projectItems'>
			{onlineUser.projects.map(project => {
				return (
					<div
						key={project.id}
						onClick={() => {
							openProject(onlineUser, project.id)
						}}
					>
						<button
							onClick={evt => {
								evt.stopPropagation()
								removeProject(onlineUser, project.id)
							}}
						>
							X
						</button>
						{project.name}
					</div>
				)
			})}
		</div>
	)
}

export default ProjectItems