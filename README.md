# Balanceè Repair Booking

## Overview

Balanceè Repair Booking is a React-based web application that allows users to book car repair services by selecting a car type and repair service, viewing nearby stations with available time slots, and confirming bookings with a success message. The application features a modern, responsive UI styled with Tailwind CSS, a light/dark theme toggle, and modular components for reusability. State management is handled via React Context, with data sourced from JSON files for car types, services, and stations.

This project was developed to provide a visually appealing and user-friendly interface, prioritizing simplicity, modularity, and maintainability. It addresses specific requirements for a clean UI, efficient state management, and error-free operation.

## Features

Car Type and Service Selection: Users select a car type (e.g., Sedan, SUV) and repair service (e.g., Oil Change, Brake Repair) via dropdowns.



Station Listing: Displays nearby stations offering the selected service, with available time slots.



Booking Confirmation: Users can book a time slot, triggering a success message with booking details.



Theme Toggling: Supports light and dark modes, persisted in local storage.



Responsive UI: Mobile-friendly design with Tailwind CSS, featuring gradients, shadows, and animations.



State Management: Uses React Context for centralized state (selections, booking details).



JSON Data: Sources car types, services, and stations from carTypes.json, services.json, and stations.json.



UI States: Handles loading, waiting, empty, and success states for a seamless user experience.


## Tech Stack



React: Frontend library for building modular components.



Tailwind CSS: Utility-first CSS framework for responsive, modern styling.



React-Icons: Provides icons (e.g., car, wrench, moon, sun) for enhanced UI.



React Context: Manages state for selections and booking details.


date-fns: Used to compare the selected slot time with the current time of day.


Framer-motion: Handles card animations for stations.


JSON: Static data files for car types, services, and stations.



Vite: Build tool for fast development.


## Key Implementation Choices

1. Modular Component Design





Why: To ensure reusability and maintainability, aligning with your preference for clean, modular code.



How: Created reusable components like Select (for dropdowns), StationCard (for station details), Stations (for filtering stations), and LoadingSpinner (for loading state). This reduces code duplication and simplifies updates.



Impact: Components like Select handle both car type and service dropdowns, styled consistently with Tailwind CSS, making the UI scalable and easy to maintain.

2. Tailwind CSS for Styling





Why: Tailwind’s utility-first approach enables rapid, responsive, and consistent styling without writing custom CSS, matching your desire for a visually appealing UI.



How: Used Tailwind classes for gradients , shadows (shadow-2xl), animations, and responsive layouts. Added theme-specific styles (e.g., bg-white for light, bg-gray-800 for dark).



Impact: Achieves a modern, polished look with teal accents (teal-500), smooth transitions, and mobile-friendly design, enhancing user experience.

3. React Context for State Management





Why: Context with useState was chosen as the simplest state management solution for a small-to-medium app, avoiding the complexity of Redux or the dependency of Zustand.



How: Implemented BookingContext.jsx with a BookingProvider to share carTypes, services, stations, selectedOptions, bookingDetails, and their setters. A custom useBooking hook simplifies context access.



Impact: Centralizes state for selections and booking details, enabling components like Select and StationCard to read/update state without prop-drilling, keeping code clean.

4. Theme Toggling with Local Storage





Why: To enhance user experience with a light/dark mode toggle, persisted across sessions, adding a premium feel to the UI.



How: Used useState for theme (light/dark), stored in local storage with localStorage.setItem. Applied theme-specific Tailwind classes (e.g., bg-gray-100 vs. bg-gray-600) and icons (BsFillMoonFill, IoMdSunny).



Impact: Provides a dynamic, user-friendly UI that adapts to preferences, with smooth transitions (transition-bg duration-300).

5. JSON Data Integration





Why: Using JSON files (carTypes.json, services.json, stations.json) simulates a backend API, making the app extensible for future API integration while keeping data static for the UI template.



How: Imported JSON files in BookingContext.jsx to provide data to the context, used in Select (for dropdown options) and Stations (for filtering stations).



Impact: Simplifies data management and allows easy updates to car types, services, or stations by editing JSON files.



7. UI States for User Experience





Why: To provide clear feedback for all user interactions (e.g., loading, waiting, empty, success), enhancing usability.



How: Implemented states (isLoading, isWaiting, showEmpty, showSuccess) with corresponding UI:





Loading: Shows LoadingSpinner with “Loading stations...” message.



Waiting: Displays “Please input the required details” when selections are incomplete.



Empty: Shows “No stations found” when no stations match the service.



Success: Renders a confirmation with FaCheckCircle and booking details.



Impact: Creates a seamless, intuitive experience, aligning with your goal of a polished UI.


## Setup Instructions

Prerequisites





Node.js: Version 16 or higher.



npm: Version 7 or higher.



### Installation


Clone the Repository (or copy files to your project):

git clone <repository-url>
cd smart-booking



### Install Dependencies:

npm install




Ensure JSON Files: Place carTypes.json, services.json, and stations.json in the src directory with the following structure:





carTypes.json:

["Sedan", "SUV", "Truck", "Hatchback"]



services.json:

["Oil Change", "Tire Rotation", "Brake Repair", "Engine Diagnostic"]



stations.json:

[
  {
    "id": 1,
    "name": "Downtown Auto",
    "location": "123 Main St",
    "supportedServices": ["Oil Change", "Tire Rotation", "Brake Repair"],
    "timeSlots": ["2025-05-18T09:00:00", "2025-05-18T11:00:00"]
  },
  {
    "id": 2,
    "name": "Westside Garage",
    "location": "456 Oak Ave",
    "supportedServices": ["Oil Change", "Engine Diagnostic"],
    "timeSlots": ["2025-05-18T10:00:00"]
  }
]

### Running the App





Start the Development Server:

npm run dev

Open http://localhost:5173 (or your Vite port) in a browser.



### Test the UI:





Select a car type and service from the dropdowns.



Observe the loading spinner, then view filtered stations.



Choose a time slot and book to see the success message.



Toggle between light and dark themes using the moon/sun icon.



Verify responsive design on mobile and desktop.

