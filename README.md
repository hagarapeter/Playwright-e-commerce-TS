# Playwright Automation Project 🎭

Automated E2E 'e-commerce shopping cart flow' built with Playwright and TypeScript.

## 🚀 Getting Started

1. Clone the repository:  
   git clone https://github.com/hagarapeter/Playwright-e-commerce-TS.git  
   cd Playwright-e-commerce-TS  

2. Install dependencies:  
    npm install  
    npx playwright install  

3. Run the tests:  
    All tests (Headless): npx playwright test  
    UI Mode (Interactive): npx playwright test --ui  
    Show Report: npx playwright show-report  

   
🛠 Tech Stack  
  Framework: Playwright  
  Language: TypeScript  
  Linter/Formatter: ESLint & Prettier  
  CI/CD: GitHub Actions (Auto-runs on every push)  
  
📁 Project Structure  
  tests/ - Test script (.spec.ts)  
  pageobjects/ - Page Object Model classes  
  utils/ - Test data (JSON) and helper functions  
  .github/workflows/ - CI/CD configuration
  
🔍 Code Quality
  Run these commands to keep the code clean:  
  npm run lint - Check for code errors  
  npm run format - Auto-format code with Prettier  
