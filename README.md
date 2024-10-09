# Name Suggestion Web App

## Environment Setup

Before running the application, you need to set up your environment variables:

1. Copy the `.env.example` file to a new file named `.env`:
   ```
   cp .env.example .env
   ```

2. Open the `.env` file and replace `your_clerk_publishable_key_here` with your actual Clerk publishable key.

3. If you're running the development server, restart it:
   ```
   npm run dev
   ```

**Important:** Never commit your `.env` file to version control, as it contains sensitive information.

## Getting Your Clerk Publishable Key

1. Sign up or log in to your Clerk account at https://clerk.com/
2. Create a new application or select an existing one
3. In your Clerk dashboard, navigate to the API Keys section
4. Copy the "Publishable Key"
5. Paste this key into your `.env` file as the value for `VITE_CLERK_PUBLISHABLE_KEY`

For more detailed instructions, refer to the [Clerk documentation](https://clerk.com/docs).

## Running the Application

After setting up your environment variables:

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to the URL provided by the development server (usually http://localhost:5173).

If you encounter any issues, ensure that your `.env` file is set up correctly and that you've restarted the development server after making changes.