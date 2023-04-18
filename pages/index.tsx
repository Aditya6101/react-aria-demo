import { Inter } from "next/font/google";
import Button from "@/components/Button";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Tabs = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "About",
  },
  {
    id: 3,
    label: "Work",
  },
];

export default function Home() {
  const [activeId, setActiveId] = useState(1);

  return (
    <main
      className={`grid h-screen bg-neutral-800 place-content-center ${inter.className}`}
    >
      <div className="space-x-3">
        {Tabs.map((tab) => (
          <Button
            key={tab.id}
            active={activeId === tab.id}
            onPress={() => setActiveId(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
    </main>
  );
}
