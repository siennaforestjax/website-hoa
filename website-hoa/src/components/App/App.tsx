import './App.css';
import HeaderBar from '../HeaderBar/HeaderBar';
import BoardPage from '../BoardPage/BoardPage';
import theBoard from '../../boardMembers.json';
import theDocuments from '../../hoaDocuments.json';
import NeighborhoodPage from '../NeighborhoodPage/NeighborhoodPage';
import DocumentsPage from '../DocumentsPage/DocumentsPage';
import EventsPage from '../EventsPage/EventsPage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <HeaderBar />
      </header>
      <main>
        {/* <EventsPage /> */}
        <DocumentsPage documents={theDocuments.documents} />
      </main>
    </div>
    // </Router>

    // return (
    //   <Router>
    //     <div className="App">
    //       <header>
    //         <HeaderBar />
    //       </header>
    //       <main onClick={tellNavigationToClose}>
    //         <Routes>
    //           <Route path="/documents">
    //             <DocumentsPage documents={theDocuments.documents} />
    //           </Route>
    //           <Route path="/neighborhood">
    //             <NeighborhoodPage />
    //           </Route>
    //           <Route path="/board">
    //             <BoardPage boardMembers={theBoard.boardMembers} />
    //           </Route>
    //         </Routes>
    //         {/* <Route path="/events">
    //         <EventsPage events={theEvents.events}/>
    //       </Route> */}
    //       </main>
    //     </div>
    //   </Router>
  );
}

export default App;
