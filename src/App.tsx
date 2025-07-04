import { useState } from "react";
function App() {
  const [game, setGame] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const increaseItem = () =>
    setGame({
      ...game,
      items: game.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });

  return (
    <>
      <ul>
        {game.items.map((item) => (
          <li>
            <span>
              {item.title} : {item.quantity}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={increaseItem}>increase</button>
    </>
  );
}

export default App;
