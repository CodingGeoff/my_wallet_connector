import Web3ModalProvider from "../context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Web3ModalProvider>
         
          {children}
          
        </Web3ModalProvider>
      </body>
    </html>
  );
}
