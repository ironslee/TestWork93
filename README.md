# AbeloShop — Test Task (Next.js + TypeScript)

A web application of an online store built with the public API DummyJSON.
The functionality includes JWT-based authentication, browsing product lists and categories, and viewing product details.

---

## Stack

- **Next.js (App Router)**
- **TypeScript**
- **Zustand**
- **Axios**
- **SCSS Modules**
- **Prettier, ESLint, Stylelint**

---

## Features

- **Authentication**
  - login form (validation: at least 3 characters, fields must not be empty)
  - on successful login the token and user data are persisted
  - redirect to the homepage after login
  - error message displayed in case of failed login

- **Navigation & Pages**
  - Header with menu: Home, Hot Deals, Categories, All Products, Laptops, Smartphones
  - Footer with current year and email (for authenticated users)
  - Highlight for the active navigation item

- **Categories**
  - categories list fetched from the API
  - each category links to a page `/category/[slug]`

- **Products**
  - product list with `Load more` pagination
  - product card (image, title, category, price, "Add to cart" button for authenticated users)
  - product detail page `/product/[id]` with image gallery and description

- **Loading indicators**
  - server pages use built-in `loading.tsx`
  - client-side requests (e.g., login form) are accompanied by a local `loading` state

---

## Install & run

`npm install`

`npm run dev`
