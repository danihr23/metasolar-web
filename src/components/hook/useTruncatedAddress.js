import { useState } from 'react';
import Web3 from 'web3';
import { useDispatch } from 'react-redux';
import { setUserAddres } from '../reducers/userWalletAddresReducer'

const useTruncatedAddress = () => {
  
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        // Prompt user to connect wallet
        await window.ethereum.enable();
        // Get user account address
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();

        // Dispatch the user's account address
        dispatch(setUserAddres(accounts[0]));
     

  
      } else {
        window.location.href = 'https://metamask.io/download.html';
      }
    } catch (err) {
      console.error(err);
      
      setError(err.message);
    }
  };

  return { connectWallet, error };
};

export default useTruncatedAddress;
