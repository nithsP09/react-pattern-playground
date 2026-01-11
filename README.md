# ⚛️ React Pattern Playground

A hands-on, interactive playground to **learn, compare, and truly understand advanced React patterns** with real examples.

> This repository focuses on **how React patterns work internally**, when to use them, and when **NOT** to use them.

---

## 🚀 Why This Project Exists

Many React developers **use patterns blindly**:
- `useMemo` everywhere
- `useCallback` without understanding
- Over-engineered abstractions
- Confusing component structures

This project exists to **demystify React patterns** by showing:

✅ Correct usage  
❌ Common mistakes  
🧠 Trade-offs  
📊 Behavioral differences  

All patterns are demonstrated **side-by-side** with clear explanations.

---

## 🧠 Who Is This For?

- React developers (0.5 – 3+ years)
- Engineers preparing for **frontend interviews**
- Developers who want to **write clean, scalable React**
- Anyone confused by *“advanced React patterns”*

---

## 🧩 Patterns Covered

### 1️⃣ Compound Components
- ❌ Prop drilling version
- ✅ Context-based compound components
- When compound components are overkill

### 2️⃣ Render Props
- ❌ Over-complicated render props
- ✅ Clean, reusable logic extraction
- Why hooks replaced many render-prop use cases

### 3️⃣ Controlled vs Uncontrolled Components
- Form input comparisons
- Performance implications
- Real-world usage scenarios

### 4️⃣ Custom Hooks
- ❌ God hooks (doing too much)
- ✅ Single-responsibility hooks
- Sharing logic without sharing UI

### 5️⃣ State Colocation
- ❌ State lifted too high
- ✅ State kept where it belongs
- Impact on re-renders & readability

### 6️⃣ Context API Patterns
- ❌ One global context (performance trap)
- ✅ Context splitting
- Avoiding unnecessary re-renders

---

## 🧪 How Each Pattern Is Demonstrated

Every pattern includes:

- ❌ **Broken / Anti-pattern implementation**
- ✅ **Optimized / Recommended implementation**
- 🧠 **Explanation of why one is better**
- 📊 **Behavioral difference (re-renders, complexity, readability)**

This is not about *opinions* — it’s about **observable behavior**.

---

## 🛠️ Tech Stack

- React (Vite)
- Tailwind CSS
- React DevTools
- why-did-you-render (for re-render detection)

---

## 📂 Project Structure

react-pattern-playground/
│
├── src/
│ ├── patterns/
│ │ ├── compound-components/
│ │ ├── render-props/
│ │ ├── controlled-vs-uncontrolled/
│ │ ├── custom-hooks/
│ │ ├── state-colocation/
│ │ └── context-patterns/
│ │
│ ├── App.jsx
│ └── main.jsx
│
└── README.md

yaml
Copy code

Each folder contains:
- `Broken.jsx`
- `Optimized.jsx`
- Supporting components
- Inline comments explaining behavior

---

## ▶️ Running the Project Locally

```bash
git clone https://github.com/<your-username>/react-pattern-playground.git
cd react-pattern-playground
npm install
npm run dev
Open:
👉 http://localhost:5173

🧠 Learning Philosophy
This project follows one simple rule:

“If you can’t explain why a pattern exists, you shouldn’t use it.”

Patterns are tools — not trophies.

🤝 Contributions Welcome
Contributions are encouraged!

You can:

Add new React patterns

Improve explanations

Add performance notes

Refactor examples for clarity

Feel free to open:

Issues

Discussions

Pull Requests

⭐ If You Found This Useful
If this project helped you:

Understand React better

Avoid over-engineering

Write cleaner components

Please consider giving it a ⭐
It helps other developers find this resource.

📌 Author
Built with ❤️ by Nithya Parvathy
Frontend Engineer | React Enthusiast
