/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import "tailwindcss/tailwind.css";

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

                    <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="FirstName"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                        >
                          Username
                        </label>

                        <input
                          type="text"
                          id="FirstName"
                          name="first_name"
                          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="LastName"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                        >
                          Password
                        </label>

                        <input
                          type="text"
                          id="LastName"
                          name="last_name"
                          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                          <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                          />

                          <span
                            className="text-sm text-gray-700 dark:text-gray-200"
                          >
                            Keep me logged in.
                          </span>
                        </label>
                      </div>

                      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
                          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                        >
                          Go!
                        </button>
                      </div>
                    </form>
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
