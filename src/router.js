import React from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import Login from './components/login/login'
import App from './App'
import Admin from './Admin.js'
import DtTable from './pages/table/index'
export default class BRouter extends React.Component{
     render(){
         return(
             <HashRouter>
                <App>
                  <Switch>
                      <Route path='/login' component={Login}/>
                      {/* <Route path='/common' component={}/> */}
                      <Route path='/' render={()=>
                            <Admin>
                                 <Switch>
                                      <Route path='/admin/table' component={DtTable}/>  
                                 </Switch>
                            </Admin>
                    }/>
                  </Switch>
                  </App>
             </HashRouter>
         )
     }
}