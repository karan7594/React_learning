import React from 'react'
import { Button } from '../../../components'

const Buttons = () => {
  return (
    <>
   
       <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
      }}
    >
      <tbody>
        <tr>
          <td style={{ width: '25%', padding: '10px' }}>
            <Button variant="success">Success Button</Button>
          </td>
          <td style={{ width: '25%', padding: '10px' }}>
            <Button variant="alert">Alert Button</Button>
          </td>
          <td style={{ width: '25%', padding: '10px' }}>
            <Button variant="amber">Amber Button</Button>
          </td>
          <td style={{ width: '25%', padding: '10px' }}>
            <Button variant="error">Error Button</Button>
          </td>
        </tr>
      </tbody>
    </table>
    </>
   
  )
}

export default Buttons
