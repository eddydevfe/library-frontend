import { useState } from 'react'

const useField = (type, name) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    content: {
      value,
      type,
      onChange,
      name,
      id: name
    },
    reset
  }
}

export { useField }