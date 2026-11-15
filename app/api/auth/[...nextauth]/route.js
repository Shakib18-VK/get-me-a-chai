import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import connectDb from "@/db/connectDb"
import User from "@/models/User"

const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "github" || account?.provider === "google") {
        await connectDb()

        const existingUser = await User.findOne({ email: user.email })

        if (!existingUser) {
          await User.create({
            email: user.email,
            username: user.name || user.email.split("@")[0],
            provider: account.provider,
          })
        }

        return true
      }
      return false
    },

    async session({ session }) {
      await connectDb()

      const dbUser = await User.findOne({ email: session.user.email })

      if (dbUser) {
        session.user.name = dbUser.username
        session.user.id = dbUser._id.toString()
      }

      return session
    },
  },
})

export { authoptions as GET, authoptions as POST }
