# 💸 Paytm Wallet Clone

A full-stack web application that mimics core functionalities of Paytm Wallet. Users can securely onboard, add money to their wallet via a dummy bank webhook, perform peer-to-peer (P2P) transfers, and view transaction history — all behind secure authentication.

## 🔧 Tech Stack

### Frontend
- **Next.js** (App Router)
- **Tailwind CSS** (for styling)

### Backend
- **Node.js + Express**
- **Next.js API routes (SSR when needed)**

### Authentication
- **NextAuth.js**

### Database
- **PostgreSQL** with **Prisma ORM**

### Monorepo Tooling
- **Turborepo** for managing frontend and backend workspaces

---

## ✨ Features

- 🧾 **On-ramp Transactions**: Add money to wallet via simulated bank webhook.
- 🤝 **P2P Transfers**: Send money between authenticated users.
- 🔐 **Authentication**: Only logged-in users can access wallet functionalities.
- 📜 **Transaction History**: See detailed transaction logs with timestamps.

---

## 🚀 Getting Started

> ⚠️ This project uses **Turborepo**, so `npm` and `pnpm` workspaces might be involved. Update the commands based on your package manager.

### 1. Clone the Repo
```bash
git clone https://github.com/jiteshrajoriyaa/paytm-wallet.git
cd paytm-wallet
```
### 2. Install dependencies
```bash
npm install
```
### 3. Set up your environmental variables
# .env
- DATABASE_URL=postgresql://user:password@localhost:5432/paytm_wallet
- NEXTAUTH_SECRET=your_secret_here
- NEXTAUTH_URL=http://localhost:3000

### 4. Run the app
```bash
npm run dev
```

## 🧪 Sample Users

You can use the following demo users to test the wallet features (P2P transfers, transactions, etc.).

| Name         | Phone                   | Password   | Wallet Balance |
|--------------|-------------------------|------------|----------------|
| Alice        | 1234567890              | alice      | ₹20            |
| Bob          | 0123456789              | bob        | ₹20            |








