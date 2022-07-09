import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar';
import BoardPage from '../BoardPage/BoardPage';
import NeighborhoodPage from '../NeighborhoodPage/NeighborhoodPage';
import DocumentsPage from '../DocumentsPage/DocumentsPage';
import EventsPage from '../EventsPage/EventsPage';
import theBoard from '../../boardMembers.json';
import theDocuments from '../../hoaDocuments.json';
import theEvents from '../../hoaEvents.json';
import classes from './App.module.css';
import Footer from '../Footer/Footer';
import CelebrationPage from '../CelebrationPage/CelebrationPage';

function App() {
  return (
    <Router>
      <div className={classes.App}>
        <header>
          <HeaderBar />
        </header>
        <div className={classes.ScrollableContent}>
          <main>
            <Routes>
              <Route path="/" element={<NeighborhoodPage />} />
              <Route
                path="/documents"
                element={<DocumentsPage documents={theDocuments.documents} />}
              />
              <Route
                path="/board"
                element={<BoardPage boardMembers={theBoard.boardMembers} />}
              />

              <Route
                path="/events"
                element={<EventsPage events={theEvents.events} />}
              />
              <Route path="/yotm" element={<CelebrationPage />} />
            </Routes>
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
