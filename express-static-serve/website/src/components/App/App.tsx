import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar';
import BoardPage from '../BoardPage/BoardPage';
import NeighborhoodPage from '../NeighborhoodPage/NeighborhoodPage';
import DocumentsPage from '../DocumentsPageBasic/DocumentsPage';
import EventsPage from '../EventsPage/EventsPage';
import theBoard from '../../boardMembers.json';
import theEvents from '../../hoaEvents.json';
import Footer from '../Footer/Footer';
import YardOfTheMonthPage from '../YardOfTheMonthPage/YardOfTheMonthPage';
import classes from './App.module.css';

function App() {
  return (
    <Router>
      <div className={classes.App}>
        <header>
          <HeaderBar />
        </header>
        <div>
          <main>
            <div className={classes.pageWrapper}>
            <Routes>
              <Route path="/" element={<NeighborhoodPage />} />
              <Route
                path="/documents"
                element={<DocumentsPage />}
              />
              <Route
                path="/board"
                element={<BoardPage boardMembers={theBoard.boardMembers} />}
              />
              <Route
                path="/events"
                element={<EventsPage events={theEvents.events} />}
              />
              <Route path="/yotm" element={<YardOfTheMonthPage />} />
            </Routes>
            </div>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
