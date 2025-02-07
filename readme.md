# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Supabase. Features a dark mode theme, project showcase with carousel, and smooth animations.

## Features

- 🌓 Dark/Light mode
- 🎨 Responsive design
- 🎠 Project carousel
- 🔥 Real-time data with Supabase
- 🚀 Built with Vite
- 💅 Styled with Tailwind CSS
- 📱 Mobile-friendly

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up Supabase:
   - Create a new project on [Supabase](https://supabase.com)
   - Get your project URL and anon key
   - Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. Run database migrations:
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Copy and run the contents of each migration file from the `supabase/migrations` folder in order

5. Start the development server:
```bash
npm run dev
```

The application will start running at `http://localhost:5173`

## Project Structure

```
├── src/
│   ├── components/      # Reusable components
│   ├── contexts/        # React contexts
│   ├── lib/            # Utility functions and configurations
│   ├── pages/          # Page components
│   └── main.tsx        # Application entry point
├── supabase/
│   └── migrations/     # Database migrations
├── public/            # Static assets
└── package.json       # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Database Schema

The project uses a Supabase database with the following main table:

### Projects Table
- `id` (uuid, primary key)
- `title` (text)
- `description` (text)
- `image_url` (text)
- `live_url` (text, nullable)
- `github_url` (text, nullable)
- `technologies` (text array)
- `created_at` (timestamptz)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Ludovic DOMINGUES - [@ludovicdomingues](https://www.linkedin.com/in/ludovicdomingues/) - contact@ludovic-domingues.com