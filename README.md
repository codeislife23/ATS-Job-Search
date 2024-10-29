# ATS Job Search

A modern web application that helps job seekers search across multiple Applicant Tracking Systems (ATS) simultaneously. Built with React, TypeScript, and Tailwind CSS.



## Features

- 🔍 Search across multiple ATS platforms simultaneously
- 📍 Location-based job search support
- 🎯 Precise job title matching with quoted search
- ⚡ Fast and efficient search process
- 🎨 Modern, responsive UI
- 💻 Cross-browser compatibility

## Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Development Tools:**
  - ESLint for code linting
  - TypeScript for type safety
  - PostCSS for CSS processing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ats-job-search
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   └── JobSearchForm.tsx
├── data/               # Static data and configurations
│   └── sites.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Usage

1. Enter your desired job title
2. (Optional) Specify a location or leave blank for remote positions
3. Select one or more ATS platforms to search
4. Click "Search Jobs" to open search results in new tabs

## Supported ATS Platforms

- Lever (lever.co)
- Greenhouse (greenhouse.io)
- Workday (myworkdayjobs.com)
- Taleo (taleo.net)
- Ashby (jobs.ashby.com)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Coding Standards

- TypeScript for type safety
- ESLint for code quality
- Modular component architecture
- Responsive design principles

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
