# CYSHIRC Official Website

## About This Project

This is the official website for the **CYSHIRC** Information Research Club. Our platform serves as a hub for sharing student projects, tutorials, events, and learning resources. Explore the latest in coding, research, and community activities.

### Built With

- **SvelteKit** - Full-stack web framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Prettier** - Code formatter
- **ESLint** + **Oxlint** - Code linting
- **Bun** - Fast JavaScript runtime (recommended)

---

## Getting Started

### Prerequisites

- **Node.js** 18+ or **Bun** 1.0+
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/cyshircgit/CYSHIRC-official-website.git
   cd CYSHIRC-official-website
   ```

2. **Install dependencies**

   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install
   ```

3. **Start development server**

   ```bash
   bun run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## Contributing - Development Guide

Thank you for your interest in contributing to our website! This guide will help you get started quickly.

### Available Scripts

#### **Development**

```bash
# Start development server with hot reload
bun run dev
```

#### **Building & Preview**

```bash
# Build for production
bun run build

# Preview production build locally
bun run preview
```

#### **Code Quality**

```bash
# Format code with Prettier
bun run format

# Quick lint check (fast)
bun run lint:fast

# Full formatting and linting check
bun run lint

# Auto-fix formatting and lint issues
bun run lint:fix

# Pre-commit quick check
bun run precommit

# CI comprehensive check
bun run ci:lint
```

#### **Type Checking**

```bash
# Run TypeScript and Svelte type checking
bun run check

# Watch mode for continuous type checking
bun run check:watch
```

#### **Project Sync**

```bash
# Sync SvelteKit project (auto-run before other commands)
bun run prepare
```

---

### Development Workflow

1. **Start Development**

   ```bash
   bun run dev
   ```

2. **Before Committing**

   ```bash
   # Quick check first
   bun run lint:fast

   # Format and fix issues
   bun run lint:fix

   # Final comprehensive check
   bun run lint
   bun run check
   ```

3. **Build & Test**

   ```bash
   # Build for production
   bun run build

   # Preview the build
   bun run preview
   ```

---

### IDE Setup

For the best development experience, we recommend:

- **VS Code** with the **Svelte extension**
- **Enable format on save** for Prettier
- **Enable TypeScript strict mode**
- **Install recommended extensions**:
  - Svelte for VS Code
  - Prettier - Code formatter
  - ESLint
  - Tailwind CSS IntelliSense

---

### Project Structure

```
src/
├── lib/              # Reusable components and utilities
├── routes/           # SvelteKit routes (pages)
├── app.html          # HTML template
├── app.css           # Global styles
└── hooks.server.ts   # Server hooks

static/               # Static assets
```

---

### Troubleshooting

If you encounter issues, try these steps:

```bash
# Clean and reinstall dependencies
rm -rf node_modules
bun install

# Sync SvelteKit project
bun run prepare

# Clear build cache
rm -rf .svelte-kit
bun run prepare
```

### Common Issues

- **Port already in use**: Change the port with `--port` flag

  ```bash
  bun run dev -- --port 3000
  ```

- **TypeScript errors**: Make sure to run sync first
  ```bash
  bun run prepare
  ```

---

## Contributing Guidelines

We welcome contributions from everyone! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

1. **Fork this repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test your changes**
   ```bash
   bun run lint
   bun run check
   bun run build
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Coding Standards

- Use **TypeScript** for type safety
- Follow **Prettier** formatting rules
- Ensure all **linting** passes
- Write **meaningful commit messages**
- Add **comments** for complex logic

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

- **CYSHIRC Information Research Club**
- **GitHub**: [cyshircgit](https://github.com/cyshircgit)
- **Website**: [Coming Soon]

---

## Acknowledgments

- Built with ❤️ by CYSHIRC members x tonicatOWO
- Thanks to all contributors
- Powered by the amazing Svelte community

---

<div align="center">
  Made with 💻 by high school students learning to code
</div>

<div align="center">
  <img src='./Assisted-By-Humans-Not-By-AI-Badge-white.svg' alt="Assisted By Human" width="200">
</div>
