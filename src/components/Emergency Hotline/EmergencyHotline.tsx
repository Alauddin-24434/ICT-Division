
import dudok from '/images/Dudok.png'
import joruriseba from '/images/joruriseba.jpg'
import fireService from '/images/fireService.jpg'
import narisisu from '/images/nari&sisu.jpg'
import madokdrobbo from '/images/madokdrobbo.jpg'
import muktijuddokollan from '/images/muktijuddokollan.jpg'
import sisuSeba from '/images/sisuseba.png'
import biwta from '/images/biwta.png'
import kormokorta from '/images/kormokorta.png'
import durjogeragambarta from '/images/durjogeragambarta.jpg'
import smartLand from '/images/smartland.png'
import muktijodda from '/images/muktijodda.png'
import eGp from '/images/e-gp.png'
import biddut from '/images/biddut.jpg'
import passport from '/images/passport.jpg'
import btrc from '/images/btrc.webp'
import './EmergencyHotline.css';

const emergencyHotlines = [
  { icon:dudok, title: "Government Information Service" },
  { icon: joruriseba, title: "Emergency Service" },
  { icon: fireService , title: "Fire Service Help Desk" },
  { icon:narisisu, title: "To prevent violence against women and children" },
  { icon: dudok, title: "Dudok Hotline" },
  { icon: durjogeragambarta, title: "Early warning of disasters" },
  { icon:smartLand, title: "Smart land services" },
  { icon:sisuSeba, title: "Call child support" },
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
    <div >
        <section  >
        <h1 className="text-center  text-3xl md:text-4xl text-[#6265da] font-bold my-12">Emergency Hotline</h1>
      <div data-aos="fade-up" className="mx-auto max-w-7xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-5 gap-12 p-2">
        {emergencyHotlines.map((hotline, index) => (
          <div
            key={index}
            className=" hotlineCard flex flex-col items-center h-[100px] w-full md:w-[180px]  md:h-[120px] p-4 border relative"
          >
            <div  className=" triangle triangle-bottom-left"></div>
            <div className="triangle triangle-top-right"></div>
           <div className='avater absolute -top-6 rounded-full border-2  '>
           <img src={hotline.icon} className="w-14 h-14 rounded-full  border-2" alt="" />
           </div>
            <span className="font-semibold text-center text-sm">{hotline.title}.</span>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default EmergencyHotline;
