/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import "tailwindcss/tailwind.css";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <html lang="en-GB">
      <head>
        <title>Xyncer - Login</title>
        <link
          rel="icon"
          href="https://www.svgrepo.com/show/396470/file-folder.svg"
        />
      </head>

      <body>
        <div>
          <main className="bg-gray-900">
            <section className="bg-white dark:bg-gray-900">
              <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside
                  className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
                >
                  <img
                    alt="Pattern"
                    src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </aside>

                <main
                  className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                  <div className="max-w-xl lg:max-w-3xl">
                    <a className="block text-blue-600" href="/">
                      <span className="sr-only">Home</span>
                      <img
                        src="https://www.svgrepo.com/show/396470/file-folder.svg"
                        width="50px"
                      />
                    </a>

                    <h1
                      className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl"
                    >
                      Welcome to Xyncer 👋
                    </h1>

                    <p
                      className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400"
                    >
                      Share and manage files within your organisation with ease.
                      Xyncer is a simple, self-hostable, and secure file sharing
                      platform. Say goodbye to third-party file sharing services,
                      and say hello the the future. Xyncer. Security, by design.
                    </p>

                    <LoginForm />
                  </div>
                </main>
              </div>
            </section>
          </main>
        </div>
      </body>
    </html>
  )
}
