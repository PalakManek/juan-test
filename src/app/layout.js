"use client"
import './globals.css'
import { CommentsProvider } from './CommentsProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><CommentsProvider>{children}</CommentsProvider></body>
    </html>
  )
}
