# [Gunpla Haven](https://gunplahaven.vercel.app/)

![image](https://github.com/user-attachments/assets/6a919958-309d-4d19-b7a4-079a0ffe0688)


**Gunpla Haven** is a modern e-commerce demo project designed for Gunpla enthusiasts. This platform showcases an engaging and user-friendly shopping experience, featuring a robust catalog and secure demo checkout system.

---

## Features

### Authentication & User Management

- Email/password-based sign-up and sign-in.
- Protected routes for user-specific content.
- Seamless session management for an uninterrupted user experience.

### Shopping Experience

- Filter products by categories and grades (HG, RG, MG, PG).
- Add, remove, and update items in the cart.
- Persistent cart functionality for guests and logged-in users.

### Product Information

- Detailed product pages with descriptions, stock status, and image galleries.
- Educational resources, including beginner guides and FAQs.

### Demo Checkout

- Address and payment input simulation.
- **Note:** Payment details are not stored or processed; this is for demonstration purposes only.

---

## Technologies

### Frontend

- **React 18.3.1**: Component-based UI development.
- **TypeScript**: Ensures type safety and better development practices.
- **Vite**: Modern and fast build tool.

### Styling & UI

- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **shadcn/ui**: Accessible and pre-designed UI components.
- **Lucide React**: Icon library for a consistent visual experience.

### Backend

- **Supabase**: Manages authentication and real-time database interactions.
- **React Context API**: Simplifies state management across components.

---

## Pages

- **Home**: Landing page with featured products and announcements.
- **Catalog**: Browse and filter the product catalog.
- **Product Detail**: Detailed product descriptions with add-to-cart functionality.
- **Guide**: Resources for beginners and enthusiasts.
- **FAQ**: Frequently asked questions about Gunpla and the platform.
- **Authentication**: Sign-in and sign-up functionality.
- **Checkout**: Simulated checkout flow.

---

## Database Structure

**Supabase** powers the backend with the following structure:

- **Products**: Stores product catalog information.
- **Cart Items**: Manages user and guest cart details.
- **Users**: Handles user authentication and profiles.

---

## Responsive Design

- Mobile-first layout for better usability across devices.
- Adaptive navigation and touch-friendly elements.

---

## Setup Instructions

1. Create a Supabase project via the [Supabase dashboard](https://database.new).

2. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gunpla-haven.git

3. Install dependencies:

   ```bash
   npm install
   ```
4. Create a .env file in the root directory and configure the following environment variables:
   ```
     NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
     NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
    ```
5. Run the development server:

   ```bash
   npm run dev
   ```


