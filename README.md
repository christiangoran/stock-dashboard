# React / Tailwind Stock Dashboard App

1. npx create-react-app .
2. npm install -D tailwindcss

3. npx tailwindcss init (this creates the tailwind.confic.js file)

4. Add necessary code to tailwind.config.js

start with:

content: [
"./src/**/*.{js,jsx,ts,tsx}",
],

5. Add code to index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

6. Add further styling to tailwind.config.js

7. Then add heroicons

- npm install @heroicons/react recharts
  (import { Xicon, SearchIcon } from "@heroicons/react/solid";) - This is how it is imported

8. Use Finnhub.io to access the free api-key

   - We will use:
     - Symbol lookup
     - Company profile 2
     - Quote
     - Candles (OHLCV)

9. Create folder under "src" called "constants" and add "mock.js"-file under that directory

Add the code snippets from the finnhub.io page

10. Create a config file that will help with the chart. Under "constants" add a "config.js"-file and enter:

export const chartConfig = {
"1D": { days: 1, weeks: 0, months: 0, years: 0, resolution: "1" },
"1W": { days: 0, weeks: 1, months: 0, years: 0, resolution: "5" },
"1M": { days: 0, weeks: 0, months: 1, years: 0, resolution: "60" },
"3M": { days: 0, weeks: 0, months: 3, years: 0, resolution: "D" },
"1Y": { days: 0, weeks: 0, months: 0, years: 1, resolution: "W" },
};

11. try the app - npm start

12. Clear out App.css since we dont need it for now since we are using Tailwind.

13. Added styling and structure to the site
