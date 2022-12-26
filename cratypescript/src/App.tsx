import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footers/AppFooter';
import HomePageHeader from './components/Headers/HomePageHeader';
import Navigation from './components/Headers/Navigation';
import TabContent from './components/Tabs/TabContent';
import { RootState } from './store';
import {linnks} from "./templates/links"
function App() {
  const state = useSelector((state: RootState) => state)
  console.log(state, linnks)
  return (
    <>
    <Navigation/>
    <div className="App">
      {document.location.pathname === "/home" || document.location.pathname === "/" ? <HomePageHeader /> :null}
      {Array.isArray(linnks) ? linnks.map(link => {
        if(document.location.pathname === link.link){
        return <TabContent key={`${link.displayName}-tab-content`} tab={link}/>
        } else {
          return null
        } 
      }): null}
    </div>
    <Footer/>
    </>
  );
}

export default App;
