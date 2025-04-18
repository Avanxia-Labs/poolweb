import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// Define types
type ServiceType = string;

interface FormDataType {
  name: string;
  role: string;
  company: string;
  poolSize: string;
  email: string;
  phone: string;
  projectDetails: string;
  services: ServiceType[];
  // Nuevos campos para información del cliente
  clientFullName: string;
  clientPhone: string;
  clientEmail: string;
  clientAddress: string;
  clientCompany: string;
}

interface PoolServiceFormProps {
  onClientFieldsChange?: (showClientFields: boolean) => void;
}

export default function PoolServiceForm({ onClientFieldsChange }: PoolServiceFormProps) {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    role: '',
    company: '',
    poolSize: '',
    email: '',
    phone: '',
    projectDetails: '',
    services: [],
    // Inicializar nuevos campos
    clientFullName: '',
    clientPhone: '',
    clientEmail: '',
    clientAddress: '',
    clientCompany: ''
  });

  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const roleOptions = ['Pool Owner', 'Pool Service Technician', 'Pool Repair Technician'];

  // Determinar si mostrar los campos adicionales del cliente
  const showClientFields = formData.role !== '' && formData.role !== 'Pool Owner';

  // Notificar al componente padre cuando cambia showClientFields
  useEffect(() => {
    if (onClientFieldsChange) {
      onClientFieldsChange(showClientFields);
    }
  }, [showClientFields, onClientFieldsChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormDataType) => ({ ...prev, [name]: value }));

    // Limpiar el error para este campo si existe
    if (formErrors[name]) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleServiceChange = (service: ServiceType) => {
    setFormData((prev: FormDataType) => {
      const updatedServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updatedServices };
    });

    // Limpiar el error de servicios si se selecciona alguno
    if (formErrors['services'] && !formData.services.includes(service)) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated['services'];
        return updated;
      });
    }
  };

  const selectRole = (role: string) => {
    setFormData((prev: FormDataType) => ({ ...prev, role }));
    setIsRoleDropdownOpen(false);

    // Limpiar el error de role si existe
    if (formErrors['role']) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated['role'];
        return updated;
      });
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));

    // Limpiar el error de phone si existe
    if (formErrors['phone']) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated['phone'];
        return updated;
      });
    }
  };

  const handleClientPhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, clientPhone: value }));

    // Limpiar el error de clientPhone si existe
    if (formErrors['clientPhone']) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated['clientPhone'];
        return updated;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    // Validar campos obligatorios
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.role) errors.role = 'Role selection is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (formData.services.length === 0) errors.services = 'Please select at least one service';

    // Validar campos del cliente cuando corresponda
    if (showClientFields) {
      if (!formData.clientFullName.trim()) errors.clientFullName = 'Client name is required';
      if (!formData.clientPhone.trim()) errors.clientPhone = 'Client phone is required';
      if (!formData.clientEmail.trim()) errors.clientEmail = 'Client email is required';
      if (!formData.clientAddress.trim()) errors.clientAddress = 'Client address is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     console.log('Form submitted:', formData);
  //     // Process form submission
  //     alert('Form submitted successfully!');
  //   } else {
  //     console.log('Form validation failed');
  //     alert('Please fill in all required fields');
  //   }
  // };


  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Mostrar indicador de carga (opcional)
        console.log('Enviando datos del formulario...');

        // Enviar los datos del formulario a nuestra API route (ruta actualizada)
        const response = await fetch('/api/form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Formulario enviado correctamente');
          alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');

          // Opcional: Limpiar el formulario después de enviar
          setFormData({
            name: '',
            role: '',
            company: '',
            poolSize: '',
            email: '',
            phone: '',
            projectDetails: '',
            services: [],
            clientFullName: '',
            clientPhone: '',
            clientEmail: '',
            clientAddress: '',
            clientCompany: ''
          });
        } else {
          const errorData = await response.json();
          console.error('Error al enviar el correo:', errorData);
          alert('Hubo un problema al enviar tu solicitud. Por favor, intenta nuevamente.');
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.');
      }
    } else {
      console.log('Validación del formulario fallida');
      alert('Por favor, completa todos los campos requeridos');
    }
  };

  return (
    <div className="flex justify-center w-full h-full items-start min-h-screen sm:pb-5 p-4 overflow-auto">

      <form onSubmit={handleSubmit} className="space-y-6 xl:space-y-4 w-full max-w-3xl">
        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`w-full px-3 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
            {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
          </div>

          {/* I am a Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              I am a <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <button
                type="button"
                className={`w-full px-3 py-2 text-left border ${formErrors.role ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center`}
                onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
              >
                <span>{formData.role || 'Please select:'}</span>
                <ChevronDown size={20} />
              </button>

              {isRoleDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  {roleOptions.map((option) => (
                    <div
                      key={option}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => selectRole(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {formErrors.role && <p className="text-red-500 text-xs mt-1">{formErrors.role}</p>}
          </div>

          {/* Company Field (opcional) */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Company <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Pool Size Field (opcional) */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              How many gallons is your pool? <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              name="poolSize"
              value={formData.poolSize}
              onChange={handleChange}
              placeholder="Don't know? Don't worry, move on"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className={`w-full px-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
          </div>

          {/* Phone Field - usando PhoneInput */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Phone number <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              placeholder='555 000-0000'
              country={'us'}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass={`!w-full !py-2 !pl-12 !text-sm ${formErrors.phone ? '!border-red-500' : ''}`}
              dropdownClass="!text-sm"
              containerClass="!w-full"
              enableSearch
              inputProps={{
                required: true,
                name: 'phone'
              }}
            />
            {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
          </div>
        </div>

        {/* Campos adicionales del cliente - se muestran solo cuando no es Pool Owner */}
        {showClientFields && (
          <div className="mt-6 p-4 rounded-lg border border-gray-800">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Client Information</h3>
            <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
              {/* Client Full Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Client Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="clientFullName"
                  value={formData.clientFullName}
                  onChange={handleChange}
                  placeholder="Client's full name"
                  className={`w-full px-3 py-2 border ${formErrors.clientFullName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
                {formErrors.clientFullName && <p className="text-red-500 text-xs mt-1">{formErrors.clientFullName}</p>}
              </div>

              {/* Client Phone Field - usando PhoneInput */}
              <div className="space-y-2 ">
                <label className="block text-sm font-medium text-gray-700">
                  Client Phone Number <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  country={'us'}
                  value={formData.clientPhone}
                  onChange={handleClientPhoneChange}
                  inputClass={`!w-full !py-2 !pl-12 !text-sm ${formErrors.clientPhone ? '!border-red-500' : ''}`}
                  dropdownClass="!text-sm"
                  containerClass="!w-full"
                  enableSearch
                  inputProps={{
                    required: true,
                    name: 'clientPhone'
                  }}
                />
                {formErrors.clientPhone && <p className="text-red-500 text-xs mt-1">{formErrors.clientPhone}</p>}
              </div>

              {/* Client Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Client Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  placeholder="client@example.com"
                  className={`w-full px-3 py-2 border ${formErrors.clientEmail ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
                {formErrors.clientEmail && <p className="text-red-500 text-xs mt-1">{formErrors.clientEmail}</p>}
              </div>

              {/* Client Company Field (opcional) */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Client Company <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  name="clientCompany"
                  value={formData.clientCompany}
                  onChange={handleChange}
                  placeholder="Client's company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Client Address Field - full width */}
              <div className="space-y-2 2xl:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Client Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="clientAddress"
                  value={formData.clientAddress}
                  onChange={handleChange}
                  placeholder="Client's full address"
                  className={`w-full px-3 py-2 border ${formErrors.clientAddress ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
                {formErrors.clientAddress && <p className="text-red-500 text-xs mt-1">{formErrors.clientAddress}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Project Details Field (opcional) */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            How can we help? <span className="text-gray-400">(optional)</span>
          </label>
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Tell us a little about the project..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Services Field */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Services <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="maintenance"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={formData.services.includes('Regular Maintenance')}
                onChange={() => handleServiceChange('Regular Maintenance')}
              />
              <label htmlFor="maintenance" className="ml-2 block text-sm text-gray-700">
                Regular Maintenance
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="custom-design"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={formData.services.includes('Custom Pool Design & Construction')}
                onChange={() => handleServiceChange('Custom Pool Design & Construction')}
              />
              <label htmlFor="custom-design" className="ml-2 block text-sm text-gray-700">
                Custom Pool Design & Construction
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="cleaning"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={formData.services.includes('Deep and Routine Cleaning')}
                onChange={() => handleServiceChange('Deep and Routine Cleaning')}
              />
              <label htmlFor="cleaning" className="ml-2 block text-sm text-gray-700">
                Deep and Routine Cleaning
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="automation"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={formData.services.includes('Pool System Automation')}
                onChange={() => handleServiceChange('Pool System Automation')}
              />
              <label htmlFor="automation" className="ml-2 block text-sm text-gray-700">
                Pool System Automation
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="repair"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={formData.services.includes('Repair and Installation')}
                onChange={() => handleServiceChange('Repair and Installation')}
              />
              <label htmlFor="repair" className="ml-2 block text-sm text-gray-700">
                Repair and Installation
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="other"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={formData.services.includes('Other')}
                onChange={() => handleServiceChange('Other')}
              />
              <label htmlFor="other" className="ml-2 block text-sm text-gray-700">
                Other
              </label>
            </div>
          </div>
          {formErrors.services && <p className="text-red-500 text-xs mt-1">{formErrors.services}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Get started
          </button>
        </div>
      </form>
    </div>
  );
}