# Dynamic Event Calendar Application

A dynamic event calendar built with React.js. This app allows users to view, add, edit, delete, and manage events on a monthly calendar. It provides an intuitive UI and smooth interactions such as month transitions, event creation, and highlighting current and selected days.

## Features

- **Calendar View**:
  - Display a calendar grid of the current month with days properly aligned.
  - Navigation buttons to switch between months.
  - Highlights the current day and selected day.

- **Event Management**:
  - Add events by clicking on a day.
  - Edit or delete events from a selected day.
  - Each event includes:
    - Event name
    - Start time and end time
    - Optional description
  
- **Event List**:
  - Display a list of events for a selected day in a modal.

- **Data Persistence**:
  - Events are stored in `localStorage` so they persist even after a page refresh.

- **Animations**:
  - Smooth animations for transitioning between months, highlighting the current day, and selecting days.

- **UI Design**:
  - Clean and modern UI using `shadcn` components for styling.

## Demo

You can view the live demo of the app here:

[Live Demo](https://67592edde8e88e16a3755d50--dynamiceventcalender.netlify.app/) 


## Getting Started

Follow these steps to run the app locally:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Clone the Repository

```bash
git clone https://github.com/AniketTancoder/event-calendar.git
cd dynamic-event-calendar
