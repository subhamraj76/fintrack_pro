# FinTrack - Financial Management Platform

An financial management platform that helps you track, analyze, and optimize your spending with real-time insights.

## Features

- **Real-time Tracking**: Monitor your finances with live updates
- **Budget Management**: Set and track budgets with smart recommendations
- **Transaction Management**: Easy transaction entry and categorization
- **Account Management**: Manage multiple accounts in one place
- **Dashboard Overview**: Comprehensive financial overview at a glance

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Prisma ORM
- **Authentication**: Clerk
- **Styling**: Tailwind CSS with custom components

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run database migrations: `npx prisma migrate dev`
5. Start the development server: `npm run dev`

## Project Structure

```
fintrack_main/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── actions/            # Server actions
├── lib/               # Utility functions and configurations
├── prisma/            # Database schema and migrations
└── public/            # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request