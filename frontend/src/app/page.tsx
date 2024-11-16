import Image from 'next/image';
import { Header, Navbar } from './components';
import { Carousel } from './components/carousel';

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
    </div>
  );
}
