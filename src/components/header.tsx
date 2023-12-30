import Navbar from '@/components/navbar'
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute top-10 w-full px-10 z-10">
      <div className="w-full flex items-center justify-between text-white text-base">
        <p className="text-white font-bold tracking-widest">Lagalag</p>
        <Navbar />
        {/* <Menu /> */}
        <p className="text-white font-semibold">Menu</p>
      </div>
    </header>
  );
}

