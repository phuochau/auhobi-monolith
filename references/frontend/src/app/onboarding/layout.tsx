
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
        {children}
    </div>
  )
}