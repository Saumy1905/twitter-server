This is a backend project built using the following technologies:

- [Node.js](https://nodejs.org): A JavaScript runtime for building scalable server-side applications.
- [GraphQL](https://graphql.org): A query language for your API, providing flexibility in data fetching.
- [Apollo Server](https://www.apollographql.com/docs/apollo-server): A library to host GraphQL schemas and manage API interactions.
- [Prisma ORM](https://www.prisma.io): A type-safe ORM for database management.
- [PostgreSQL](https://www.postgresql.org): A powerful relational database.
- [TypeScript](https://www.typescriptlang.org): A superset of JavaScript that adds static typing for building reliable applications.

## Getting Started

Follow these steps to set up and run the development server locally:

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
- PostgreSQL database (local or hosted via [Supabase](https://supabase.com/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Saumy1905/twitter-server.git
   cd twitter-server

2. Install dependencies:
   ```bash
   yarn install

3. Initialize Prisma::
   ```bash
   npx prisma init --datasource-provider postgresql
   npx prisma migrate dev --name init

### Running the Server

1. Start the development server:
   ```bash
   yarn dev


  Open http://localhost:8000/graphql in your browser to access the GraphQL playground.

### Database Management

1. Use the following command to open Prisma Studio for managing the database visually:
   ```bash
   npx prisma studio
