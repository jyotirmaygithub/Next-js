export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children} 
        <h1>this is the layout of the layout.tsx</h1>
      </body>
    </html>
  )
}
