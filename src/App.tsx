import React, { useState } from 'react';
import AnalyticsDashboard from './AnalyticsDashboard';
import Login from './components/ Login';
import SignUp from './components/SignUp';

type View = 'login' | 'signup' | 'dashboard';

const App: React.FC = () => {
  const [view, setView] = useState<View>('login');

  if (view === 'login') {
    return (
      <Login
        onGoToSignUp={() => setView('signup')}
        onLoginSuccess={() => setView('dashboard')}
      />
    );
  }

  if (view === 'signup') {
    return (
      <SignUp
        onGoToLogin={() => setView('login')}
        onSignUpSuccess={() => setView('dashboard')}
      />
    );
  }

  return <AnalyticsDashboard />;
};

export default App;
