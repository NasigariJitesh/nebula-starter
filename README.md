# Nebula Starter (with pnpm)

A modern starter boilerplate for building **cross-platform mobile apps** using **React Native + Expo + Nebula**.


## Tech Stack

- **React Native** – for building native apps using React
- **Expo** – streamlined build & dev workflow
- **Nebula** – a powerful UI toolkit inspired from [Shadcn](https://ui.shadcn.com/) for React Native based on [Nativewind](https://www.nativewind.dev/) (TailwindCSS) and [React Native Reusables](https://rnr-showcase.vercel.app/components)


## Setup

### 1. Prerequisites

Make sure the following tools are installed:

- **Node.js** 
- **pnpm** :  
  Install via npm if needed:

  ```bash
  npm install -g pnpm
  ```

- **Expo CLI**:  
  Install globally:

  ```bash
  npm install -g expo-cli
  ```


### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/NasigariJitesh/nebula-starter
cd nebula-starter
pnpm install
```


### 3. Run the App

Start the development server:

```bash
pnpm start
```

> This will launch the Expo Dev Tools in your browser.

You can then:
- Press `i` to run on iOS simulator (macOS only)
- Press `a` to run on Android emulator
- Scan the QR code with **Expo Go** on your phone


## Project Structure

```
nebula-starter/
├── assets/             # Images, fonts, etc.
├── nebula/             # Nebula UI kit components
│   ├── components/       # Reusable components
│   ├── lib/              # Utility functions
├── features/           # App screens
├── app/    
│   ├── _layout.tsx      # Main layout component
│   ├── index.tsx        # Home screen
├── package.json
└── ...
```

---

## Useful Scripts

Run with:

```bash
pnpm start      # start the dev server
pnpm android    # run on Android
pnpm ios        # run on iOS
pnpm web        # run in browser
```

---

## Clean Cache (if needed)

```bash
pnpm expo start -c
```


## License

MIT — free to use and modify.
