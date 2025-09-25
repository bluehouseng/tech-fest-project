'use client'

import {motion} from "framer-motion";
import Body from "./components/landing/body"; 
import Agenda from "./components/landing/agenda-review";
import Partners from "./components/landing/partners";

import Host from "./components/landing/host";
import Keyspeaker from "./components/landing/keySpeakers";

export default function LandingPage() {
  return (
	<main className="relative min-h-screen bg-[#fafaf9] overflow-hidden">

			<div className="relative z-10">
				<Body />
        <Host/>
        <Keyspeaker/>
				<Agenda />
				<Partners />
			</div>
	  </main>
  );
}