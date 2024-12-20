import "./App.css";
import CustomEmojiPicker from "./CustomEmojiPicker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


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
