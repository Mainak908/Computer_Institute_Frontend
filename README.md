# 💻 Computer Center Management System

A robust and user-friendly management system designed for efficiently operating a computer center.  where branch admin can enrollment students ,fillup admits, exam forms and central admin can verify those details.
Central admin can generate admits, marksheet, Certificates and upload educational videos which are automatically transcoded for optimized streaming across devices. There is also a student portal where students can view their id, marksheet , certificate and all their profile details.

![Tech Stack](https://img.shields.io/badge/Backend-Node.js-green?style=flat-square)
![Database](https://img.shields.io/badge/Database-PostgreSQL-blue?style=flat-square)
![Framework](https://img.shields.io/badge/Web%20Framework-Express.js-yellow?style=flat-square)
![License](https://img.shields.io/github/license/Mainak908/Computer-Institute_frontend)

---

## 🧩 Features

- 👤 **User Authentication & Role Management**
- 🖥️ **System Allocation & Booking**
- 🕐 **Time Tracking & Billing**
- 📊 **Admin Dashboard with Reports**
- 📝 **Real-Time Session Monitoring**
- 📅 **Daily Usage Logs & History**
- 📩 **Email Notifications for Bookings and Alerts**

---

## 🚀 Tech Stack

| Layer        | Technology           |
|--------------|----------------------|
| **Frontend** |  Next.js  |
| **Backend**  | Node.js, Express.js  |
| **Database** | PostgreSQL ,Redis |
| **Auth**     | JWT + Bcrypt         |
| **ORM**      | Prisma     |
| **UI Kit**   | TailwindCSS  |
| **Notifications** | Resend        |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Mainak908/Computer-Institute_frontend.git
cd Computer-Institute

# Install frontend dependencies
npm install

# Setup environment variables
cp .env.example .env

# Run the frontend
npm run dev
