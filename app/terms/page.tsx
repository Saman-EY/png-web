"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

function TermsPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <section className="p-5 max-w-[1200px] mx-auto my-5 mb-10">
        <h6 className="font-bold mb-5">Your Agreement</h6>
        <div className="termText overflow-y-auto max-h-[60vh] px-5" dangerouslySetInnerHTML={{ __html: text }} />

        <div className="mt-8 flex items-center justify-between ">
          <label className="flex items-center gap-2">
            <input checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} type="checkbox" />
            <span>I confirm that I have read and accept the terms and conditions and privacy policy.</span>
          </label>

          <div className="flex items-center gap-4">
            <button className="bg-slate-300 text-sm rounded-lg px-4 py-2">Cancel</button>
            <button
              onClick={() => setModal(true)}
              disabled={!isChecked}
              className={`bg-emerald-200 text-sm rounded-lg px-6 py-2  ${
                !isChecked && "opacity-50 !cursor-not-allowed"
              } `}
            >
              Accept
            </button>
          </div>
        </div>
      </section>

      {modal && <Modal setModal={setModal} />}
    </>
  );
}

export default TermsPage;

const text = `<p><strong>Last Revised:</strong> December 16, 2025</p>

  <p>
    Welcome to <strong>www.lorem-ipsum.info</strong>. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.
  </p>

  <h2>1. Your Agreement</h2>
  <p>
    By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.
  </p>
  <p>
    <strong>PLEASE NOTE:</strong> We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
  </p>

  <h2>2. Privacy</h2>
  <p>
    Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.
  </p>

  <h2>3. Linked Sites</h2>
  <p>
    This Site may contain links to other independent third-party Web sites ("Linked Sites”). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and do not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.
  </p>

  <h2>4. Forward Looking Statements</h2>
  <p>
    All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.
  </p>

  <h2>5. Disclaimer of Warranties and Limitation of Liability</h2>
  <p>
    <strong>A.</strong> This site may contain inaccuracies and typographical errors. We do not warrant the accuracy or completeness of the materials or the reliability of any advice, opinion, statement or other information displayed or distributed through the site. You expressly understand and agree that:
  </p>
  <ul>
    <li>Your use of the site shall be at your sole risk;</li>
    <li>The site is provided on an "as is" and "as available" basis;</li>
    <li>We disclaim all warranties of any kind, whether express or implied;</li>
    <li>We make no warranty with respect to the results that may be obtained;</li>
    <li>Any material downloaded is at your own discretion and risk;</li>
    <li>You will be solely responsible for any damage or data loss.</li>
  </ul>
  <p>
    <strong>B.</strong> You understand and agree that under no circumstances, including negligence, shall we be liable for any direct, indirect, incidental, special, punitive, or consequential damages that result from the use of, or the inability to use, any of our sites.
  </p>

  <h2>6. Exclusions and Limitations</h2>
  <p>
    Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for incidental or consequential damages. Accordingly, our liability in such jurisdiction shall be limited to the maximum extent permitted by law.
  </p>

  <h2>7. Our Proprietary Rights</h2>
  <p>
    This Site and all its Contents are intended solely for personal, non-commercial use. Except as expressly provided, nothing within the Site shall be construed as conferring any license under our or any third party's intellectual property rights. Without limiting the generality of the foregoing, you acknowledge and agree that all content available through and used to operate the Site and its services is protected by copyright, trademark, patent, or other proprietary rights.
  </p>
  <ul>
    <li>Do not modify, alter, or deface trademarks.</li>
    <li>Do not hold yourself out as sponsored or affiliated with us.</li>
    <li>Do not use trademarks or content for unauthorized purposes.</li>
    <li>Do not defame or disparage us.</li>
    <li>Do not adapt, decompile, disassemble, or reverse engineer the Site.</li>
  </ul>
  <p>
    The framing, mirroring, scraping, or data mining of the Site or any of its content in any form and by any method is expressly prohibited.
  </p>

  <h2>8. Indemnity</h2>
  <p>
    By using the Site you agree to indemnify us and affiliated entities and hold them harmless from any and all claims and expenses, including attorney's fees, arising from your use of the Site.
  </p>

  <h2>9. Copyright and Trademark Notice</h2>
  <p>
    Except our generated dummy copy, which is free to use for private and commercial use, all other text is copyrighted. generator.lorem-ipsum.info © 2013, all rights reserved.
  </p>

  <h2>10. Intellectual Property Infringement Claims</h2>
  <p>
    It is our policy to respond expeditiously to claims of intellectual property infringement. We will promptly process and investigate notices of alleged infringement and will take appropriate actions under the DMCA and other applicable laws. Notices should be directed to:
  </p>
  <address>
    generator.lorem-ipsum.info<br />
    126 Electricov St.<br />
    Kiev, Kiev 04176<br />
    Ukraine<br />
    contact@lorem-ipsum.info
  </address>

  <h2>11. Place of Performance</h2>
  <p>
    This Site is controlled, operated and administered by us from our office in Kiev, Ukraine. We make no representation that materials are appropriate or available outside Ukraine. If you access this Site from a location outside of Ukraine, you are responsible for compliance with local laws.
  </p>

  <h2>12. General</h2>
  <p>
    <strong>A.</strong> If any provision of these Terms and Conditions is held to be invalid or unenforceable, the provision shall be removed or interpreted in a manner as to be enforceable, and the remaining provisions shall be enforced.
  </p>
  <p>
    <strong>B.</strong> No Joint Venture, No Derogation of Rights. You agree that no joint venture, partnership, employment, or agency relationship exists between you and us as a result of these Terms and Conditions or your use of the Site.
  </p>`;

const Modal = ({ setModal }: { setModal: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div onClick={() => setModal(false)} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white p-5 rounded-lg shadow-lg max-w-2xl w-full py-12 overflow-auto flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-7">Form Submitted Successfully!</h2>

        <p className="font-black max-w-100 text-sm text-center">
          It is a long established fact that a reader will be distracted by the readable.
        </p>

        <p className="max-w-100 text-sm mt-2 text-center">
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
          using
        </p>

        <p className="max-w-100 text-sm mt-5 text-center">The standard chunk of Lorem Ipsum used since the 1500s</p>

        <Link href="/" className="bg-emerald-200 text-sm rounded-lg px-6 py-2 w-full max-w-xs mt-5 text-center">
          Got It Thanks!
        </Link>
      </div>
    </div>
  );
};
