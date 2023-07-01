import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import loadingLogo from '../assets/mylogo2.png'

const AuthWrapper = ({children}) => {
    const {isLoading, error} = useAuth0()

    /*
    if(isLoading){
        return(
            <div className='loading'>
              <img className='load-logo' src={loadingLogo} alt="loading-logo" />
            </div>
        )
    }
    if(error){
        return(
            <h1>{error.message}</h1>
        )
    }
    */
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthWrapper
