import { useEffect, useState, useCallback} from "react";
import { ethers } from "ethers";
import Candidate from "./Components/Candidate";
import abi from "./ContractABI/Voting.json";
import "./App.css";

function App() {
  const [account, setAccount] = useState("None");
  const [contract, setContract] = useState(null);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const connect = async () => {
      const { ethereum } = window;

       if (!ethereum) {
        alert("Install MetaMask");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        setAccount(accounts[0]);

        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();

        const contract = new ethers.Contract(
          "0x3630Be694CBFD057be0A75c7823351046d003f3e",
          abi.abi,
          signer
        );

        setContract(contract);
      }
    };

    connect();
  }, []);

   // 📥 Get candidates
  const getCandidates = useCallback(async () => {
    if (!contract) return;

    const data = await contract.getCandidates();
    setCandidates(data);
  }, [contract]);

  // 🔁 Run when contract is ready
  useEffect(() => {
    if (contract) {
      getCandidates();
    }
  }, [contract, getCandidates]);

  // 🗳️ Vote function
  const vote = async (index) => {
    if (!contract) return;

    const tx = await contract.vote(index);
    await tx.wait();

    getCandidates(); // refresh UI
  };

  return (
    <div>
      <h2>Connected: {account}</h2>

      <h3>Candidates</h3>
      {candidates.map((candidate, index) => (
        <Candidate
         key={index}
         name={candidate.name}
         votes={candidate.voteCount.toString()}
         onVote={() => vote(index)}
        />
      ))}
    </div>
  );  
}

export default App;