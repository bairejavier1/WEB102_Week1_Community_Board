import React from 'react';
import events from './data/events';
import Card from './components/Card';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>🌟 Community Resource Board</h1>
        <p>Explore helpful resources and upcoming events!</p>
      </header>

      <div className="card-grid">
        {events.map(event => (
          <Card
            key={event.id}
            title={event.title}
            description={event.description}
            image={event.image}
            link={event.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
