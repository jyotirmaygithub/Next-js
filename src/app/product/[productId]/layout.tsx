export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    {/* children is responsible to show the text of the page.tsx */}
      {children}
      <p>this is a example of nested layouts</p>
    </>
  );
}
