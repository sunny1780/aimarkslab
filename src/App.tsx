import React, { useState } from 'react';
import AnalyticsDashboard from './AnalyticsDashboard';
import Login from './components/ Login';
import SignUp from './components/SignUp';
import Home from './pages/Home';

type View = 'home' | 'login' | 'signup' | 'dashboard';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  if (view === 'home') {
    return (
      <Home onLoginClick={() => setView('login')} />
    );
  }

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
