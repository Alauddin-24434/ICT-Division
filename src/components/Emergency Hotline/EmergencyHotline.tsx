

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 p-4">
            {emergencyHotlines.map((hotline, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full sm:w-72"
                >
                    <span className="text-4xl mb-2">{hotline.icon}</span>
                    <span className="font-semibold text-center text-lg">{hotline.title}</span>
                </div>
            ))}
        </div>
    );
};

export default EmergencyHotline;
