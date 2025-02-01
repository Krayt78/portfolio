/*
  # Update Projects for Ludovic's Portfolio

  1. New Projects
    - Add blockchain and gaming projects
    - Include detailed descriptions and technologies
*/

TRUNCATE TABLE projects;

INSERT INTO projects (title, description, image_url, live_url, github_url, technologies)
VALUES
  (
    'GiveUS dApp Development',
    'Developed a decentralized application with smart contracts audited by Hacken. Implemented full-stack solution using Solidity for smart contracts and React/Node.js for the frontend/backend infrastructure.',
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    null,
    null,
    ARRAY['Solidity', 'React', 'Node.js', 'Smart Contracts', 'Web3.js', 'TypeScript']
  ),
  (
    'Polkadot Substrate Development',
    'Developed a custom palette for gas-free transactions via staking mechanism on Substrate. Enhanced blockchain functionality while maintaining network security and efficiency.',
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    null,
    null,
    ARRAY['Rust', 'Substrate', 'Polkadot', 'Blockchain', 'Web3']
  ),
  (
    'The Sandbox DAO Backend',
    'Designed and implemented backend infrastructure and database architecture for a DAO platform. Created robust APIs and integrated blockchain functionality for decentralized governance.',
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    null,
    null,
    ARRAY['Node.js', 'TypeScript', 'Smart Contracts', 'DAO', 'API Development']
  ),
  (
    'Unity Blockchain SDK',
    'Developed a Unity SDK for Safe contracts and EIP 712 implementation. Created seamless integration between blockchain functionality and Unity game development environment.',
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    null,
    null,
    ARRAY['Unity', 'C#', 'Blockchain', 'SDK Development', 'Smart Contracts']
  ),
  (
    'EDF VR Training Platform',
    'Developed virtual reality applications for safety training and recruitment using Oculus Go. Created immersive learning experiences with Unity.',
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    null,
    null,
    ARRAY['Unity', 'C#', 'VR Development', 'Oculus SDK', '3D Modeling']
  );