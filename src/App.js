import { useState } from 'react';
import { Stage, Layer, Circle, Text } from 'react-konva';
import './App.css';

const INITIAL_STATE = [];

function App() {
  const [stars, setStars] = useState(INITIAL_STATE);

  const handleDragStart = (event) => {
    const id = event.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };

  const handleDragEnd = (event) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  const handleClick = (event) => {
    debugger
    const a = event.target;
    setStars([
      ...stars,
      {
        id: `${event.target.pointerPos.x}---${event.target.pointerPos.y}`,
        x: event.target.pointerPos.x,
        y: event.target.pointerPos.y,
        isDragging: false,
      }
    ])
  };

  return (
    <div className="App">
      <Stage width={window.innerWidth} height={window.innerHeight} onClick={handleClick}>
        <Layer>
          <Text text="Try to click" />
          {stars.map((star) => (
            <Circle
              key={star.id}
              id={star.id}
              x={star.x}
              y={star.y}
              radius={10}
              opacity={0.8}
              fill="black"
              numPoints={5}
              draggable
              scaleX={star.isDragging ? 1.1 : 1}
              scaleY={star.isDragging ? 1.1 : 1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
