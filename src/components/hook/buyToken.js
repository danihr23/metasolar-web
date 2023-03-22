
import Web3 from 'web3';
import MetaSolarNFT from "../assets/MetaSolarNFT.json";


export  const buyToken = (userAddres,nftCount) =>{

const web3 = new Web3(window.ethereum);
const contractAddress = '0x6364Cc28fe3A66e83f8ff6B6e15001a6AC556611';
console.log(11,userAddres)
console.log(22,nftCount)
const contractAbi = MetaSolarNFT.abi;
const contract = new web3.eth.Contract(contractAbi, contractAddress);
const mintQuantity = nftCount;  
const price = (0.1*nftCount).toString()
const valueToSend = web3.utils.toWei(price, 'ether');


contract.methods.buyTokens(userAddres, mintQuantity).send({ from: userAddres, value: valueToSend })
  .then((receipt) => {
    console.log('Transaction receipt:', receipt);
    return receipt
  })
  .catch((error) => {
    console.error('Error:', error.message);
    return error.message
  });



}
