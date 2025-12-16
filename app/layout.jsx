

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Práctica</title>
      </head>
      <h1>hola world</h1>
      <body>{children}</body>
    </html>
  );
}