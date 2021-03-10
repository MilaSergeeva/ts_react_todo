import React, { useState } from 'react'

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');

  return (
<div className="input-field mt2">
    <input onChange={changeHandler} value={title} type="text" name="" id="title" placeholder='add todo'/>
    <label htmlFor="title" className='active'>What to do?</label>
</div>
  )
}

export default TodoForm;