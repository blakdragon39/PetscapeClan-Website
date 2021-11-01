import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './routes'

import Toolbar from './components/Toolbar'
import ClanMemberPage from './pages/ClanMemberPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import SignUpPage from './pages/SignUpPage'

function App() {
    return (
        <div>
            <Toolbar/>

            <Switch>
                <Route exact path={routes.home} component={HomePage} />
                <Route exact path={routes.login} component={LoginPage} />
                <Route exact path={routes.signUp} component={SignUpPage} />

                <Route path={routes.clanMember} component={ClanMemberPage} />

                <Route path='*' component={NotFoundPage} />
            </Switch>
        </div>
    )
}

export default App
