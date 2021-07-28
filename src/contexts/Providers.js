import React from 'react'

// contexts
import GlobalContextProvider from 'contexts/GlobalContext'

// style
import GlobalStyle from 'style/GlobalStyle'

const Providers = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </>
  )
}

export default Providers
