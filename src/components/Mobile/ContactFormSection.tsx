import React from "react";

const ContactFormSection = () => {
  return (
    <form className="mt-10 w-full space-y-6">
  {/* Name */}
  <div>
    <label className="block text-[12px] font-bold text-[#344054] mb-1">Name</label>
    <input
      type="text"
      placeholder="Your name"
      className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none"
    />
  </div>

  {/* Experience */}
  <div>
    <label className="block text-[12px] font-bold text-[#344054] mb-1">
      Do you have previous experience in pool maintenance?
    </label>
    <div className="flex items-center px-4 py-3 border border-[#D0D5DD] rounded-lg shadow-sm bg-white">
      <input
        type="text"
        placeholder="Type"
        className="w-full text-[12px] font-bold text-[#667085] outline-none bg-transparent"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4955cbd56d3ae8e38d75b0cf00fec870501a07a2?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
        className="w-4 h-4 ml-2"
        alt=""
      />
    </div>
  </div>

  {/* Company */}
  <div>
    <label className="block text-[12px] font-bold text-[#344054] mb-1">Company</label>
    <input
      type="text"
      placeholder="Your Company"
      className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none"
    />
  </div>

  {/* Email */}
  <div>
    <label className="block text-[12px] font-bold text-[#344054] mb-1">Email</label>
    <input
      type="email"
      placeholder="email@hosting.com"
      className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none"
    />
  </div>

  {/* Phone */}
  <div>
    <label className="block text-[12px] font-bold text-[#344054] mb-1">Phone number</label>
    <div className="flex items-center px-4 py-3 border border-[#D0D5DD] rounded-lg shadow-sm bg-white">
      <span className="text-[12px] font-bold text-[#667085]">US</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/19a05e667b0aed46d40248ea2d71c3cd3611d63d?placeholderIfAbsent=true&apiKey=06e3f92e1e524befb11420293ad988ac"
        className="w-5 h-5 mx-2"
        alt=""
      />
      <input
        type="tel"
        placeholder="+1 (555) 000-0000"
        className="flex-1 text-[12px] font-bold text-[#667085] outline-none bg-transparent"
      />
    </div>
  </div>

  {/* Message */}
  <div>
    <label className="block text-[12px] font-bold text-[#344054] mb-1">How can we help?</label>
    <textarea
      rows={4}
      placeholder="Write your message..."
      className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none resize-none"
    ></textarea>
  </div>

  {/* Services */}
  <div className="px-4 py-4 rounded-xl">
    <h3 className="text-[12px] font-bold text-[#344054] mb-4">Services</h3>
    <div className="flex flex-col space-y-3">
      {["Regular Maintenance", "Deep and Routine Cleaning", "Repair and Installation", "Content creation", "Pool System Automation", "Other"].map((service) => (
        <label
          key={service}
          className="flex items-center gap-3 text-[12px] font-bold text-[#667085]"
        >
          <input
            type="checkbox"
            className="w-[18px] h-[18px] rounded-[6px] border border-[#D0D5DD] bg-white"
            />            
          {service}
        </label>
      ))}
    </div>
  </div>

  {/* Submit */}
  <div className="w-full flex justify-center">
  <button
    type="submit"
    className="inline-flex items-center justify-center gap-2 px-[20px] py-[12px] bg-[#485AFF] border border-[#7F56D9] text-white text-[12px] font-bold rounded-[8px] shadow-sm"
  >
    Get started
  </button>
</div>


</form>

  );
};

export default ContactFormSection;
