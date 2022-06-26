// import "./App.css";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/ethereum-provider";
import { providers } from "ethers";
import { useState } from "react";


function WalletConnect() {
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState();
  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
        },
      },
    },
  });

  function accountsChanged(accounts) {
    console.log("accountsChanged", accounts);
    setAddress(accounts[0]);
  }

  function reset() {
    console.log("reset");
    setAddress("");
    setProvider(undefined);
    web3Modal.clearCachedProvider();
  }

  async function connect() {
    const web3Provider = await web3Modal.connect();

    web3Provider.on("accountsChanged", accountsChanged);
    web3Provider.on("disconnect", reset);

    const accounts = await web3Provider.enable();
    setAddress(accounts[0]);

    const provider = new providers.Web3Provider(web3Provider);
    setProvider(provider);
  }

  return (
    <div>
        {address ? (
          <>
            <div>Account{address}</div>
            <button onClick={reset}>Disconnect</button>
          </>
        ) : (
          <button onClick={connect}>Connect</button>
        )}
    <div>

        {/* <Dashboard /> */}

    </div>
    </div>
  );
}

export default WalletConnect;
