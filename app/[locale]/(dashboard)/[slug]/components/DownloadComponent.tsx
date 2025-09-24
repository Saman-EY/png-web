"use client";
import { useTranslations } from "next-intl";
import React from "react";

function DownloadComponent({ link, title }: { link: string; title: string }) {
  const t = useTranslations("downloadPage");

  const handleDownload = async () => {
    const response = await fetch(`${link}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${title}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload} className="bg-[#5AB696] font-bold text-white rounded-xl px-7 py-3">
      {t("freeDownload")}
    </button>
  );
}

export default DownloadComponent;
