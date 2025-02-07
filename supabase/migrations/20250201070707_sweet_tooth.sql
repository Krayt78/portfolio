/*
  # Add Ankr and Horme projects

  1. New Projects
    - Ankr - Blockchain Game Engineering position
    - Horme - Backend Development position

  2. Details
    - Added comprehensive project descriptions
    - Included relevant technology stacks
    - Used appropriate tech images
*/

INSERT INTO projects (title, description, image_url, technologies)
VALUES
  (
    'Ankr Web3 Gaming SDK',
    'Developed a comprehensive Web3 SDK for Unity blockchain integration. Built microservices architecture for handling on-chain and off-chain transactions. Designed and deployed Solidity smart contracts for blockchain games.',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    ARRAY['Unity', 'C#', 'Blockchain', 'Web3', 'Solidity', 'Microservices']
  ),
  (
    'Horme Backend Infrastructure',
    'Developed the complete backend infrastructure for Horme using Node.js. Implemented RESTful APIs, database integration, and frontend connectivity. Focused on performance optimization and scalability.',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    ARRAY['Node.js', 'JavaScript', 'REST API', 'Backend Development', 'Database Design']
  );