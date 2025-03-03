# AUHOBI #

## PRODUCT IDEA ##

Auhobi is the platform for car lovers where they can manage their cars, find useful tools and good services.

Currently, in Auhobi mobile app, the user can:

- Manage car maintenance logs.
- They can manage multiple vehilces in the same mobile app.

## FOLDER STRUCTURE ##

- `backend`: NestJS project providing GraphQL API interface for the mobile app
- `devops`: Contains files for DevOps
- `frontend`: Next.JS website for car lovers with same features as mobile app
- `mobile`: Expo mobile app that is used mainly by users
- `tools`: Useful tools for the whole system

## TECHNICAL DETAILS ##

### Backend (NestJS) ###

**Tech Stack:**
- Framework: NestJS (Node.js)
- Database: PostgreSQL with TypeORM
- API: GraphQL with Apollo Server
- Authentication: JWT with Passport.js
- Admin Panel: AdminJS
- Email Service: Nodemailer
- File Storage: Cloudinary

**Key Features:**
- GraphQL API with comprehensive query and mutation support
- Admin dashboard for system management
- Email functionality
- OCR capabilities
- Winston logging system
- Data validation
- Multiple environment support (dev, prod, prod-local)

**Project Structure:**
```
backend/
├── src/
│   ├── modules/      # Feature modules
│   ├── config/       # Configuration files
│   ├── lib/          # Shared libraries
│   ├── migrations/   # Database migrations
│   ├── assets/       # Static assets
│   ├── app.module.ts # Root module
│   └── main.ts      # Entry point
```

**Development Features:**
- TypeScript support
- ESLint & Prettier configuration
- Jest testing setup (unit, e2e, coverage)
- Database migrations and seeding
- Docker support
- Local development tunnel

**Available Scripts:**
```bash
# Development
yarn dev           # Start dev server with hot reload
yarn build         # Build for production
yarn test          # Run tests

# Database
yarn migration:create    # Create new migration
yarn migration:generate  # Generate migration from changes
yarn migration:run      # Run migrations
yarn migration:revert   # Revert last migration

# Production
yarn prod:start         # Start production server
yarn prod-local:start  # Start local production server
```

For more detailed technical documentation, please refer to the README files in each respective directory.

### Mobile (Expo/React Native) ###

**Tech Stack:**
- Framework: Expo (React Native)
- Navigation: Expo Router
- State Management: Redux Toolkit with Redux Persist
- Styling: TailwindCSS (NativeWind)
- Forms: React Hook Form with Zod validation
- API: GraphQL with code generation
- Authentication: 
  - Google Sign-in
  - Apple Authentication
  - Facebook SDK
- UI Components: React Native Primitives
- Analytics: Sentry

**Key Features:**
- Multi-platform support (iOS, Android)
- Offline data persistence
- Social authentication
- Localization support
- Image picking and handling
- Custom UI components
- Type-safe GraphQL operations
- Carousel and animations
- Toast notifications
- Safe area handling

**Project Structure:**
```
mobile/
├── app/           # Expo Router pages
├── components/    # Reusable UI components
├── graphql/       # GraphQL queries and mutations
├── services/      # API and business logic
├── store/         # Redux store and slices
├── hooks/         # Custom React hooks
├── guards/        # Authentication guards
├── lib/           # Utility functions
├── assets/        # Images and static files
└── localization/  # i18n translations
```

**Development Features:**
- TypeScript support
- GraphQL code generation
- Jest testing setup
- ESLint & Prettier configuration
- Development and production builds
- Expo development client
- Hot reload support
- Debugging tools

**Available Scripts:**
```bash
# Development
yarn start         # Start Expo development server
yarn start:tunnel  # Start with tunnel for external access
yarn ios          # Run on iOS simulator
yarn android      # Run on Android emulator

# Building
yarn ios:build:dev     # Build iOS development client
yarn android:build:dev # Build Android development client

# GraphQL
yarn codegen           # Generate GraphQL types and hooks
yarn gql-query-gen    # Generate GraphQL queries
yarn gql-mutation-gen # Generate GraphQL mutations

# Testing
yarn test        # Run tests
yarn lint        # Run linter
```