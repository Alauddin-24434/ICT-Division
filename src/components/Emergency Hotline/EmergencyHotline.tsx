const emergencyHotlines = [
    { icon: "🚒", title: "Fire Emergency Hotline" },
    { icon: "🚓", title: "Police Emergency Hotline" },
    { icon: "🚑", title: "Medical Emergency Hotline" },
    { icon: "🛥️", title: "Coast Guard Hotline" },
    { icon: "🔥", title: "Gas Leak Emergency" },
    { icon: "⚡", title: "Electric Hazard Hotline" },
    { icon: "🌪️", title: "Disaster Response Hotline" },
    { icon: "🧠", title: "Mental Health Support" },
    { icon: "🐕", title: "Animal Control Hotline" },
    { icon: "☠️", title: "Poison Control Center" },
    { icon: "🌊", title: "Flood Emergency Hotline" },
    { icon: "🕵️", title: "Missing Persons Hotline" },
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
