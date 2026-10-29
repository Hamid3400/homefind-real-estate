# HomeFind — Real Estate Listing Platform

A responsive frontend demonstration project built with **HTML, CSS and vanilla JavaScript**. Designed as a student project to demonstrate common real-estate marketplace interface patterns.

## Visual and interaction upgrades

- Refined design tokens, hover states, focus states and smoother transitions
- Improved responsive presentation across desktop and mobile
- Branded SVG favicon and browser theme colour
- More accessible mobile navigation controls and keyboard handling
- Improved compact Nigerian naira price formatting
- Property cards use restrained motion, with reduced-motion support

## Features

- Responsive homepage and mobile navigation
- Property cards with illustrative sample listings
- Search by city/neighbourhood, property type and maximum price
- Sort listings by price
- Property detail modal with gallery, amenities and enquiry form
- Save/unsave properties using browser `localStorage`
- Demo registration, login, account view and logout
- Saved property shortlist
- Newsletter form feedback
- Toast notifications and keyboard-dismissable modal
- Accessible labels, buttons and responsive layouts

## Run the project

1. Download and extract the ZIP.
2. Open the `homefind_real_estate` folder in Visual Studio Code.
3. Open `index.html` in a browser. For a smoother development workflow, use the **Live Server** extension in VS Code and choose **Open with Live Server**.

No build tools or package installation are required. The project uses plain HTML, CSS and vanilla JavaScript only—no framework or package installation is needed.

## Project structure

```text
homefind_real_estate/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Important limitations

This is a **frontend-only prototype**. Property data is fictional sample data for demonstration, not verified property inventory. Photos are loaded from remote Unsplash image URLs, so an internet connection is needed for them to display.

The demo authentication stores account details in the browser and is **not secure**. Do not use real passwords or personal information. There is no backend, database, real agent messaging, real newsletter service, payment processing, or verified property listing. These would require a backend service, secure authentication, data validation, and production testing.

## Suggested future improvements

- Add a backend API and database for property listings and users
- Replace demo authentication with secure server-side authentication
- Add server-side listing submissions and moderation for agents
- Add pagination and more advanced filters
- Add accessibility testing and browser testing
- Use verified property data and licensed images
