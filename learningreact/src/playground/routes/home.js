import React from 'react'
import styled from 'styled-components'


const Display=styled.div`
    background-color:white;
    color:black;
    padding:2rem;
    height:100vh;
    font-family: initial;
`
const Home = (props) => {
    
  return (
    <div>
      <Display>
        <h1>Welcome</h1>
        <ul>
            <li>
                <p>this is the list of compoents</p>
            </li>
        </ul>
      </Display>
    </div>
  )
}

export default Home
