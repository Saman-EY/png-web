"use client";
import Image from "next/image";
import Form from "./components/Form";

function CopyRightPage() {


  return (
    <section className="w-full max-w-[1320px] mx-auto pb-10 pt-5 px-5">
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
          We at PNG2.COM respect intellectual property rights and expect our users to do the same. This Copyright Policy
          outlines our practices regarding copyrighted content on our plat.
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
      <Form />
    </section>
  );
}

export default CopyRightPage;
