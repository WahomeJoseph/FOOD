import Navigation from '@/components/nav/Navigation.jsx';
import './globals.css';
import NavBg from '@/components/nav/NavBg';

export const metadata = {
  title: 'Where Crockery Collide',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBg />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
