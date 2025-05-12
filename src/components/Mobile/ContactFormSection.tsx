'use client';
import { useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import imageCompression from 'browser-image-compression';


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

  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);

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

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone.trim()) {
      alert("Por favor ingresa un número de teléfono 📱");
      return;
    }

    if (selectedServices.length === 0) {
      alert("Por favor selecciona al menos un servicio 🛠️");
      return;
    }

    if (showClientForm) {
      if (!clientPhone.trim() || !clientFullName.trim() || !clientEmail.trim() || !clientAddress.trim()) {
        alert("Por favor completa todos los campos del cliente 🧾");
        return;
      }
    }

    const formData = new FormData();

    formData.append('data', JSON.stringify({
      name,
      role: experience,
      phone,
      email,
      company,
      poolSize: gallonsFromForm,
      projectDetails: message,
      services: selectedServices,
      clientFullName: clientFullName || '',
      clientPhone: clientPhone || '',
      clientEmail: clientEmail || '',
      clientCompany: clientCompany || '',
      clientAddress: clientAddress || '',
      fromCalculator: { gallons: gallonsFromCalc, vacuuming, filterWash, total },
    }));
    

    capturedImages.forEach((img) => formData.append("capturedImages", img));
    galleryImages.forEach((img) => formData.append('galleryImages', img));

    

    const res = await fetch("/api/form", { method: "POST", body: formData });
    const result = await res.json();

    alert(result.success ? "Enviado correctamente ✅" : "Error al enviar ❌");
  };

  const fileInputRef = useRef<HTMLInputElement>(null);


  const handleGalleryChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const filesArray = Array.from(e.target.files);

    // 1) Comprime cada imagen a <1MB y max 1024px
    const compressedFiles = await Promise.all(
      filesArray.map(file =>
        imageCompression(file, { maxSizeMB: 1, maxWidthOrHeight: 1024 })
      )
    );

    // 2) Calcula tamaño total en MB
    const totalSizeMB = [...galleryImages, ...compressedFiles]
      .reduce((acc, f) => acc + f.size, 0) / (1024 * 1024);
    if (totalSizeMB > 10) {
      alert("The total size of the images must not exceed 10MB.");
      fileInputRef.current && (fileInputRef.current.value = '');
      return;
    }

    // 3) Comprueba límite de 10 imágenes
    const totalImages = galleryImages.length + capturedImages.length;
    const spaceAvailable = 10 - totalImages;
    if (spaceAvailable <= 0) {
      alert("You have reached the limit of 10 images.");
      fileInputRef.current && (fileInputRef.current.value = '');
      return;
    }

    // 4) Añade sólo las que quepan
    const toAdd = compressedFiles.slice(0, spaceAvailable);
    if (toAdd.length < compressedFiles.length) {
      alert("Only some images were added to avoid exceeding the 10 image limit.");
    }
    setGalleryImages(prev => [...prev, ...toAdd]);
    fileInputRef.current && (fileInputRef.current.value = '');
  };
  
  const removeGalleryImage = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };


  

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full space-y-6">
      <div>
        <label className="block text-[12px] font-bold text-[#344054] mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none" />
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-[12px] font-bold text-[#344054] mb-1">
            I am a <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center px-4 py-3 border border-[#D0D5DD] rounded-lg shadow-sm bg-white">
            <select value={experience} onChange={handleExperienceChange} required className="w-full text-[12px] font-bold text-[#667085] outline-none bg-transparent">
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
                <label className="block text-[12px] font-bold text-[#344054] mb-1">
                  Client Full Name <span className="text-red-500">*</span>
                </label>
                <input type="text" value={clientFullName} onChange={(e) => setClientFullName(e.target.value)} required className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-[#344054] mb-1">
                  Client Phone Number <span className="text-red-500">*</span>
                </label>
                <PhoneInput country={'us'} value={clientPhone} onChange={setClientPhone} inputStyle={{ width: '100%', height: '48px', fontSize: '12px', fontWeight: 'bold', color: '#667085', border: '1px solid #D0D5DD', borderRadius: '8px', backgroundColor: '#fff' }} containerStyle={{ width: '100%', borderRadius: '8px' }} buttonStyle={{ border: 'none', backgroundColor: 'transparent' }} />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-[#344054] mb-1">
                  Client Email <span className="text-red-500">*</span>
                </label>
                <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} required className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-[#344054] mb-1">
                  Client Company <span className="text-gray-400">(optional)</span>
                </label>
                <input type="text" value={clientCompany} onChange={(e) => setClientCompany(e.target.value)} className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-[#344054] mb-1">
                  Client Address <span className="text-red-500">*</span>
                </label>
                <input type="text" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} required className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <label className="block text-[12px] font-bold text-[#344054] mb-1">
          Company <span className="text-gray-400">(optional)</span>
        </label>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your Company" className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none" />
      </div>

      <div>
        <label className="block text-[12px] font-bold text-[#344054] mb-1">
          How many gallons is your pool? <span className="text-gray-400">(optional)</span>
        </label>
        <input type="text" value={gallonsFromForm} onChange={(e) => setGallonsFromForm(e.target.value)} placeholder="Don't know? Don’t worry, move on" className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none" />
      </div>

      <div>
        <label className="block text-[12px] font-bold text-[#344054] mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="email@hosting.com" className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none" />
      </div>

      <div>
        <label className="block text-[12px] font-bold text-[#344054] mb-1">
          Phone number <span className="text-red-500">*</span>
        </label>
        <PhoneInput country={'us'} value={phone} onChange={setPhone} inputStyle={{ width: '100%', height: '48px', fontSize: '12px', fontWeight: 'bold', color: '#667085', border: '1px solid #D0D5DD', borderRadius: '8px', backgroundColor: '#fff' }} containerStyle={{ width: '100%', borderRadius: '8px' }} buttonStyle={{ border: 'none', backgroundColor: 'transparent' }} />
      </div>

      <div>
        <label className="block text-[12px] font-bold text-[#344054] mb-1">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Write your message..." className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none resize-none" />
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

      <div className="space-y-4">
        <div>
          <label className="block text-[12px] font-bold text-[#344054] mb-1">
            Select from Gallery 📷 (optional)
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryChange}
            className="w-full max-w-sm mx-auto px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-black bg-white"
          />
          <small className="text-xs text-gray-500 mt-1 block">*Maximum 10MB total from 10 images</small>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {capturedImages.map((src, idx) => (
            <img
              key={`captured-${idx}`}
              src={src}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded border"
            />
          ))}
          {galleryImages.map((file, idx) => (
            <div key={`gallery-${idx}`} className="relative pt-3 pr-3">
              <img
                src={URL.createObjectURL(file)}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded border"
              />
              <button
                type="button"
                onClick={() => removeGalleryImage(idx)}
                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full shadow-md hover:bg-red-700 transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <small className="text-xs text-gray-500 mt-1 block">
          *Maximum 10MB per image – {galleryImages.length + capturedImages.length} / 10 images added
        </small>
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
