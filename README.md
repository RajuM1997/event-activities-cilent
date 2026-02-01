# JoinUp – Client (Next.js)

## 🌐 Live URL

[https://joinup.vercel.app](https://joinup.vercel.app)

## 📌 Project Overview

**JoinUp** is an event management and booking platform where users can explore events, join events, leave reviews, and hosts can create and manage events. This repository contains the **client-side application** built with **Next.js (App Router)**.

---

## ✨ Features

### 👤 User Features

- Browse all events with filters & search
- View event details with host info & reviews
- Join/book events
- Add reviews after booking
- Authentication (Email/Password & Google)

### 🎤 Host Features

- Create and manage events
- View joined users
- Manage event status

### 🛠️ Admin Features

- Dashboard with analytics
- Manage users, hosts, and events

### 🎨 UI/UX

- Responsive design
- Skeleton loaders
- Glassmorphism & modern UI
- SEO with dynamic metadata
- Custom 404 & error pages

---

## 🧰 Technology Stack

### Frontend

- **Next.js 16 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **React Hook Form**
- **Zod**
- **Swiper.js**

### Auth & State

- JWT-based authentication
- Server & Client Components

---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/RajuM1997/event-activities-cilent.git
cd joinup-client
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8800/api/v1
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

App will run at: `http://localhost:3000`

---

## 🧪 Build for Production

```bash
npm run build
npm start
```

---

## 📂 Project Structure

```txt
src/
 ├─ app/            # App router pages
 ├─ components/     # Reusable UI components
 ├─ services/       # API services
 ├─ hooks/          # Custom hooks
 ├─ types/          # TypeScript types
 └─ lib/            # Utilities
```

---

## 🔐 Authentication Flow

- Access token stored via HTTP-only cookies
- Protected routes with middleware
- Role-based access control

---

## 🚀 Deployment

Deployed on **Vercel** with environment variables configured in dashboard.

---

## 📞 Support

If you face any issues, feel free to open an issue or contact the maintainer.

---

© 2026 JoinUp. All rights reserved.
