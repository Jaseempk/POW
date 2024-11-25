import { http, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";

import { ConnectKitProvider, getDefaultConfig } from "connectkit";

export const config = createConfig(
  getDefaultConfig({
    appName: "NZ-Pool",
    chains: [baseSepolia],
    transports: {
      [baseSepolia.id]: http(
        "https://base-sepolia.g.alchemy.com/v2/txntl9XYKWyIkkmj1p0JcecUKxqt9327"
      ),
    },
    walletConnectProjectId: "b1647c589ac18a28722c490d2f840895",
  })
);
