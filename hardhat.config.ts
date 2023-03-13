import dotenv from "dotenv"
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "./tasks/index"

dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
    },
    polygon:{
      url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY_POLYGON}`
    },
    ethereum:{
      url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY_ETHEREUM_MAINNET}`
      
    }
  },
  solidity: "0.8.18",
};

export default config;
