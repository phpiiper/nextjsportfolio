

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A portfolio website of Piper Phair" />
        <meta name="keywords" content="portfolio" />
        <title>Piper Phair - Resume</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant&family=Cormorant+Garamond:ital,wght@0,400;1,300&family=Cormorant+Upright&family=Gowun+Batang:wght@400;700&display=swap" rel="preload" as="style" />
         <link href="https://fonts.googleapis.com/css2?family=Cormorant&family=Cormorant+Garamond:ital,wght@0,400;1,300&family=Cormorant+Upright&family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet" />
         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
    </head>
      <body>{children}</body>
    </html>
  )
}
