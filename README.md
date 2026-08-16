# 🚀 Spacio by GLN

### **Discover. Book. Experience.**

Spacio is a modern **space and experience booking platform** that connects people with places, activities, services, and experiences they can discover and book in one place.

Built for the next generation of users, Spacio brings together **workspaces, study spaces, sports, wellness, dining, stays, events, parking, services, networking, and experiences** into a single booking ecosystem.

> **Spacio by GLN — Your space. Your time. Your experience.**

---

## 🌟 What is Spacio?

Finding and booking the right place or experience is often fragmented across multiple platforms.

Spacio aims to solve this by creating a unified marketplace where users can:

* 🔎 Discover spaces and experiences
* 📅 Check real-time availability
* ⏰ Select convenient time slots
* 🎟️ Book tickets or spaces
* 💳 Pay securely online
* 📍 Get directions to the location
* ⭐ Review verified bookings
* 📱 Manage bookings from one place

At the same time, hosts can list their spaces, manage availability, receive bookings, and track earnings through a dedicated host dashboard.

---

## 🎯 Vision

**To become a unified booking ecosystem for spaces, services, and experiences.**

Spacio is designed to make everyday discovery and booking as simple as ordering food, booking a cab, or purchasing a movie ticket.

---

## 🧩 Categories

Spacio brings multiple types of spaces and experiences together:

| Category          | Examples                                                   |
| ----------------- | ---------------------------------------------------------- |
| 💼 Workspaces     | Offices, meeting rooms, studios, professional spaces       |
| 📚 Study Pods     | Study rooms, reading spaces, private study areas           |
| 🅿️ Parking       | Car parking, bike parking, hourly parking                  |
| 🧘 Wellness       | Gyms, yoga, spa, wellness centers                          |
| 🏏 Play           | Cricket boxes, badminton, sports facilities                |
| ☕ Dining          | Cafés, restaurants, dining spaces                          |
| 🎥 Creator Spaces | Photography studios, video studios, creator spaces         |
| 🏨 Stays          | Short stays, rooms, accommodation                          |
| 🎉 Party & Events | Farmhouses, party rooms, event venues                      |
| 🛠️ Services      | Salons, car wash, consultations and other services         |
| 🤝 Networking     | Professional and social networking spaces                  |
| 🎢 Experiences    | Go-karting, ATV rides, comedy, music and unique activities |

---

## ✨ Key Features

### 👤 User Experience

* 🔐 Secure authentication
* 🔎 Space and experience discovery
* 📍 Location-based discovery
* 🗓️ Availability and slot selection
* 🎟️ Ticket-based bookings
* 💺 Seat-based bookings
* ⏱️ Hourly and time-slot bookings
* 🏨 Stay bookings
* 💳 Online payments
* 🎫 Digital booking tickets
* 🔢 Booking OTP / verification
* 🧭 Get Directions
* ⭐ Ratings and reviews
* 🎟️ Coupons and promotional offers
* 📚 Booking history
* 🔔 Booking notifications

---

### 🏢 Host Platform

Hosts can use Spacio to manage their businesses and listings.

Features include:

* ➕ Create listings
* 🖼️ Upload images and media
* 💰 Set pricing
* 🕐 Configure available slots
* 📅 Manage booking calendars
* 📊 Track bookings
* 💵 Monitor earnings
* ⭐ Manage reviews
* 📈 View performance
* 🚀 Increase listing visibility
* 🏷️ Featured listing options

---

## 💳 Booking & Payment Flow

```text
Discover
   ↓
Select Space / Experience
   ↓
View Details
   ↓
Select Date & Time
   ↓
Select Seats / Quantity
   ↓
Confirm Booking
   ↓
Secure Payment
   ↓
Booking Confirmation
   ↓
Digital Ticket / OTP
   ↓
Visit & Experience
   ↓
Review
```

Spacio is designed to support different booking models depending on the category:

* ⏱️ Hourly booking
* 📅 Half-day booking
* 🌙 Night / stay booking
* 🎟️ Ticket-based booking
* 💺 Seat-based booking
* 👥 Group booking

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    │   Web / Mobile UI   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │  Vite + Tailwind CSS │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Supabase       │
                    │                     │
                    │ Authentication      │
                    │ PostgreSQL Database │
                    │ Storage             │
                    │ Realtime            │
                    └──────────┬──────────┘
                               │
                ┌──────────────┼──────────────┐
                ▼              ▼              ▼
          ┌──────────┐   ┌──────────┐   ┌──────────┐
          │ Razorpay │   │  Maps    │   │   OTP    │
          │ Payments │   │ Services │   │ Service  │
          └──────────┘   └──────────┘   └──────────┘
```

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React
* ⚡ Vite
* 🎨 Tailwind CSS
* 🟨 JavaScript / TypeScript
* 📱 Responsive UI

### Backend & Database

* 🟩 Supabase
* 🐘 PostgreSQL
* 🔐 Supabase Authentication
* 📦 Supabase Storage
* ⚡ Supabase Realtime

### Payments

* 💳 Razorpay

### Maps & Location

* 📍 Map services for location and directions

### Development Tools

* Git
* GitHub
* VS Code
* ESLint
* Playwright
* Vitest

---

## 📂 Project Structure

```text
spacio-smart-spaces/
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── lib/
│   └── ...
│
├── supabase/
│   ├── migrations/
│   └── functions/
│
├── .env
├── .gitignore
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/narasimhagaddam/spacio-smart-spaces.git
```

### 2. Navigate into the project

```bash
cd spacio-smart-spaces
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root.

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Add other required service credentials according to the environment configuration.

> ⚠️ Never commit private API keys, Supabase service-role keys, payment secrets, or other credentials to GitHub.

### 5. Start the development server

```bash
npm run dev
```

The application will be available locally through the Vite development server.

---

## 🔐 Environment & Security

Spacio uses environment variables for sensitive configuration.

### Never commit:

```text
.env
```

or any file containing:

```text
API keys
Secret keys
Payment credentials
Service-role keys
Private tokens
Database passwords
```

Public frontend configuration should only contain credentials that are explicitly designed to be exposed to the client.

---

## 💰 Business Model

Spacio is designed as a marketplace platform connecting **users and hosts**.

Potential revenue streams include:

### 1. Booking Commission

Spacio can earn a percentage from successful bookings.

### 2. Host Plans

Hosts can access different levels of platform functionality.

### 3. Featured Listings

Hosts can increase visibility through promotional placements.

### 4. Promotional Campaigns

Businesses can promote offers and experiences to relevant users.

### 5. Future Marketplace Services

Additional monetization opportunities can be introduced as the ecosystem grows.

---

## 📈 Product Philosophy

Spacio follows a simple principle:

> **Make discovering and booking real-world experiences as easy as ordering online.**

The product focuses on:

* ⚡ Speed
* 🎯 Simplicity
* 📱 Mobile-first experiences
* 🔐 Trust
* 💳 Secure payments
* 📍 Location awareness
* ⭐ Verified reviews
* 🤝 Host-user connectivity

---

## 🗺️ Roadmap

### Phase 1 — Foundation

* [x] Project setup
* [x] React + Vite frontend
* [x] Tailwind CSS
* [x] Supabase integration
* [x] Authentication foundation
* [x] Core UI

### Phase 2 — Marketplace

* [ ] User profiles
* [ ] Host registration
* [ ] Listing creation
* [ ] Search and discovery
* [ ] Category system
* [ ] Availability management
* [ ] Booking engine

### Phase 3 — Payments

* [ ] Razorpay integration
* [ ] Payment verification
* [ ] Booking confirmation
* [ ] Refund handling
* [ ] Host settlement system

### Phase 4 — Experience

* [ ] Digital tickets
* [ ] Booking OTP
* [ ] Directions
* [ ] Reviews
* [ ] Coupons
* [ ] Notifications
* [ ] Personalized discovery

### Phase 5 — Growth

* [ ] Host dashboard
* [ ] Analytics
* [ ] Featured listings
* [ ] Referral system
* [ ] Student offers
* [ ] Promotional campaigns
* [ ] Mobile application
* [ ] Hyderabad launch

---

## 📊 Future Vision

Spacio is initially focused on building a strong marketplace for **Hyderabad**, with the potential to expand to other cities.

```text
Hyderabad
    ↓
Major Indian Cities
    ↓
Pan-India Marketplace
    ↓
Global Experiences Platform
```

The long-term goal is to build a platform where users don't need separate applications for every type of space, activity, or experience.

---

## 🧪 Testing

The project includes tooling for automated testing.

Run the test suite with:

```bash
npm test
```

For end-to-end testing:

```bash
npx playwright test
```

---

## 🤝 Contributing

Spacio is currently under active development.

Contributions, suggestions, bug reports, and ideas are welcome as the project evolves.

### Contribution workflow

```bash
git checkout -b feature/your-feature
```

Make your changes, test them, then commit:

```bash
git add .
git commit -m "Add your feature"
```

Push the branch:

```bash
git push origin feature/your-feature
```

Then open a Pull Request.

---

## 🐛 Reporting Issues

If you discover a bug or have a feature request, please create an issue with:

* Clear title
* Problem description
* Steps to reproduce
* Expected behavior
* Actual behavior
* Screenshots where applicable

---

## 📜 License

This project is currently maintained as a proprietary project by **GLN**.

All rights reserved unless otherwise specified.

---

## 👨‍💻 Built By

### **GLN — Spacio**

**Spacio by GLN**

A technology initiative focused on building modern digital products that connect people, businesses, spaces, and experiences.

---

## ⭐ Support the Project

If you find the concept interesting, consider giving the repository a ⭐ on GitHub.

More features and improvements are continuously being developed.

---

### 🚀 Spacio by GLN

**Discover. Book. Experience.**

*One platform. Endless possibilities.*
