import Booking from "@/components/Booking/Booking";
import Map from "@/components/Map/Map";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <Booking />
        </div>
        <div className="col-span-2 bg-pink-700">
          <Map />
        </div>
      </div>
    </main>
  );
}
