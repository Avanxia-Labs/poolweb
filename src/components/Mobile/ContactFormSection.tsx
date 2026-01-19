'use client';
import { useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

/* import icons */
import { Loader2, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactFormSection = () => {
  /* ... existing hooks ... */
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
  const [website, setWebsite] = useState(''); // Honeypot state

  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [galleryImages, setGalleryImages] = useState<File[]>([]);

  const [clientFullName, setClientFullName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientAddress, setClientAddress] = useState('');

  // UI States
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
    setErrorMessage('');

    if (!phone.trim()) {
      setErrorMessage("Please enter a valid phone number 📱");
      return;
    }

    if (selectedServices.length === 0) {
      setErrorMessage("Please select at least one service 🛠️");
      return;
    }

    if (showClientForm) {
      if (!clientPhone.trim() || !clientFullName.trim() || !clientEmail.trim() || !clientAddress.trim()) {
        setErrorMessage("Please complete all client required fields 🧾");
        return;
      }
    }

    setStatus('loading');

    try {
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

      if (result.success) {
        setStatus('success');
        // Optional: Reset form here if needed, but we show a success view instead
        // resetForm(); 
      } else {
        setStatus('error');
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage("Network error. Please try again later.");
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setCompany('');
    setGallonsFromForm('');
    setSelectedServices([]);
    setGalleryImages([]);
    setStatus('idle');
    setErrorMessage('');
  }


  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);

      const totalSize = [...galleryImages, ...filesArray].reduce((acc, file) => acc + file.size, 0);
      const totalSizeMB = totalSize / (1024 * 1024);

      if (totalSizeMB > 4.5) {
        alert("The total size of the images must not exceed 4.5MB.");
        if (fileInputRef.current) fileInputRef.current.value = '';
        return;
      }

      const totalImages = galleryImages.length + capturedImages.length;
      const spaceAvailable = 10 - totalImages;

      if (spaceAvailable <= 0) {
        alert("You have reached the limit of 10 images.");
        if (fileInputRef.current) fileInputRef.current.value = '';
        return;
      }

      const filesToAdd = filesArray.slice(0, spaceAvailable);
      const remainingFiles = filesArray.length - filesToAdd.length;

      if (remainingFiles > 0) {
        alert("Only some images were added to avoid exceeding the 10 image limit.");
      }

      setGalleryImages(prev => [...prev, ...filesToAdd]);

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };


  const removeGalleryImage = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  // SUCCESS VIEW
  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-10 w-full flex flex-col items-center justify-center text-center p-8 bg-green-50 rounded-2xl border border-green-100"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2 font-['Plus_Jakarta_Sans']">Message Sent!</h3>
        <p className="text-slate-600 mb-8 max-w-sm">
          Thank you for contacting us, <strong>{name}</strong>. We have received your request and will get back to you within 24 hours.
        </p>
        <button
          onClick={resetForm}
          className="inline-flex items-center gap-2 text-[#485AFF] font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full space-y-6 relative">

      {/* Loading Overlay */}
      {status === 'loading' && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-50 flex items-center justify-center rounded-2xl">
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-xl">
            <Loader2 className="w-8 h-8 text-[#485AFF] animate-spin mb-2" />
            <p className="text-sm font-bold text-slate-700">Sending...</p>
          </div>
        </div>
      )}

      <div style={{ opacity: 0, position: 'absolute', top: 0, left: 0, height: 0, width: 0, zIndex: -1 }} aria-hidden="true">
        <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="block text-[12px] font-bold text-[#344054] mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="w-full px-4 py-3 text-[12px] font-bold text-[#667085] border border-[#D0D5DD] rounded-lg shadow-sm outline-none focus:border-[#485AFF] focus:ring-1 focus:ring-[#485AFF] transition-all" />
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
          <div className="mt-4 border border-gray-400 rounded-lg p-4 bg-slate-50">
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

      {/* ... Rest of fields ... */}

      {/* Simplified for brevity in tool call, will use original content for fields I'm not changing drastically, just wrapping */}

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

      <div className="px-4 py-4 rounded-xl border border-dashed border-slate-300">
        <h3 className="text-[12px] font-bold text-[#344054] mb-4">Services</h3>
        <div className="flex flex-col space-y-3">
          {["Regular Maintenance", "Deep and Routine Cleaning", "Repair and Installation", "Custom Pool Design & Construction", "Pool System Automation", "Other"].map((service) => (
            <label key={service} className="flex items-center gap-3 text-[12px] font-bold text-[#667085] cursor-pointer hover:text-[#485AFF] transition-colors">
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => handleServiceChange(service)}
                className="w-[18px] h-[18px] rounded-[6px] border border-[#D0D5DD] bg-white accent-[#485AFF]"
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
            className="w-full max-w-sm mx-auto px-4 py-2 border border-blue-100 hover:border-blue-300 transition-colors rounded-lg shadow-sm text-black bg-blue-50/50 cursor-pointer" />
          <small className="text-xs text-gray-500 mt-1 block">*Maximum 4.5MB total</small>
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
        <small className="text-xs text-center text-gray-500 mt-1 block">
          {galleryImages.length + capturedImages.length} / 10 images added
        </small>
      </div>

      {/* Error Message Inline */}
      {errorMessage && (
        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 text-xs font-bold rounded-lg animate-pulse">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="w-full flex justify-center">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 px-[20px] py-[12px] bg-[#485AFF] hover:bg-[#3E57DA] border border-[#7F56D9] text-white text-[12px] font-bold rounded-[8px] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
        >
          {status === 'loading' ? 'Sending...' : 'Get started'}
        </button>
      </div>
    </form>
  );
};

export default ContactFormSection;


