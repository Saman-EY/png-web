import Image from "next/image";
import Form from "./components/Form";
import { useTranslations } from "next-intl";

function CopyRightPage() {
  const t = useTranslations("CopyRightPage");

  return (
    <section className="w-full max-w-[1320px] mx-auto pb-10 pt-5 px-5">
      {/* titles */}
      <div className="flex items-center justify-center flex-col gap-3">
        <h1 className="font-bold text-lg sm:text-3xl  flex items-center gap-3 ">
          <Image src="/lock.svg" className="w-10 md:w-auto" alt="logo" width={60} height={82} />
          {t("title")}
        </h1>
        <h6 className="text-lg">{t("subTitle")}</h6>
      </div>

      {/* content */}
      <section className="bg-white py-10 px-5 rounded-3xl mt-3">
        <p className="font-bold text-lg">{t("text1")}</p>

        <div className="flex flex-col gap-4 my-5">
          <h5 className="font-bold text-xl flex items-center gap-3">
            {/* icon */}
            <Image src="/ownership.svg" className="" alt="logo" width={60} height={60} />
            {t("CHead1")}
          </h5>

          <p>{t("CText1")}</p>
        </div>

        <div className="flex flex-col gap-4 my-5">
          <h5 className="font-bold text-xl flex items-center gap-3">
            {/* icon */}
            <Image src="/permitted.svg" className="" alt="logo" width={60} height={60} />
            {t("CHead2")}
          </h5>

          <p>{t.raw("CText2").f1}</p>
          <ul>
            <li>• {t.raw("CText2").f2}</li>
            <li>• {t.raw("CText2").f3}</li>
          </ul>
          <p>{t.raw("CText2").f4}</p>
          <ul>
            <li>• {t.raw("CText2").f5}</li>
            <li>• {t.raw("CText2").f6}</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 my-5">
          <h5 className="font-bold text-xl flex items-center gap-3">
            {/* icon */}
            <Image src="/user-submit.svg" className="" alt="logo" width={60} height={60} />
            {t("CHead3")}
          </h5>

          <p>{t.raw("CText3").f1}</p>
          <ul>
            <li>• {t.raw("CText3").f2}</li>
            <li>• {t.raw("CText3").f3}</li>
          </ul>
        </div>
      </section>

      <h6 className="font-bold text-xl my-10">{t("FormHeader")}</h6>

      {/* form */}
      <Form />
    </section>
  );
}

export default CopyRightPage;
