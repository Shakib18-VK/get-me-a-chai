"use client"

import React, { useEffect } from "react"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

const Login = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    document.title = "Login - Get Me A Chai"

    if (status === "authenticated") {
      router.push("/dashboard")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    )
  }

  return (
    <div className="text-white py-14 container mx-auto">
      <h1 className="text-center font-bold text-3xl mb-8">
        Login to Get Started
      </h1>

      <div className="flex flex-col gap-4 items-center">

        {/* GOOGLE LOGIN */}
        <button
          onClick={() => signIn("google")}
          className="flex items-center w-64 bg-white text-black border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium hover:bg-gray-200"
        >
          <svg className="h-6 w-6 mr-2" viewBox="-0.5 0 48 48">
            <path fill="#FBBC05" d="M9.8 24c0-1.5.3-3 .7-4.4L2.6 13.6C1.1 16.7.2 20.3.2 24s.9 7.3 2.4 10.4l7.9-6.1C10.1 27 9.8 25.5 9.8 24z"/>
            <path fill="#EB4335" d="M23.7 10.1c3.3 0 6.3 1.2 8.6 3.1l6.8-6.8C35 2.8 29.7.5 23.7.5 14.4.5 6.4 5.8 2.6 13.6l7.9 6C12.4 14.1 17.5 10.1 23.7 10.1z"/>
            <path fill="#34A853" d="M23.7 37.9c-6.2 0-11.3-4-13.2-9.5l-7.9 6c3.8 7.8 11.8 13.1 21.1 13.1 5.7 0 11.2-2 15.3-5.8l-7.5-5.8c-2.1 1.3-4.8 2-7.8 2z"/>
            <path fill="#4285F4" d="M46.1 24c0-1.4-.2-2.9-.5-4.3H23.7v9.1h12.6c-.6 3.1-2.3 5.5-4.8 7l7.5 5.8C43.3 37.6 46.1 31.6 46.1 24z"/>
          </svg>
          Continue with Google
        </button>

        {/* GITHUB LOGIN */}
        <button
          onClick={() => signIn("github")}
          className="flex items-center w-64 bg-black text-white rounded-lg shadow-md px-6 py-2 text-sm font-medium hover:bg-gray-800"
        >
          <svg className="h-6 w-6 mr-2 fill-white" viewBox="0 0 24 24">
            <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8.8 1.6 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C16.9 5 18 5.3 18 5.3c.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/>
          </svg>
          Continue with GitHub
        </button>

      </div>
    </div>
  )
}

export default Login
