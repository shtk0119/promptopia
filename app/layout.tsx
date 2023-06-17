import '@styles/globals.css';
import { ReactNode } from 'react';
import { Provider } from '@components/Provider';
import { Nav } from '@components/Nav';

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <div className="app">
            <Nav />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;
