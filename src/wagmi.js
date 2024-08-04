import { createClient, configureChains, defaultChains } from "wagmi";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

// Configure chains & providers with the Alchemy provider.
import { alchemyProvider } from "wagmi/providers/alchemy";

const { provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }),
]);

const { connectors } = getDefaultWallets({
  appName: "Web3 News Mapper",
  chains: defaultChains,
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { chains, client };
