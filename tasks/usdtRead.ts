task("USDT", "USDT read balace").setAction(async ()=>{
    const abi = [
        "function name() public view returns (string)",
        "function symbol() public view returns (string)",
        "function decimals() public view returns (uint8)",
        "function totalSupply() public view returns (uint256)",
        "function approve(address _spender, uint256 _value) public returns (bool success)"]
  
      const USDTContract = new hre.ethers.Contract("0xdAC17F958D2ee523a2206206994597C13D831ec7", abi)
  
      const name = await USDTContract.name()
      const symbol = await USDTContract.symbol()
      const decimals = await USDTContract.decimals()
      const totalSupply = await USDTContract.totalSupply()
  
      console.log(`${symbol} (${name}) total supply is ${hre.ethers.utils.formatUnits(totalSupply, decimals)}`)
})