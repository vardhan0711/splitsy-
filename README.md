<div align="center">
  <h1>🧮 [Splitsy]</h1>
  <p><strong>The smartest way to split expenses with friends</strong></p>
</div>

<p align="center">
  <img src="https://media.giphy.com/media/4uZaTLj8UIPLI/giphy.gif" width="400" alt="App Demo GIF" />
</p>

<p align="center">
  <a href="https://your-app-url.vercel.app"><strong>🌐 Visit Live Website</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Convex-4B6EF5?style=for-the-badge&logo=convex&logoColor=white" />
  <img src="https://img.shields.io/badge/Clerk-3C3C3C?style=for-the-badge&logo=clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/Gemini_AI-blueviolet?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel" />
</p>

---

## 📖 Description

**[Splitsy]** is a smart, modern web application designed to simplify group expense management. Whether you're splitting rent, groceries, or trip costs, the app makes it easy to track, manage, and settle balances transparently.

Key highlights:
- AI-powered settlement suggestions
- Real-time sync with Convex database
- Secure and seamless authentication via Clerk
- Clean, intuitive interface with a mobile-first design

> Unlike traditional tools, this platform reimagines shared expenses using cutting-edge AI, without being limited to legacy concepts.

---

## 🔧 Tech Stack

- ⚛️ **Next.js** – Full-stack framework for modern web apps  
- 🔗 **Convex** – Scalable, reactive backend-as-a-service  
- 🔐 **Clerk** – Authentication and user management  
- 🤖 **Gemini AI** – Smart calculation of fair settlements

---

## 🚀 Installation

To set up the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/project-name.git
cd project-name

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in the required environment variables:
# - CLERK_PUBLISHABLE_KEY
# - CLERK_SECRET_KEY
# - CONVEX_DEPLOY_KEY
# - GEMINI_API_KEY

# 4. Run the development server
npm run dev
```

The app will be available at `http://localhost:3000`.
---

## 📦 Usage

Once the application is running:

1. **Sign Up / Log In**  
   Create an account using Clerk-powered authentication.

2. **Create or Join a Group**  
   Start a new group or join an existing one using a unique code.

3. **Add Expenses**  
   Log shared expenses by selecting participants and splitting methods.

4. **Settle Up**  
   Use Gemini AI to suggest optimal settlements and minimize back-and-forth payments.

5. **Track History**  
   View your full transaction history within each group.

---

## 🤝 Contributing

We welcome contributions of all kinds! To contribute:

1. Fork the repository  
2. Create a new branch: `git checkout -b feature/your-feature-name`  
3. Make your changes  
4. Commit and push: `git commit -m "Add your feature"` and `git push origin feature/your-feature-name`  
5. Submit a pull request

Please ensure your code adheres to existing styles and includes relevant tests if applicable.


