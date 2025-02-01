/*
  # Insert Sample Projects Data

  1. Data Migration
    - Inserts three sample projects with realistic data
    - Each project includes:
      - Title
      - Description
      - Image URL (from Unsplash)
      - Live and GitHub URLs
      - Technologies used
*/

INSERT INTO projects (title, description, image_url, live_url, github_url, technologies)
VALUES
  (
    'E-Commerce Platform',
    'A full-featured e-commerce platform built with React and Node.js. Includes user authentication, product management, shopping cart, and payment integration.',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
    'https://ecommerce-demo.example.com',
    'https://github.com/yourusername/ecommerce-platform',
    ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS']
  ),
  (
    'Task Management App',
    'A collaborative task management application featuring real-time updates, team workspaces, and progress tracking.',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    'https://tasks-app.example.com',
    'https://github.com/yourusername/task-manager',
    ARRAY['React', 'TypeScript', 'Supabase', 'Tailwind CSS']
  ),
  (
    'Weather Dashboard',
    'A modern weather dashboard that provides real-time weather data, forecasts, and interactive maps using multiple weather APIs.',
    'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    'https://weather-dash.example.com',
    'https://github.com/yourusername/weather-dashboard',
    ARRAY['React', 'TypeScript', 'OpenWeather API', 'Chart.js']
  );