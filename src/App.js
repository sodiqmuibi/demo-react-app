import React from 'react';
import { Route, Routes } from 'react-router-dom'
import AllMeetUps from './route-pages/AllMeetUps'
import NewMeetUps from './route-pages/NewMeetUps';
import Favorites from './route-pages/Favorites'
import Layout from './components/layout/Layout';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/' exact element={<AllMeetUps />}></Route>
          <Route path='/new-meet-ups' exact element={<NewMeetUps />}></Route>
          <Route path= '/favorite' exact element={<Favorites />}></Route>
        </Routes>
      </Layout> 
  )
}

export default App;
