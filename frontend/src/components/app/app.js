import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';

import Routes from '../../routes/Routes';

const App = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    localStorage.getItem('profile') != null && setIsSignIn(true);
  }, []);

  return (
    <CssBaseline>
      <Routes isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
    </CssBaseline>
  )
}

export default App;