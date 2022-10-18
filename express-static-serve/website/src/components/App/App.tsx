import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar';
import BoardPage from '../BoardPage/BoardPage';
import NeighborhoodPage from '../NeighborhoodPage/NeighborhoodPage';
import DocumentsPage from '../DocumentsPageBasic/DocumentsPage';
import EventsPage from '../EventsPage/EventsPage';
import theBoard from '../../boardMembers.json';
import theEvents from '../../hoaEvents.json';
import theFacts from '../../facts.json';
import Footer from '../Footer/Footer';
import YardOfTheMonthPage from '../YardOfTheMonthPage/YardOfTheMonthPage';
import classes from './App.module.css';
import RecommendationPage from '../RecommendationPage/RecommendationPage';

function App() {
  return (
    <Router>
      <div className={classes.App}>
        <header className={classes.header}>
          <HeaderBar />
        </header>
        <main className={classes.main}>
          <div className={classes.pageWrapper}>
            <Routes>
              <Route
                path='/'
                element={<NeighborhoodPage facts={theFacts.facts} />}
              />
              <Route path='/documents' element={<DocumentsPage />} />
              <Route
                path='/board'
                element={
                  <BoardPage
                    boardMembers={theBoard.boardMembers}
                    subcommittees={theBoard.subcommittees}
                  />
                }
              />
              <Route
                path='/events'
                element={<EventsPage events={theEvents.events} />}
              />
              <Route path='/yotm' element={<YardOfTheMonthPage />} />
              <Route path='/recommendations' element={<RecommendationPage />} />
            </Routes>
          </div>
        </main>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
