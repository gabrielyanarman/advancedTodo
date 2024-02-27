import './App.css';
import { useState } from 'react';
import AppBody from './components/AppBody';

function App() {

  const [users, setUsers] = useState([])


 let onlineUser = users.filter((user => user.isOnline === true))[0]

function removeProject(onlineUser,projectId) {
	setUsers(
		users.map((user) => {
			if(user.id !== onlineUser.id) {
				return user
			} else {
				return {
					...user,
					projects: user.projects.filter((project) => project.id !== projectId).map((project,index) => {
						return {
							...project,
							name: `Project ${index + 1}`
						}
					})				
				}
			}
		})
	)
}

function removeTodo(onlineUser, projectId, todoId) {
  setUsers(
		users.map(user => {
			if (user.id !== onlineUser.id) {
				return user
			} else {
				return {
					...user,
					projects: user.projects.map(project => {
						if (project.id !== projectId) {
							return project
						} else {
							return {
								...project,
								todos: project.todos.filter(todo => todo.id !== todoId),
							}
						}
					}),
				}
			}
		})
	)
}

function toTODO(onlineUser, projectId, todoId) {
			setUsers(
				users.map(user => {
					if (user.id !== onlineUser.id) {
						return user
					} else {
						return {
							...user,
							projects: user.projects.map(project => {
								if (project.id !== projectId) {
									return project
								} else {
									return {
										...project,
										todos: project.todos.map(todo => {
											if (todo.id !== todoId) {
												return todo
											} else {
												return {
													...todo,
													state: 'TODO',
												}
											}
										}),
									}
								}
							}),
						}
					}
				})
			)
		}

function toIN_PROGRESS(onlineUser, projectId, todoId) {
		setUsers(
			users.map(user => {
				if (user.id !== onlineUser.id) {
					return user
				} else {
					return {
						...user,
						projects: user.projects.map(project => {
							if (project.id !== projectId) {
								return project
							} else {
								return {
									...project,
									todos: project.todos.map(todo => {
										if (todo.id !== todoId) {
											return todo
										} else {
											return {
												...todo,
												state: 'IN_PROGRESS',
											}
										}
									}),
								}
							}
						}),
					}
				}
			})
		)
	}

function toDONE(onlineUser, projectId, todoId) {
			setUsers(
				users.map(user => {
					if (user.id !== onlineUser.id) {
						return user
					} else {
						return {
							...user,
							projects: user.projects.map(project => {
								if (project.id !== projectId) {
									return project
								} else {
									return {
										...project,
										todos: project.todos.map(todo => {
											if (todo.id !== todoId) {
												return todo
											} else {
												return {
													...todo,
													state: 'DONE',
												}
											}
										}),
									}
								}
							}),
						}
					}
				})
			)
		}

function edit(onlineUser, projectId, todoId) {
			setUsers(
				users.map(user => {
					if (user.id !== onlineUser.id) {
						return user
					} else {
						return {
							...user,
							projects: user.projects.map(project => {
								if (project.id !== projectId) {
									return project
								} else {
									return {
										...project,
										todos: project.todos.map(todo => {
											if (todo.id !== todoId) {
												return todo
											} else {
												return {
													...todo,
													isWriting: true,
												}
											}
										}),
									}
								}
							}),
						}
					}
				})
			)
		}

function changesEnd(onlineUser, projectId, todoId) {
		setUsers(
			users.map(user => {
				if (user.id !== onlineUser.id) {
					return user
				} else {
					return {
						...user,
						projects: user.projects.map(project => {
							if (project.id !== projectId) {
								return project
							} else {
								return {
									...project,
									todos: project.todos.map(todo => {
										if (todo.id !== todoId) {
											return todo
										} else {
											return {
												...todo,
												isWriting: false,
											}
										}
									}),
								}
							}
						}),
					}
				}
			})
		)
	}

  function changeText(onlineUser,projectId,todoId,newText) {
    setUsers(
      users.map((user) => {
        if(user.id !== onlineUser.id) {
          return user
        } else {
          return {
            ...user,
            projects: user.projects.map((project) =>{
              if(project.id !== projectId) {
                return project
              } else {
                return {
                  ...project,
                  todos: project.todos.map((todo) => {
                    if(todo.id !== todoId) {
                      return todo
                    } else {
                      return {
                        ...todo,
                        text: newText
                      }
                    }
                  })
                }
              }
            })
          }
        }
      })
    )
  }

  function addTodo(onlineUser,projectId,todo) {
    setUsers(
      users.map((user) => {
        if(user.id !== onlineUser.id) {
          return user
        } else {
          return {
            ...user,
            projects: user.projects.map((project) => {
              if(project.id !== projectId) {
                return project
              } else {
                return {
                  ...project,
                  todos: [todo,...project.todos]
                }
              }
            })
          }
        }
      })
    )
  }

  function openProject(onlineUser,projectId) {
    setUsers(users.map((user) => {
      if(user.id !== onlineUser.id) {
        return user
      } else {
        return {
          ...user,
          projects: user.projects.map((project) => {
            if (project.id !== projectId) {
              return project
						} else {
              return {...project,isOpen: true}
            }
          })
        }
      }
    }))
  }

  
  function closeProject(onlineUser, projectId) {
		setUsers(
			users.map(user => {
				if (user.id !== onlineUser.id) {
					return user
				} else {
					return {
						...user,
						projects: user.projects.map(project => {
							if (project.id !== projectId) {
								return project
							} else {
								return { ...project, isOpen: false }
							}
						}),
					}
				}
			})
		)
	}

  function addUser(user) {
    setUsers([
      ...users,
      user
    ])
  }

  function addProject(id,project) {
    setUsers(
      users.map((user) => {
        if(user.id === id) {
          return {...user,projects:[...user.projects,project]}
        }
        return user
      })
    )
  }

  function logIn(id) {
		setUsers(
      users.map((user) => {
        if(user.id === id) {
          return {
            ...user,isOnline: true
          }
        }
        return user
      })
    )
	}

  function logOut(id) {
		setUsers(
      users.map((user) => {
        if(user.id === id) {
          return {
            ...user,isOnline: false
          }
        }
        return user
      })
    )
	}

  return (
		<div className='App'>
			<AppBody
				onlineUser={onlineUser}
				logOut={logOut}
				logIn={logIn}
				addUser={addUser}
				users={users}
				addProject={addProject}
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

export default App;

