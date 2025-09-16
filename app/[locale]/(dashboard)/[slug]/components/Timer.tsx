"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

function Timer({ slug }: { slug: string }) {
  const [timeLeft, setTimeLeft] = useState(5);
  const t = useTranslations("Details");

  useEffect(() => {
    if (timeLeft <= 0) return; // stop when reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [timeLeft]);

  return (
    <section className="flex flex-col items-center justify-center my-5 w-full">
      {timeLeft > 0 ? (
        <div className="text-center text-gray-600">
          Please wait <span className="font-bold">{timeLeft}</span> seconds to continue
        </div>
      ) : (
        <Link href={`/${slug}/download`} className="bg-[#5AB696] font-bold text-white rounded-xl px-7 py-3 mt-10">
          {t("freeDownload")}
        </Link>
      )}
    </section>
  );
}

export default Timer;
