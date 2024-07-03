// Sample data for NFT projects
const projects = [
    {
      id: 1,
      name: 'Solar Project 1',
      description: 'Fractional ownership of a solar panel array in Cape Town.',
      image: '/images/solar-project1.jpg',
      link: 'https://etherscan.io/address/YOUR_PROJECT_CONTRACT_ADDRESS'
    },
    {
      id: 2,
      name: 'Wind Farm 1',
      description: 'Invest in a wind farm in Johannesburg and earn returns.',
      image: '/images/wind-farm1.jpg',
      link: 'https://etherscan.io/address/YOUR_PROJECT_CONTRACT_ADDRESS'
    }
    // Add more projects as needed
  ];
  
  export default function handler(req, res) {
    res.status(200).json(projects);
  }
  