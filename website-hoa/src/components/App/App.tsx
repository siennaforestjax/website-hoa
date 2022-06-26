import './App.css';
import HeaderBar from '../HeaderBar/HeaderBar';
import BoardPage from '../BoardPage/BoardPage';
import theBoard from '../../boardMembers.json';
import theDocuments from '../../hoaDocuments.json';
import NeighborhoodPage from '../NeighborhoodPage/NeighborhoodPage';
import DocumentsPage from '../DocumentsPage/DocumentsPage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  function tellNavigationToClose() {
    console.log('TODO: I should update this to tell Navigation to close');
  }

  return (
    <Router>
    <div className="App">
      <header>
        <HeaderBar />
      </header>
      <main onClick={tellNavigationToClose}>
        <Route path="/documents">
          <DocumentsPage documents={theDocuments.documents} />
        </Route>
        <Route path="/neighborhood">
          <NeighborhoodPage />
        </Route>
        <Route path="/board">
          <BoardPage boardMembers={theBoard.boardMembers}/>
        </Route>
        {/* <Route path="/events">
          <EventsPage events={theEvents.events}/>
        </Route> */}
        
      </main>
    </div>
    </Router>
  );
}

export default App;
