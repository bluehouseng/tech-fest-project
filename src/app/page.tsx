'use client'

import {motion} from "framer-motion";
import Body from "./components/landing/body"; 
import Agenda from "./components/landing/agenda-review";
import Partners from "./components/landing/partners";

export default function LandingPage() {
  return (
	<main className="relative min-h-screen bg-[#fafaf9] overflow-hidden">

			<div className="relative z-10">
				<Body />
				<Agenda />
				<Partners />
			</div>
	  </main>
  );
}