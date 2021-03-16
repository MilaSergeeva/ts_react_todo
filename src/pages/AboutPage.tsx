import React from 'react'
import { useHistory } from 'react-router-dom'
const AboutPage: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>Info page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio commodi fugiat quis similique id expedita? Totam, error eum aliquid odit soluta id, eligendi quia ducimus maiores, tenetur fuga laudantium. Temporibus.</p>
      <button className='btn blue-grey' onClick={() => history.push('/')}>To todos list</button>
    </>
  )
}


export default AboutPage;