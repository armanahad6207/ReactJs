import Square from './Square';

function App() {
  return (
    <>
      <div className="board">
        <div className="board-row">
          <Square value={0} />
          <Square value={2} />
          <Square value={3} />
        </div>
        <div className="board-row">
          <Square value={4} />
          <Square value={5} />
          <Square value={0} />
        </div>
        <div className="board-row">
          <Square value={6} />
          <Square value={7} />
          <Square value={8} />
        </div>
      </div>
    </>
  );
}

export default App;
