import "./App.css";
import CustomEmojiPicker from "./CustomEmojiPicker";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomEmojiPicker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
