import WalletConnectProvider from "@walletconnect/web3-provider";

const provider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
});

await provider.enable();
const web3Provider = new providers.Web3Provider(provider);

provider.on("accountsChanged", (accounts) => {
  console.log(accounts);
});

provider.on("chainChanged", (chainId) => {
  console.log(chainId);
});

provider.on("disconnect", (code, reason) => {
  console.log(code, reason);
});

const result = await provider.request(payload);

await provider.disconnect();
