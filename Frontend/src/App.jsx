import React from 'react';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import OtpValidation from './components/auth/OtpValidation';
import Dashboard from './components/user/Dashboard';

const App = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      {/* <SignUp />
      <OtpValidation />
      <Login /> */}
      <Dashboard />
    </div>
  );
};

export default App;
