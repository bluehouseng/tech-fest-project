'use client'

import Header from "./components/landing/header";
import Body from "./components/landing/body"; 
import Agenda from "./components/landing/agenda-review";
import Partners from "./components/landing/partners";
import Footer from "./components/landing/footer";

export default function LandingPage() {
  return (
	  <main>
		<Header />
		<Body />
		<Agenda />
		<Partners />
		<Footer />
	  </main>
  );
}