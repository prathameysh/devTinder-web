import { useState } from 'react'
import './App.css'
import Login from './Login'
import Profile from './Profile'
import Body from './Body'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './Feed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="/" element={<Feed/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App
