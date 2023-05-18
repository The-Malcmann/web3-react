import React, { useState, useEffect }  from "react";
import Container from "react-bootstrap/Container";
import "./Header.css";
import Web3 from 'web3';
import icon from "./images/logo.svg";

function HeaderBar() {

  
  const[wallet , setWallet] = useState("Connect Wallet");
 
 
useEffect(()=>{
connectWalle();

}, [])



const changeNetwork = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
        params: [{ chainId: Web3.utils.toHex(80001) }],
      });
      }
    catch (error) {
      console.error(error);
    }
  }
}



const connectWalle = async () => {
  // if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
   const  networkid = "421613";
    const accounts = await window.web3 .eth.getAccounts();

}

const connectWallet = async () => {
  // if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
   const  networkid = "421613";
  //  await web3.eth.net.setId(networkid);
    const accounts = await window.web3 .eth.getAccounts();
     changeNetwork();
    const account = accounts[0];
    setWallet(account.slice(0,4) + "..." + account.slice(-4));


}


  return (
    <div>
      <Container>
        <div className="d-flex justify-content-between align-items-center pt-3">
          <div>
            <img src={icon} style={{ width:"10rem"}} alt="logo" />
          </div>
          
          <div>
            <button onClick={connectWallet} className="contactBtn">{wallet}</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeaderBar;
