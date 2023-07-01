import React from 'react'

const AuthWrapper = ({children}) => {  

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
