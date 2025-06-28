import { FaGlobeAsia } from "react-icons/fa";

function LocationBadge() {
    return (
        <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 text-white px-4 py-2 rounded-full shadow-lg max-w-fit">
            <div className="text-sm leading-snug text-black">
                <p className="font-medium">Located in</p>
                <p className="">Lamongan, Indonesia.</p>
            </div>
            <FaGlobeAsia className="text-2xl text-black drop-shadow-lg animate-globe" />
        </div>
    );
}

export default LocationBadge;
