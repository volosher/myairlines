import React from 'react';
import 'bootstrap/scss/bootstrap.scss'

function App() {
  return (
    <div className="App">
        <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
        </div>
        <button type="button" className="btn btn-primary">
            Notifications <span className="badge bg-secondary">4</span>
        </button>
    </div>
  );
}

export default App;
