/*
  # Create projects table for portfolio

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `description` (text, not null)
      - `image_url` (text, not null)
      - `live_url` (text)
      - `github_url` (text)
      - `created_at` (timestamp with time zone)
      - `technologies` (text array)

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  live_url text,
  github_url text,
  technologies text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON projects
  FOR SELECT
  TO public
  USING (true);