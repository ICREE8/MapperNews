// App.jsx
import React from "react";
import { WagmiProvider, RainbowKitProvider, useAccount } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import { chains, client } from "./wagmi";
import Map from "./Map.jsx";

function App() {
  return (
    <WagmiProvider client={client}>
      <RainbowKitProvider chains={chains}>
        {isConnected ? (
          <div>Connected to {address}</div>
        ) : (
          <div>Not connected</div>
        )}
        <Map />
      </RainbowKitProvider>
    </WagmiProvider>
  );
}

export default App;
