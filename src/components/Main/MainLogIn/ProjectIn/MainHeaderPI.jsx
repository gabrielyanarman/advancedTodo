

function MainHeaderPi({ projectIsOpen, onlineUser, closeProject, addTodo }) {
	return (
		<div className='main-header-PI'>
			<button
				onClick={() => {
					closeProject(onlineUser, projectIsOpen.id)
				}}
			>
				{'<'}
			</button>
			<h2>{projectIsOpen.name}</h2>
			<button onClick={() => {
				addTodo(onlineUser, projectIsOpen.id, {
					id: Math.random(),
					text: '',
					isWriting: true,
					state: 'TODO',
				})
			}}>{'+'}</button>
		</div>
	)
}

export default MainHeaderPi