# Next.js Project with Authentication

This project demonstrates a basic setup of a Next.js application integrated with AuthJS v5 , Prisma Accelerate, ShadCn UI, MongoDb and comes with theme toggle for dark and light modes.

![screenshot](/src/app/opengraph-image.png)

Live Link : https://nextjs-with-auth-mongo.vercel.app/

## Features ✨

- **NextJS 14 app router**: Build your UI with the latest version of NextJS 14.
- **Tailwind CSS**: Style your application with utility-first CSS framework Tailwind CSS.
- **Shadcn UI** : The most trending UI library for modern looking apps. Input, button, sheet, sonner , dropdown and avatar already added!
- **SEO Optimized**: The project is designed with SEO in mind, including meta tags, OG tags, and descriptions to improve search engine visibility and ranking.
- **Authentication**: Integrated with AuthJS v5 for secure user authentication and management, supporting various authentication flows and strategies.
- **Database Integration**: Utilizes Prisma Accelerate for database operations, offering an efficient and type-safe way to interact with MongoDB in the Edge, for blazing fast operations.
- **Theme Toggle**: Includes functionality for switching between dark and light themes, improving user experience and accessibility.

These features combine to offer a comprehensive solution for developing modern web applications with a focus on performance, usability, and scalability.

### Prerequisites

Ensure you have Node.js installed on your machine. You can check by running `node -v` in your terminal. If not, download and install it from [Node.js website](https://nodejs.org).

### Installation

1. **You can either use this as a template or git clone it:**

   ```sh
   git clone --depth 1 https://github.com/Xeven777/nextjs-with-auth-mongo.git

   ```

This will create a new directory named `nextjs-with-auth-mongo` in your current directory.

2. **Remove the old `.git` directory and initialize a new one:**
   Navigate to the new `nextjs-with-auth-mongo` directory and run the following commands:

   ```sh
   cd nextjs-with-auth-mongo
   rm -rf .git
   git init
   ```

3. **Install the dependencies:**
   Run the following command to install the project dependencies:

   ```sh
   npm install
   ```

4. **Start the development server:**
   After installing the dependencies, start the development server by running:

   ```sh
   npm run dev
   ```

   Now, you should be able to see the application running at `localhost:3000` in your web browser! ✨

#### You can also download the code as Zip or use it as a template.

5. **Setup Environment Variables:**
   Create a new .env.local file and store your credentials there.

   - Step 1: _Generate Auth Secret:_

     Open your terminal.
     Navigate to your project directory.
     Run the command command below. This will generate a new secret key for your authentication system:

     ```sh
     npx auth secret
     ```

     After running this command, you'll receive a new secret key. Copy this key.

   - Step 2: _Set Up GitHub OAuth Keys:_

     Go to your [GitHub account settings](https://github.com/settings/developers)
     Navigate to Developer settings > OAuth Apps.
     Click on "New OAuth App".
     Fill out the form with your application details. For the "Authorization callback URL", enter
     `http://localhost:3000/api/auth/callback` (for dev env). For production env, replace it with your production URL, or else it won't work.
     Once the app is created, you'll be provided with a Client ID and Client Secret.
     Copy both the Client ID and Client Secret.

   - Step 3: _Setup MongoDB and Prisma ORM for Edge:_

     You can obtain this from your [MongoDB Atlas](https://cloud.mongodb.com/) dashboard under Connect > Connect Your Application.
     It Should be in this form: `mongodb+srv://username:<pw>@cluster1.xxx.mongodb.net/xyz`

     For Prisma, go to [Prisma Accelerate](https://www.prisma.io/data-platform/accelerate). Create a new database connection , input your MongoDb connection there and generate the API key. Don't forget to Copy It. Now This will be your Actual `DATABASE_URL` .

   - Step 4: _Configure Environment Variables:_

     In your project root, create a new file named .env.local if it doesn't already exist.
     Open .env.local in your text editor.
     Paste the content of `.env.example` , replacing placeholders with actual values obtained from previous steps:

     AUTH_SECRET="your_auth_secret_here"

     AUTH_GITHUB_ID="your_github_client_id_here"

     AUTH_GITHUB_SECRET="your_github_client_secret_here"

     AUTH_TRUST_HOST=true

     DATABASE_URL="your_prisma_database_url_here"

     NEXT_PUBLIC_URL="http://localhost:3000"

Your Next.js project is now ready to be deployed and used. Make sure to test all functionalities thoroughly before moving forward!

### Contributing

We welcome contributions from the community. Whether you want to add new features, fix bugs, or improve documentation, your help is appreciated.

### Owner

The primary contact for inquiries about the project is [Anish Biswas](https://github.com/Xeven777). Feel free to reach out for any questions, suggestions, or issues related to the project. My [Linkedin](https://www.linkedin.com/in/anish-biswas-767533254/).
