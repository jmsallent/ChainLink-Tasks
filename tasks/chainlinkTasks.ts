import priceConsumer from "../config/priceConsumer.json"
const balance = task("chainlink", "Gets and print MATIC Price in USD").setAction(async (tasksArgs:any, hre: any) => {
    console.log(priceConsumer.address)
    const contract = new hre.ethers.Contract(priceConsumer.address , priceConsumer.abi);
    await contract.latestAnswer();
    // console.log(result);
});

module.exports = balance
// exports.balance = balance