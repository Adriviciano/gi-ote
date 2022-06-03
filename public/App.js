import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          Guiñote
        </h1>
      </header>
      <body className="App-body">

        <div className="App-body-deckborder"/>
        <div className="App-body-fullDeck"/>
        <div className="App-body-triumph"/>
        <div id="iaPlayZone" className="App-body-PlayZone"/>
        <div id="playerPlayZone" className="App-body-PlayZone"/>
        <div id="iaWonZone" className="App-body-WonZone"/>
        <div id="playerWonZone" className="App-body-WonZone"/>
        
        <div id="playerDeck" className="App-body-deck">
          <div className="App-body-deck-card"/>
          <div className="App-body-deck-card"/>
          <div className="App-body-deck-card"/>
          <div className="App-body-deck-card"/>
          <div className="App-body-deck-card"/>
          <div className="App-body-deck-card"/>
        </div>

        <div id="iaDeck" className="App-body-deck">
        <div className="App-body-deck-card"/>
          <div className="App-body-deck-card"/>
          <div className="App-body-deck-card"/>
          <div className="App-body-deck-card"/>
          <div className="App-body-deck-card"/>
          <div className="App-body-deck-card"/>
        </div>

      </body>
    </div>
  );
}

export default App;
