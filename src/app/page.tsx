
import Hero from './components/Hero';
import AwaitYou from './components/AwaitYou';
import WhyAttend from './components/WhyAttend';
// import Header from './_components/Header';
// import Footer from './_components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* <Header /> */}
      <Hero />
      <AwaitYou />
      <WhyAttend />
      {/* <Footer /> */}
    </main>
  );
}