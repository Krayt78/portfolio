/*
  # Add blockchain and gaming projects

  1. New Projects
    - MetaQuantum - Unity Blockchain Metaverse project
    - Looting - NFT Marketplace project
    - MyMetaverse - MMORPG with blockchain integration
    - Alyra - Teaching position
*/

INSERT INTO projects (title, description, image_url, technologies)
VALUES
  (
    'MetaQuantum Metaverse',
    'Development of an interoperable metaverse with blockchain integration. Implemented avatar management, land ownership, and NFT assets. Created multiplayer networking using Photon Fusion for a persistent world.',
    'https://images.unsplash.com/photo-1614898983622-f20044c60b30?w=800&q=80',
    ARRAY['Unity', 'Blockchain', 'NFT', 'Photon Fusion', 'Smart Contracts', 'C#']
  ),
  (
    'Looting NFT Marketplace',
    'Created a comprehensive NFT marketplace powered by Solidity smart contracts. Developed an ICO system for tokenized fundraising and implemented an innovative "looting" smart contract with Web3 gaming mechanics.',
    'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
    ARRAY['Solidity', 'Smart Contracts', 'Web3', 'NFT', 'ICO', 'DeFi']
  ),
  (
    'MyMetaverse MMORPG',
    'Developed a blockchain-integrated MMORPG using Atavism for networking. Created gameplay mechanics centered around NFTs and blockchain technology, with a robust backend for in-game asset management.',
    'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800&q=80',
    ARRAY['Unity', 'Blockchain', 'NFT', 'Atavism', 'Game Development', 'Backend']
  ),
  (
    'Alyra Blockchain Education',
    'Lead Solidity instructor responsible for curriculum development and test assessment. Serving as a blockchain certification jury member for developer certification program.',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    ARRAY['Solidity', 'Smart Contracts', 'Blockchain', 'Education', 'Web3']
  );