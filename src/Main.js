import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";

import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import { getUser, logout } from "./services/userService"
import App from "./App";

export function Main (props) {
    const [ userState, setUserState ] = useState({ user: getUser() });
    function handleSignupOrLogin() {
      setUserState({ user: getUser() });
      props.history.push('/dashboard');
    }
  
    function handleLogout() {
      logout();
      setUserState({ user: null });
      props.history.push('/');
    }
  
    return (
      <div className="App">
       <Header user={userState.user} handleLogout={handleLogout} />
       <Switch>
       {/* // inside switch you need a route for each page  */}
         <Route exact path='/' render={(props) =>
         <App />
         } />
         <Route exact path='/dashboard' render={(props) =>
          getUser() ? 
            <DashboardPage />
            :
            <Redirect to="/login" />
         } />
        <Route exact path='/login' render={(props) =>
         <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
         } />
       <Route exact path='/signup' render={(props) =>
          <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
         } />
      
     </Switch>
      <Footer />
      </div>
    );
  }

export default Main;