import React from 'react';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';

const App = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <SignUp />
      <Login />
    </div>
  );
};

export default App;
