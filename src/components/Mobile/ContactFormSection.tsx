'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactFormSection = () => {
  const searchParams = useSearchParams();
  const gallonsFromCalc = searchParams.get("gallons");
  const vacuuming = searchParams.get("vacuuming");
  const filterWash = searchParams.get("filterWash");
  const total = searchParams.get("total");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [gallonsFromForm, setGallonsFromForm] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [experience, setExperience] = useState("Pool owner");
  const [phone, setPhone] = useState('');
  const [showClientForm, setShowClientForm] = useState(false);

  const [clientFullName, setClientFullName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientAddress, setClientAddress] = useState('');

  const handleExperienceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setExperience(value);
    setShowClientForm(value === "Pool Servuce Technician" || value === "Pool Repair Technician");
  };

  // Manejo de checkboxes de servicios
  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const clientExtraData = showClientForm ? {
      fullName: clientFullName,
      phone: clientPhone,
      email: clientEmail,
      company: clientCompany,
      address: clientAddress
    } : {};

    const data = {
      name,
      experience,
      phone,
      email,
      company,
      gallonsFromForm,
      message,
      services: selectedServices,
      clientExtraData,
      fromCalculator: {
        gallons: gallonsFromCalc,
        vacuuming,
        filterWash,
        total,
      },
    };

    const res = await fetch("/apiMobile/send-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (result.success) {
      alert("Enviado correctamente ✅");
    } else {
      alert("Error al enviar ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full space-y-6">
    <div>
      <label className="block text-[12px] font-bold text-[#344054] mb-1">Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none" />
    </div>

    <div className="space-y-6">
      <div>
        <label className="block text-[12px] font-bold text-[#344054] mb-1">I am a</label>
        <div className="flex items-center px-4 py-3 border border-[#D0D5DD] rounded-lg shadow-sm bg-white">
          <select value={experience} onChange={handleExperienceChange} className="w-full text-[12px] font-bold text-[#667085] outline-none bg-transparent">
            <option value="Pool owner">Pool owner</option>
            <option value="Pool Servuce Technician">Pool Service Technician</option>
            <option value="Pool Repair Technician">Pool Repair Technician</option>
          </select>
        </div>
      </div>

      {showClientForm && (
        <div className="mt-4 border border-gray-400 rounded-lg p-4">
          <h2 className="text-base sm:text-lg font-semibold text-[#344054] mb-4">Client Information</h2>
          <div className="mt-4 flex flex-col gap-4">
            <div>
              <label className="block text-[12px] font-bold text-[#344054] mb-1">Client Full Name</label>
              <input
                type="text"
                value={clientFullName}
                onChange={(e) => setClientFullName(e.target.value)}
                className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-[12px] font-bold text-[#344054] mb-1">Client Phone Number</label>
              <PhoneInput
                country={'us'}
                value={clientPhone}
                onChange={setClientPhone}
                inputStyle={{ width: '100%', height: '48px', fontSize: '12px', fontWeight: 'bold', color: '#667085', border: '1px solid #D0D5DD', borderRadius: '8px', backgroundColor: '#fff' }}
                containerStyle={{ width: '100%', borderRadius: '8px' }}
                buttonStyle={{ border: 'none', backgroundColor: 'transparent' }}
              />
            </div>
            <div>
              <label className="block text-[12px] font-bold text-[#344054] mb-1">Client Email</label>
              <input
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-[12px] font-bold text-[#344054] mb-1">Client Company (optional)</label>
              <input
                type="text"
                value={clientCompany}
                onChange={(e) => setClientCompany(e.target.value)}
                className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-[12px] font-bold text-[#344054] mb-1">Client Address</label>
              <input
                type="text"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>

    <div>
      <label className="block text-[12px] font-bold text-[#344054] mb-1">Company</label>
      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your Company" className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none" />
    </div>

    <div>
      <label className="block text-[12px] font-bold text-[#344054] mb-1">How many gallons is your pool?</label>
      <input type="text" value={gallonsFromForm} onChange={(e) => setGallonsFromForm(e.target.value)} placeholder="Don't know? Don’t worry, move on" className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none" />
    </div>

    <div>
      <label className="block text-[12px] font-bold text-[#344054] mb-1">Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@hosting.com" className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none" />
    </div>

    <div>
      <label className="block text-[12px] font-bold text-[#344054] mb-1">Phone number</label>
      <PhoneInput country={'us'} value={phone} onChange={setPhone} inputStyle={{ width: '100%', height: '48px', fontSize: '12px', fontWeight: 'bold', color: '#667085', border: '1px solid #D0D5DD', borderRadius: '8px', backgroundColor: '#fff' }} containerStyle={{ width: '100%', borderRadius: '8px' }} buttonStyle={{ border: 'none', backgroundColor: 'transparent' }} />
    </div>

    <div>
      <label className="block text-[12px] font-bold text-[#344054] mb-1">How can we help?</label>
      <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message..." className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none resize-none" />
    </div>

    <div className="px-4 py-4 rounded-xl">
      <h3 className="text-[12px] font-bold text-[#344054] mb-4">Services</h3>
      <div className="flex flex-col space-y-3">
        {["Regular Maintenance", "Deep and Routine Cleaning", "Repair and Installation", "Custom Pool Design & Construction", "Pool System Automation", "Other"].map((service) => (
          <label key={service} className="flex items-center gap-3 text-[12px] font-bold text-[#667085]">
            <input
              type="checkbox"
              checked={selectedServices.includes(service)}
              onChange={() => handleServiceChange(service)}
              className="w-[18px] h-[18px] rounded-[6px] border border-[#D0D5DD] bg-white"
            />
            {service}
          </label>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-center">
      <button type="submit" className="inline-flex items-center justify-center gap-2 px-[20px] py-[12px] bg-[#485AFF] border border-[#7F56D9] text-white text-[12px] font-bold rounded-[8px] shadow-sm">
        Get started
      </button>
    </div>
  </form>
  );
};

export default ContactFormSection;
