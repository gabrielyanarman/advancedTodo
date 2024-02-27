
function StateTodo({
	todo,
	changeText,
	changesEnd,
	onlineUser,
	projectId,
	edit,
	toIN_PROGRESS,
	removeTodo
}) {
	if (!todo.isWriting) {
		return (
			<tr>
				<td>
					<div>
						{todo.text}
						<button
							onClick={() => {
								edit(onlineUser, projectId, todo.id)
							}}
						>
							EDIT
						</button>
						<button onClick={()=> {
							toIN_PROGRESS(onlineUser, projectId, todo.id)
						}}>{'-->'}</button>
					</div>
				</td>
				<td></td>
				<td></td>
			</tr>
		)
	} else {
		return (
			<tr>
				<td>
					<div>
						<input
							type='text'
							value={todo.text}
							autoFocus={true}
							onBlur={() => {
								if(todo.text !== '') {
									changesEnd(onlineUser, projectId, todo.id)
								} else {
									removeTodo(onlineUser, projectId, todo.id)
								}
							}}
							onChange={evt => {
								changeText(onlineUser, projectId, todo.id, evt.target.value)
							}}
						/>
						<button>OK</button>
					</div>
				</td>
				<td></td>
				<td></td>
			</tr>
		)
	}
}

function StateInProgress({
	todo,
	changeText,
	changesEnd,
	onlineUser,
	projectId,
	edit,
	toTODO,
	toDONE,
	removeTodo
}) {
	if (!todo.isWriting) {
		return (
			<tr>
				<td></td>
				<td>
					<div>
						<button onClick={() => {
							toTODO(onlineUser, projectId, todo.id)
						}}>{'<--'}</button>
						{todo.text}
						<button onClick={() => {
							edit(onlineUser, projectId, todo.id)
						}}>EDIT</button>
						<button onClick={() => {
							toDONE(onlineUser, projectId, todo.id)
						}}>{'-->'}</button>
					</div>
				</td>
			</tr>
		)
	} else {
		return (
			<tr>
				<td></td>
				<td>
					<div>
						<input
							type='text'
							value={todo.text}
							autoFocus={true}
							onBlur={() => {
								if(todo.text !== '') {
									changesEnd(onlineUser, projectId, todo.id)
								} else {
									removeTodo(onlineUser, projectId, todo.id)
								}
							}}
							onChange={evt => {
								changeText(onlineUser, projectId, todo.id, evt.target.value)
							}}
						/>
						<button>OK</button>
					</div>
				</td>
			</tr>
		)
	}
}

function StateDone({
	todo,
	onlineUser,
	projectId,
	toIN_PROGRESS,
	removeTodo
}) {
	return (
		<tr>
			<td></td>
			<td></td>
			<td>
				<div>
					<button
						onClick={() => {
							toIN_PROGRESS(onlineUser, projectId, todo.id)
						}}
					>
						{'<--'}
					</button>
					{todo.text}
					<button onClick={() => {
						removeTodo(onlineUser, projectId, todo.id)
					}}>DELETE</button>
				</div>
			</td>
		</tr>
	)
}

function ProjectTodo({
	todos,
	changeText,
	changesEnd,
	edit,
	onlineUser,
	projectId,
	toTODO,
	toIN_PROGRESS,
	toDONE,
	removeTodo,
}) {
	return (
		<div className='todo'>
			<table>
				<tbody>
					<tr>
						<th>TODO</th>
						<th>IN PROGRESS</th>
						<th>DONE</th>
					</tr>
					{todos.map(todo => {
						if (todo.state === 'TODO') {
							return (
								<StateTodo
									key={todo.id}
									todo={todo}
									changeText={changeText}
									changesEnd={changesEnd}
									edit={edit}
									onlineUser={onlineUser}
									projectId={projectId}
									toIN_PROGRESS={toIN_PROGRESS}
									removeTodo={removeTodo}
								/>
							)
						} else if (todo.state === 'IN_PROGRESS') {
							return (
								<StateInProgress
									key={todo.id}
									todo={todo}
									changeText={changeText}
									changesEnd={changesEnd}
									edit={edit}
									onlineUser={onlineUser}
									projectId={projectId}
									toTODO={toTODO}
									toDONE={toDONE}
									removeTodo={removeTodo}
								/>
							)
						} else if (todo.state === 'DONE') {
							return (
								<StateDone
									key={todo.id}
									todo={todo}
									onlineUser={onlineUser}
									projectId={projectId}
									toIN_PROGRESS={toIN_PROGRESS}
									removeTodo={removeTodo}
								/>
							)
						}
					})}
				</tbody>
			</table>
		</div>
	)
}

export default ProjectTodo