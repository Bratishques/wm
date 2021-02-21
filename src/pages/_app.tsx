import { AppProps } from 'next/app';
import "../styles/globals.css"
import { SidebarContextProvider } from '@/context/sidebarContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarContextProvider>
      <Component {...pageProps} />;
    </SidebarContextProvider>
  );
}
