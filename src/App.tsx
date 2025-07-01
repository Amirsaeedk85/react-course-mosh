import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alertVisible, setAlertVisilbe] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisilbe(false)}>
          Hey <p>Hello World</p>
        </Alert>
      )}
      <Button color="primary" buttonClicked={() => setAlertVisilbe(true)}>
        Button
      </Button>
    </div>
  );
}

export default App;
screenLeft;
