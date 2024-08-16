

const emergencyHotlines = [

  
    { icon: "🛥️", title: "Government Information Service" },
    { icon: "🔥", title: "Emergency Service" },
    { icon: "⚡", title: "Fire Service Help Desk" },
    { icon: "🌪️", title: "To prevent violence against women and children" },
    { icon: "🧠", title: "Dudok Hotline" },
    { icon: "🐕", title: "Early warning of disasters" },
    { icon: "☠️", title: "Smart land services" },
    { icon: "🌊", title: "Call child support"},
    { icon: "🕵️", title: "Bangladesh Employees Welfare Board Hotline" },
    { icon: "🕵️", title: "Narcotics Control Hotline" },
    { icon: "🕵️", title: "BIWTA Hotline" },
    { icon: "🕵️", title: "Passport Bataon Hotline" },
    { icon: "🕵️", title: "Bangladesh Liberation War Welfare Trust" },
    { icon: "🕵️", title: "Bangladesh Freedom Fighter Welfare Trust" },
    { icon: "🕵️", title: "E-GP Helpline No" },
    { icon: "🕵️", title: "BTRC Helpline No" },
    { icon: "🕵️", title: "Electricity Department Services Helpline No" },

];
const EmergencyHotline = () => {
    return (
     <section className=" ">

   
            <div className="mx-auto max-w-6xl grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-5 gap-4 p-2">
                {emergencyHotlines.map((hotline, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 border rounded-lg  w-40 h-40  "
                    >
                        <span className="text-4xl mb-2">{hotline.icon}</span>
                        <span className="font-semibold text-center text-sm">{hotline.title}</span>
                    </div>
                ))}
            </div>
            </section>
    );
};

export default EmergencyHotline;
