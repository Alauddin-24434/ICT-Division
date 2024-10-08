import dudok from "/images/Dudok.png";
import joruriseba from "/images/joruriseba.jpg";
import fireService from "/images/fireService.jpg";
import narisisu from "/images/nari&sisu.jpg";
import madokdrobbo from "/images/madokdrobbo.jpg";
import muktijuddokollan from "/images/muktijuddokollan.jpg";
import sisuSeba from "/images/sisuseba.png";
import biwta from "/images/biwta.png";
import kormokorta from "/images/kormokorta.png";
import durjogeragambarta from "/images/durjogeragambarta.jpg";
import smartLand from "/images/smartland.png";
import muktijodda from "/images/muktijodda.png";
import eGp from "/images/e-gp.png";
import biddut from "/images/biddut.jpg";
import passport from "/images/passport.jpg";
import btrc from "/images/btrc.webp";
import "./EmergencyHotline.css";
import SectionTitle from "../Shared/SectionTitle/SectionTilte";

const emergencyHotlines = [
  { icon: dudok, title: "Government Information Service" },
  { icon: joruriseba, title: "Emergency Service" },
  { icon: fireService, title: "Fire Service Help Desk" },
  { icon: narisisu, title: "To prevent violence against women and children" },
  { icon: dudok, title: "Dudok Hotline" },
  { icon: durjogeragambarta, title: "Early warning of disasters" },
  { icon: smartLand, title: "Smart land services" },
  { icon: sisuSeba, title: "Call child support" },
  { icon: kormokorta, title: "Bangladesh Employees Welfare Board Hotline" },
  { icon: madokdrobbo, title: "Narcotics Control Hotline" },
  { icon: biwta, title: "BIWTA Hotline" },
  { icon: passport, title: "Passport Bataon Hotline" },
  { icon: muktijuddokollan, title: "Bangladesh Liberation War Welfare Trust" },
  { icon: muktijodda, title: "Bangladesh Freedom Fighter Welfare Trust" },
  { icon: eGp, title: "E-GP Helpline No" },
  { icon: btrc, title: "BTRC Helpline No" },
  { icon: biddut, title: "Electricity Department Services Helpline No" },
];

const EmergencyHotline = () => {
  return (
    <div>
      <section data-aos="fade-up" className="p-4">
        <SectionTitle title="Emergency Hotline" />
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 p-4">
          {emergencyHotlines.map((hotline, index) => (
            <div
              key={index}
              className="hotlineCard flex flex-col items-center p-4 border rounded-lg bg-white shadow-md relative"
            >
              <div className="triangle triangle-bottom-left "></div>
              <div className="triangle triangle-top-right"></div>
              <div className="avatar absolute -top-8 rounded-full border-2">
                <img
                  src={hotline.icon}
                  className="w-14 h-14 rounded-full border-2 object-cover"
                  alt="icon"
                />
              </div>
              <span className="font-semibold text-center text-sm text-gray-700 ">
                {hotline.title.slice(0, 30)}...
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EmergencyHotline;
