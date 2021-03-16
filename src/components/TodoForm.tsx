import React, { useRef } from 'react'
// import { useState } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null)


  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) =>  {
    if  (event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      // setTitle('')
    }

  }
  return (
<div className="input-field mt2">
    <input
      // onChange={changeHandler}
      // value={title}
      ref={ref}
      type="text"
      name=""
      id="title"
      placeholder='add todo'
      onKeyPress={keyPressHandler}
    />
    <label htmlFor="title" className='active'>What to do?</label>
</div>
  )
}

export default TodoForm;