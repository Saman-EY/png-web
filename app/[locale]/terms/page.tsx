"use client";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";

function TermsPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [modal, setModal] = useState(false);

  const t = useTranslations("TermsPage");
  const text2 = t.raw("termFullText");

  return (
    <>
      <section className="p-5 max-w-[1200px] mx-auto my-5 mb-10">
        <h6 className="font-bold mb-5">{t("yourAgreement")}</h6>
        <div className="termText overflow-y-auto max-h-[60vh] px-5" dangerouslySetInnerHTML={{ __html: text2 }} />

        <div className="mt-8 flex items-center justify-between flex-wrap gap-5">
          <label className="flex items-center gap-2">
            <input checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} type="checkbox" />
            <span>{t("policyText")}</span>
          </label>

          <div className="flex items-center gap-4  w-full md:w-auto flex-col-reverse md:flex-row">
            <button className="bg-slate-300 text-sm rounded-lg px-4 py-2 w-full md:w-auto">{t("cancel")}</button>
            <button
              onClick={() => setModal(true)}
              disabled={!isChecked}
              className={`bg-emerald-200 text-sm rounded-lg px-6 py-2  w-full md:w-auto ${
                !isChecked && "opacity-50 !cursor-not-allowed"
              } `}
            >
              {t("accept")}
            </button>
          </div>
        </div>
      </section>

      {modal && <Modal setModal={setModal} />}
    </>
  );
}

export default TermsPage;

const Modal = ({ setModal }: { setModal: Dispatch<SetStateAction<boolean>> }) => {
  const t = useTranslations("TermsPage");

  return (
    <div onClick={() => setModal(false)} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-5 rounded-lg shadow-lg max-w-2xl w-full mx-5 py-12 overflow-auto flex flex-col items-center justify-center"
      >
        <h2 className="text-xl font-bold mb-7">{t("modalTitle")}</h2>

        <p className="font-black max-w-100 text-sm text-center">{t("modalText1")}</p>

        <p className="max-w-100 text-sm mt-2 text-center">{t("modalText2")}</p>

        <p className="max-w-100 text-sm mt-5 text-center">{t("modalText3")}</p>

        <Link href="/" className="bg-emerald-200 text-sm rounded-lg px-6 py-2 w-full max-w-xs mt-5 text-center">
          {t("modalBtn")}
        </Link>
      </div>
    </div>
  );
};
