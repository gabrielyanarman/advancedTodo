
function MainHeaderPO({onlineUser, addProject }) {
	return (
		<div className='main-header-PO'>
			<h2>PROJECTS</h2>
			<button
				onClick={() => {
					addProject(onlineUser.id, {
						name: `Project ${onlineUser.projects.length + 1}`,
						id: Math.random(),
						isOpen: false,
						todos: [],
					})
				}}>
				Add Project
			</button>
		</div>
	)
}

export default MainHeaderPO