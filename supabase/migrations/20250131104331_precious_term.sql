/*
  # Update Projects Data

  1. Data Migration
    - Updates projects table with real experience data
    - Each project includes detailed description and technologies used
*/

TRUNCATE TABLE projects;

INSERT INTO projects (title, description, image_url, live_url, github_url, technologies)
VALUES
  (
    'E-commerce Platform Migration',
    'Led the migration of a monolithic e-commerce platform to a microservices architecture. Improved system scalability and reduced deployment time by 60%. Implemented event-driven architecture using Apache Kafka.',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
    null,
    null,
    ARRAY['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes']
  ),
  (
    'Real-time Analytics Dashboard',
    'Developed a real-time analytics dashboard for monitoring system metrics and user behavior. Implemented WebSocket connections for live updates and complex data visualizations.',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    null,
    null,
    ARRAY['React', 'TypeScript', 'Node.js', 'WebSocket', 'D3.js', 'Redis']
  ),
  (
    'CI/CD Pipeline Automation',
    'Designed and implemented automated CI/CD pipelines for multiple microservices, reducing deployment time by 70% and improving code quality through automated testing.',
    'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    null,
    null,
    ARRAY['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitLab CI']
  );