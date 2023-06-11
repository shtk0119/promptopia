import '@styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <div className="app">
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout;
