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
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <HeaderBar />
        </header>
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
