import React, { useEffect, useState } from "react";

function Form() {
  const [url, setUrl] = useState("");
  const [value, setValue] = useState("");

  const finalUrl = url.substring(0, url.lastIndexOf("/"));

  console.log("*Final URL:", finalUrl);

  useEffect(() => {
    setUrl(window.location.href); // full current URL
  }, []);

  useEffect(() => {
    setValue(finalUrl);
  }, [finalUrl]);

  return (
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
          // placeholder={finalUrl}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-white border-black border rounded-lg py-2 px-3 max-w-120"
        />
      </label>
      <label htmlFor="name" className="flex flex-col gap-3">
        <span>* Identify and describe the copyrighted work:</span>
        <textarea
          rows={5}
          // placeholder={finalUrl}
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
  );
}

export default Form;
