import { useState, useEffect } from "react";
import Header from "../Components/Header";
import "../Styles/buynow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
import contratctAbi from "../contract/abi";

const contartctAddress = "0x84197b4eF797f570C60796527A6E7d08cb0ffF8B";
const ownerAccount = "0x4162DaAa49Cb714d2A059331E3e59e30e7f6f5Ce";

const Buynow = () => {
  const [btnState, setbtnState] = useState("Connect To Metamask");
  const [accountAddress, setAccountAddress] = useState(
    "0x0000000000000000000000000"
  );
  const [accountBalance, setAccountBalance] = useState("0.00");
  const [totalTokens, setTotalTokens] = useState(0);
  const [inputMagnum, setInputMagnum] = useState("");
  const [ownTokens, setOwnTokens] = useState(0);
  const [onlyOwner, setonlyOwner] = useState(false);
  const [contractBalance, setcontractBalance] = useState(0);

  var myContratct;
  var provider;
  var signer;

  // ------------------- Handling Account Changing -------------------
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountChange);
      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountChange);
      };
    }
  });

  // ----------------- Handle Account Change ------------------
  const handleAccountChange = async () => {
    if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccountAddress(accounts[0]);

      var balance = await provider.getBalance(accounts[0]);
      balance = ethers.utils.formatEther(balance);
      setAccountBalance(balance);

      setbtnState("Connected");
      toast.success(`Connected To ${accounts[0]}`, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      myContratct = new ethers.Contract(contartctAddress, contratctAbi, signer);

      const totalTokenss = await myContratct.TotalMagnumToken();
      setTotalTokens(totalTokenss.toString());

      const OwnTokenzz = await myContratct.checkOwnTokens(accounts[0]);
      setOwnTokens(OwnTokenzz.toString());

      if (accounts[0] === ownerAccount.toLowerCase()) {
        setonlyOwner(true);
        var contractBal = await myContratct.BlanceOfContract();
        contractBal = ethers.utils.formatEther(contractBal);
        setcontractBalance(contractBal);
      } else {
        setonlyOwner(false);
      }
    } else {
      console.log("not connected !!");
      return;
    }
  };

  // ------------------- Connect To Metamask -------------------
  const metaConnection = async () => {
    if (window.ethereum) {
      handleAccountChange();
    } else {
      toast.error("Install Metamask First !!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // ------------------- Buying Token  -------------------
  const buyBtn = async () => {
    if (!window.ethereum) {
      toast.error("Install Metamask First !!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (inputMagnum === "") {
      toast.error("Please Enter Valid Token Amount", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      myContratct = new ethers.Contract(contartctAddress, contratctAbi, signer);

      const Tempvalue = inputMagnum * 0.01;
      console.log(Tempvalue);
      const options = {
        value: ethers.utils.parseEther(Tempvalue.toString()),
      };
      await myContratct.buyToken(inputMagnum, options);
    }
  };

  // ------------------- Transfering Balance -------------------
  const TransferBalance = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      myContratct = new ethers.Contract(contartctAddress, contratctAbi, signer);
      await myContratct.TransferBalance();
      toast.success("Successfully Transfered !!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <div className="BuyMain">
        <div className="MainBuyDiv">
          <h2>Current Price</h2>
          <h2> 1 magnum = 0.01 ETH </h2>
          <h2>Total Tokens : {totalTokens}</h2>
          {onlyOwner ? <h2>Contract Balance : {contractBalance}</h2> : null}

          <div className="btnGroup">
            <button
              id="ctm"
              onClick={metaConnection}
              className={btnState === "Connected" ? "connected" : "error"}
            >
              {btnState}
            </button>
            {onlyOwner ? (
              <button id="transferBtn" onClick={TransferBalance}>
                Transfer Balance
              </button>
            ) : null}

            <ToastContainer
              theme="colored"
              toastStyle={{
                fontSize: "14px",
                color: "#FFFFFF",
                fontFamily: "sans-serif",
              }}
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
          <div className="infoDiv">
            <h3>Account No : {accountAddress}</h3>
            <h3>Amount : {accountBalance} ETH</h3>
            <h3>You Own {ownTokens} Magnum Tokens</h3>
            <div className="BuyInput">
              <input
                type="number"
                placeholder="Enter amount"
                id="inputMag"
                min="1"
                onChange={(e) => setInputMagnum(e.target.value)}
              />
              <button id="buyBtn" onClick={buyBtn}>
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buynow;
