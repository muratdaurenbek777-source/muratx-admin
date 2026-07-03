import './globals.css'

export const metadata = {
  title: 'MuratX Admin',
  description: 'Личный кабинет MuratX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}