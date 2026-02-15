import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1300);
    const finishTimer = setTimeout(() => onFinish(), 1700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[hsl(210,60%,25%)] to-[hsl(215,35%,12%)] transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
        }`}
    >
      <img
        src={logo}
        alt="Ajit Electricals"
        className="h-24 w-auto animate-[pulse_1.5s_ease-in-out_infinite] drop-shadow-2xl md:h-32"
      />
      <div className="mt-6 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2.5 w-2.5 rounded-full bg-white/80"
            style={{
              animation: `pulse 1s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
      <p className="mt-4 font-heading text-sm tracking-widest text-white/60 uppercase">
        Powering Progress
      </p>
    </div>
  );
}
