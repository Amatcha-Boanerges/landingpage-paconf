import Hero from './components/Hero';
import AwaitYou from './components/AwaitYou';
import CountdownTimer from './components/CountdownTimer';
import BookYourSeat from './components/BookYourSeat';
import WhyAttend from './components/WhyAttend';
import PastAttendees from './components/PastAttendees';

import WhatYouWillLearn from './components/WhatYouWillLearn';
// import Header from './_components/Header';
// import Footer from './_components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* <Header /> */}
      <Hero />
      <AwaitYou />
      <CountdownTimer />
      <BookYourSeat />
      <WhyAttend />
      <BookYourSeat />
      <WhatYouWillLearn />
      <BookYourSeat />
      <PastAttendees />
      {/* <Footer /> */}
    </main>
  );
}
