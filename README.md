### Project Overview
This project is a language translator built with React and Vite that translates using the Google translate (RapidApi) API.

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/tushargr0ver/language-translator.git
   cd weather-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Setup Environment Variables:**
   Create a `.env` file in the root of your project and add your OpenWeatherMap API key:
   ```sh
   VITE_APP_ID=api_key
   ```
   Note: The `.env` file is added to `.gitignore` to prevent exposing your API key.

4. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production:**
   ```sh
   npm run build
   # or
   yarn build
   ```

### Example `.env` File
```sh
VITE_APP_ID=api_key
```

### .gitignore
Ensure that your `.env` file is not tracked by git by including it in your `.gitignore`:
```
# Node modules
node_modules

# Environment variables
.env

# Build output
dist
```
---

### License
This project is licensed under the MIT License.
