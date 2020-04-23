import * as React from 'react'
import { useContext } from 'react'

import { ProfileContext } from '@fwrlines/ds'

import { Link } from 'react-router-dom'

//export default () => <h2>Wks</h2>

export default ({ props }) => {

  const {
    currentUserData,
    logoutPath
  } = useContext(ProfileContext)
  
  console.log('user', currentUserData)

  return (
    <>
      { !currentUserData ?
        'You are not connected' :
        <>
          <h1>
You are
            { currentUserData.email }
          </h1>
          <Link to={logoutPath}>Logout</Link>
        </>

      }
    </>

  )
}