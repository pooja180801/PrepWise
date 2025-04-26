# PrepWise - Ace Your Interviews with AI-Powered Voice Mock Interviews

[![Next.js](https://img.shields.io/badge/next.js-v14-blueviolet)](https://nextjs.org/)
[![Vercel](https://img.shields.io/badge/deployed%20on-vercel-black?logo=vercel)](https://vercel.com/)
[![Firebase](https://img.shields.io/badge/firebase-9-orange?logo=firebase)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3-cyan?logo=tailwindcss)](https://tailwindcss.com/)

**PrepWise** is an innovative online platform designed to help you confidently prepare for job interviews. Leveraging the power of AI, PrepWise provides realistic voice-based mock interviews across various roles and industries. Built with Next.js, Vercel API Routes, Firebase, and Tailwind CSS, PrepWise offers a seamless and effective interview practice experience.

## ✨ Key Features

* **Realistic Voice Mock Interviews:** Engage in spoken interviews with an AI interviewer that simulates real-world scenarios.
* **Customizable Interview Settings:** Tailor the interview duration, question difficulty, and industry focus to match your target roles.
* **Intelligent Feedback:** Receive instant feedback on your responses, including clarity, conciseness, and areas for improvement.
* **Diverse Question Bank:** Access a vast library of interview questions covering behavioral, technical, and situational aspects.
* **Performance Tracking:** Monitor your progress over time with detailed analytics and identify your strengths and weaknesses.
* **User-Friendly Interface:** Enjoy a clean and intuitive design powered by Tailwind CSS for a smooth learning experience.
* **Secure Authentication:** Built on Firebase for secure and reliable user authentication.
* **Scalable Backend:** Utilizing Vercel API Routes and Firebase for a robust and scalable backend infrastructure.

## 🚀 Technologies Used

* **[Next.js](https://nextjs.org/):** The React framework for building performant and scalable web applications with server-side rendering and excellent developer experience.
* **[Vercel API Routes](https://vercel.com/docs/functions/serverless-functions):** Serverless functions to handle backend logic and API interactions.
* **[Firebase](https://firebase.google.com/):** A comprehensive platform providing authentication, database (Firestore), and storage solutions.
* **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development and consistent styling.

## 🛠️ Getting Started

To get PrepWise up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd prepwise
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up Firebase:**
    * Create a new project on the [Firebase Console](https://console.firebase.google.com/).
    * Enable Authentication (e.g., Email/Password).
    * Create a Firestore database.
    * Obtain your Firebase configuration object from the Firebase project settings.
    * Create a `.env.local` file in the root of your project and add your Firebase configuration:

        ```env
        NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
        NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
        NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
        ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open your browser and navigate to `http://localhost:3000`.

## ⚙️ Configuration

* **Environment Variables:** Ensure your `.env.local` file is correctly configured with your Firebase credentials. You might need to add other environment variables depending on future features (e.g., API keys for AI services).

---

**Prepare with Confidence. Perform with Excellence. PrepWise.**
