import InternetIcon from "@/assets/svgs/InternetIcon";
import ShapesIcon from "@/assets/svgs/ShapesIcon";
import Header from "@/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <section className=" pb-10 pt-5 px-5">
        {/* titles */}
        <div className="flex items-center justify-center flex-col gap-3">
          <h1 className="font-bold text-lg sm:text-3xl  flex items-center gap-3 ">
            <Image src="/lock.svg" className="w-10 md:w-auto" alt="logo" width={60} height={82} /> Copyright Policy
          </h1>
          <h6 className="text-lg">Last updated: July 6, 2025</h6>
        </div>

        {/* content */}
        <section className="bg-white py-10 px-5 rounded-3xl mt-3">
          <p className="font-bold text-lg">
            We at PNG2.COM respect intellectual property rights and expect our users to do the same. This Copyright
            Policy outlines our practices regarding copyrighted content on our plat.
          </p>

          <div className="flex flex-col gap-4 my-5">
            <h5 className="font-bold text-xl flex items-center gap-3">
              {/* icon */}
              <Image src="/ownership.svg" className="" alt="logo" width={60} height={60} />
              Ownership of Content
            </h5>

            <p>
              Unless otherwise stated, all images, graphics, illustrations, Ul designs, and website content on PNG2. COM
              are either owned by us or licensed to us. These works are protected under international copyright laws on
              our.
            </p>
          </div>

          <div className="flex flex-col gap-4 my-5">
            <h5 className="font-bold text-xl flex items-center gap-3">
              {/* icon */}
              <Image src="/permitted.svg" className="" alt="logo" width={60} height={60} />
              Permitted Usage
            </h5>

            <p>You are allowed to:</p>
            <ul>
              <li>• Browse and dowNoad PNG images for personal or non-commeral use.</li>
              <li>• Share images with proper credit, where applicable.</li>
            </ul>
            <p>You are NOT allowed to:</p>
            <ul>
              <li>• Resell, disredstribute, or relipload our content to other websites or</li>
              <li>• Ciaim ownership of any content from PNG2.COM.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 my-5">
            <h5 className="font-bold text-xl flex items-center gap-3">
              {/* icon */}
              <Image src="/user-submit.svg" className="" alt="logo" width={60} height={60} />
              User-Submitted Content
            </h5>

            <p>If you upload or share content on PNG2. COM, you must ensure:</p>
            <ul>
              <li>• You own the rights to that content.</li>
              <li>• It does not infringe on any third paty rights.</li>
            </ul>
          </div>
        </section>

        <h6 className="font-bold text-xl my-10">Steps to remove an image from cleanpng</h6>

        {/* form */}
        <form className="flex flex-col gap-5" action="#">
          <label htmlFor="name" className="flex flex-col gap-3">
            <span>* Your name:</span>
            <input type="text" className="bg-white border-black border rounded-lg py-2 px-3 max-w-120" />
          </label>
          <label htmlFor="name" className="flex flex-col gap-3">
            <span>* Your email:</span>
            <input type="text" className="bg-white border-black border rounded-lg py-2 px-3 max-w-120" />
          </label>
          <label htmlFor="name" className="flex flex-col gap-3">
            <span>* Subject:</span>
            <input
              type="text"
              placeholder="Remove an image from website"
              className="bg-gray-200 border-black  rounded-lg py-2 px-3 max-w-120"
            />
          </label>
          <label htmlFor="name" className="flex flex-col gap-3">
            <span>* Your URL of the copyrighted work:</span>
            <input type="text" className="bg-white border-black border rounded-lg py-2 px-3 max-w-120" />
          </label>
          <label htmlFor="name" className="flex flex-col gap-3">
            <span>* Reported URL on website:</span>
            <input
              type="text"
              placeholder="https://www.cleanpng.com/png-farmer-with-........."
              className="bg-white border-black border rounded-lg py-2 px-3 max-w-120"
            />
          </label>
          <label htmlFor="name" className="flex flex-col gap-3">
            <span>* Identify and describe the copyrighted work:</span>
            <textarea
              rows={5}
              placeholder="https://www.cleanpng.com/png-farmer-with-........."
              className="bg-white resize-none border-black border rounded-lg py-2 px-3 max-w-120"
            />
          </label>

          <div>
            <label htmlFor="name" className="flex flex-col gap-3">
              <span>* Code</span>
              <input type="text" className="bg-white border-black border rounded-lg py-2 px-3 max-w-30" />
            </label>
          </div>

          <button className="bg-[#5AB696] w-fit rounded-xl px-5 py-2 text-lg font-medium hover:bg-[#51a688] transition-all  shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] text-white">
            SUBMIT
          </button>
        </form>
      </section>
    </>
  );
}
