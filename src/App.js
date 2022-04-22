import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Web3 from "web3/dist/web3.min";

function App() {
  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      web3.eth.requestAccounts().then(console.log);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
