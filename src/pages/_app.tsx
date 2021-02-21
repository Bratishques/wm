import { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";
import '@/styles/global.css';
import { SidebarContextProvider } from '@/context/sidebarContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarContextProvider>
      <Component {...pageProps} />;
    </SidebarContextProvider>
  );
}
