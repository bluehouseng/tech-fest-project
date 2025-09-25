'use client'

import Header from "./components/landing/header";
import Body from "./components/landing/body"; 
import Agenda from "./components/landing/agenda-review";
import Partners from "./components/landing/partners";
import Footer from "./components/landing/footer";
import Host from "./components/landing/host";
import Keyspeaker from "./components/landing/keySpeakers";

export default function LandingPage() {
  return (
	  <main>
		<Header />
		<Body />
		<Host/>
		<Keyspeaker/>
		<Agenda />
		<Partners />
		<Footer />
		
	  </main>
  );
}