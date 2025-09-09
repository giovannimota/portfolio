import { Content } from '../types'

export const USE_REDUCER_CONTENT: Content[] = [
  {
    id: 'title',
    text: 'useReducer'
  },
  {
    id: 'description',
    text: 'Declare a state with a reducer function, where updates are made by dispatching actions (instead of setting the value directly).'
  },
  {
    id: 'code',
    code: `// Declaration\nconst [state, dispatch] = useReducer(reducer, initialState)\n\n// Updating a value (dispatching an action)\ndispatch({ type: 'ACTION_TYPE', payload: newValue })\n\n// Reading the state\nconsole.log(state)
`
  },
  {
    id: 'description',
    text: 'Another example:'
  },
  {
    id: 'code',
    code: `// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }\n
    case 'decrement':
      return { count: state.count - 1 }\n
    default:
      return state\n
  }
}\n
// Declaration\nconst [state, dispatch] = useReducer(reducer, { count: 0 })\n
// Updating the state\n dispatch({ type: 'increment' })\n
// Reading the state\n console.log(state.count)`
  }
]
