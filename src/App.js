import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './routes'

import AddEditClanMemberPage from './pages/AddEditClanMemberPage'
import ClanMemberPage from './pages/ClanMemberPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import SignUpPage from './pages/SignUpPage'
import Toolbar from './components/Toolbar'

function App() {
    return (
        <div>
            <Toolbar/>

            <Switch>
                <Route exact path={routes.home} component={HomePage} />
                <Route exact path={routes.login} component={LoginPage} />
                <Route exact path={routes.signUp} component={SignUpPage} />

                <Route exact path={routes.clanMember} component={ClanMemberPage} />
                <Route exact path={routes.editClanMember} component={AddEditClanMemberPage} />
                <Route exact path={routes.addClanMember} component={AddEditClanMemberPage} />

                <Route path='*' component={NotFoundPage} />
            </Switch>
        </div>
    )
}

export default App
