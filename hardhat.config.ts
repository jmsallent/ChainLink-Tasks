import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "./tasks/index"

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      forking: {
        url: "https://polygon-mainnet.g.alchemy.com/v2/TinKtBYE9KobSlqSTdTYqyNfxCXEOoAW",
      }
    },
    polygon:{
      url: "https://polygon-mainnet.g.alchemy.com/v2/TinKtBYE9KobSlqSTdTYqyNfxCXEOoAW"
    }
  },
  solidity: "0.8.18",
};

export default config;
