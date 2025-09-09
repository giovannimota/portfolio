import { Content } from '../types'

export const USE_STATE_CONTENT: Content[] = [
  {
    id: 'title',
    text: 'useState'
  },
  {
    id: 'description',
    text: 'Declare a variable (state variable) that can be updated directly.'
  },
  {
    id: 'code',
    code: ` // Declaration\n const [state, setState] = useState()\n\n // Updating a value\n setState(newValue)\n\n // Reading the state\n console.log(state)`
  },
  {
    id: 'description',
    text: 'Another example:'
  },
  {
    id: 'code',
    code: ` // Declaration\n const [value, setValue] = useState()\n\n // Updating a value\n setValue(newValue)\n\n // Reading the state\n console.log(value)`
  }
]
