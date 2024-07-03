import Web3 from 'web3';

let web3;

// if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
//   // We are in the browser and Metamask is running.
//   web3 = new Web3(window.ethereum);
//   try {
//     window.ethereum.request({ method: 'eth_requestAccounts' }); // Request access to the user's wallet
//   } catch (error) {
//     console.error("User denied account access");
//   }
// } else {
  // We are on the server OR the user is not running Metamask
  const provider = new Web3.providers.HttpProvider(
    'https://gnosis.drpc.org'
  );
  // 'https://arb1.arbitrum.io/rpc' // Or use another provider

  web3 = new Web3(provider);
// }

export default web3;
