import React from 'react'
import GlobalStyles from './style/globals'

import CropImage from './components/CropImage'

function App() {
  return (
    <div>
      <GlobalStyles />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#7159c1',
        }}
      >
        <CropImage />
      </div>
    </div>
  )
}

export default App
