import { MapPin } from "lucide-react";

export default function Venue() {
  const lat = 9.8965;
  const lng = 8.8583;
  const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <section id="venue" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold mb-4">Venue</h2>
        <div className="flex items-start gap-3 text-gray-700 mb-6">
          <MapPin className="mt-1 h-5 w-5 text-red-600" />
          <div>
            <p className="font-medium">Sarau Event Center, Jos</p>
            <p className="text-sm">Coordinates: {lat}, {lng}</p>
            <div className="mt-2 flex gap-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-700 underline hover:no-underline"
              >
                View on Google Maps
              </a>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                {/* <Button size="sm" className="bg-green-700 text-white hover:bg-green-800">
                  Get Directions
                </Button> */}
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-lg border" style={{ paddingBottom: "56.25%" }}>
          <iframe
            title="Sarau Event Center, Jos - Map"
            src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute left-0 top-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}