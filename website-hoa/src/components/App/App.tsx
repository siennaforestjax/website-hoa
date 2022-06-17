import './App.css';
import HeaderBar from '../HeaderBar/HeaderBar';
import BoardPage from '../BoardPage/BoardPage';
import theBoard from '../../boardMembers.json';

function App() {
  function tellNavigationToClose() {
    console.log('TODO: I should update this to tell Navigation to close');
  }

  return (
    <div className="App">
      <header>
        <HeaderBar />
      </header>
      <main onClick={tellNavigationToClose}>
        <BoardPage boardMembers={theBoard.boardMembers} />
      </main>
    </div>
  );
}

export default App;
