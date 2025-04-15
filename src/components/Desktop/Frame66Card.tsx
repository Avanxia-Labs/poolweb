// "use client";
// import * as React from "react";
// import { useState } from "react";

// interface Service {
//   id: string;
//   name: string;
//   price: number;
//   checked: boolean;
// }

// const DEFAULT_GALLONS = 10000;
// const BASE_PRICE = 50;

// const DEFAULT_SERVICES: Service[] = [
//   {
//     id: "vacuuming",
//     name: "Additional vacuuming",
//     price: 5,
//     checked: true,
//   },
//   {
//     id: "filter",
//     name: "Extra filter wash",
//     price: 5,
//     checked: true,
//   },
// ];

// interface InputDesignProps {
//   onSubscribe?: (data: {
//     gallons: number;
//     services: Service[];
//     total: number;
//   }) => void;
// }

// function InputDesign({ onSubscribe }: InputDesignProps) {
//   const [poolGallons, setPoolGallons] = useState(DEFAULT_GALLONS);
//   const [services, setServices] = useState(DEFAULT_SERVICES);

//   const toggleService = (index: number) => {
//     const newServices = [...services];
//     newServices[index].checked = !newServices[index].checked;
//     setServices(newServices);
//   };

//   const calculateTotal = () => {
//     const additionalCost = services
//       .filter((service) => service.checked)
//       .reduce((sum, service) => sum + service.price, 0);
//     return BASE_PRICE + additionalCost;
//   };

//   return (
//     <div>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700&family=Inter:wght@400;500;700;800;900&display=swap"
//         rel="stylesheet"
//       />
//       <main className="box-border px-12 py-12 bg-slate-50 h-[643px] rounded-[39px] shadow-[0px_3px_8px_rgba(0,0,0,0.25)] w-[485px] max-md:p-8 max-md:h-auto max-md:max-w-[482px] max-md:w-[90%] max-sm:p-5 max-sm:rounded-3xl max-sm:w-[95%]">
//         <h1 className="mb-11 text-4xl font-bold leading-10 text-center text-slate-900 max-sm:text-3xl max-sm:leading-9">
//           Calculate Your Subscription Price
//         </h1>

//         <div className="flex flex-col gap-4">
//           <div className="flex gap-4 items-center max-sm:flex-col max-sm:gap-2.5 max-sm:items-start">
//             <h2 className="text-lg font-bold text-slate-900">
//               How many gallons is your pool?
//             </h2>
//             <button className="text-lg font-bold text-[#485AFF] cursor-pointer">
//               Don't know?
//             </button>
//           </div>

//           <input
//             className="box-border px-7 py-4 w-full text-2xl text-black bg-white rounded-lg border-gray-300 border-solid border-[1.5px] max-sm:w-full"
//             value={poolGallons}
//             onChange={(e) => setPoolGallons(Number(e.target.value))}
//             type="number"
//             min="0"
//           />

//           <div className="flex flex-col gap-2">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className="flex justify-between items-center h-11 max-sm:flex-wrap"
//               >
//                 <div className="mr-4 h-[26px] w-[26px]">
//                   <input
//                     type="checkbox"
//                     checked={service.checked}
//                     onChange={() => toggleService(index)}
//                     className="h-[26px] w-[26px] rounded-[5.84px] border-[1.5px] border-gray-300 checked:bg-[#1066EA] checked:border-[#1066EA] cursor-pointer focus:ring-[#1066EA] text-[#1066EA]"
//                   />
//                 </div>
//                 <div className="grow text-lg font-bold text-slate-900">
//                   {service.name}
//                 </div>
//                 <div className="text-lg font-bold text-slate-900">
//                   +{service.price}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <hr className="mx-0 my-5 h-px bg-slate-300" />
//         </div>

//         <div>
//           <p className="mb-1.5 text-lg font-medium text-slate-500">
//             ESTIMATED PRICE:
//           </p>
//           <p className="mb-5 text-4xl font-black text-sky-950 max-sm:text-3xl">
//             <span>$</span>
//             <span>{calculateTotal()}</span>
//             <span> / MONTH</span>
//           </p>
//         </div>

//         <button
//           className="mb-4 inline-flex flex-col justify-center items-center gap-[7.3px] p-[11.68px_14.601px] rounded-[5.84px] bg-[#485AFF]"
//           onClick={() =>
//             onSubscribe?.({
//               gallons: poolGallons,
//               services: services,
//               total: calculateTotal(),
//             })
//           }
//         >
//           <p className="text-[#F6FEFF] text-center font-inter text-[13.141px] font-extrabold leading-[20.441px]">Request Subscription</p>
//         </button>
//       </main>
//     </div>
//   );
// }

// export default InputDesign;


"use client";
import * as React from "react";
import { useState } from "react";
import FancyButton from "./FancyButton";

interface Service {
  id: string;
  name: string;
  price: number;
  checked: boolean;
}

const DEFAULT_GALLONS = 10000;
const BASE_PRICE = 50;

const DEFAULT_SERVICES: Service[] = [
  {
    id: "vacuuming",
    name: "Additional vacuuming",
    price: 5,
    checked: true,
  },
  {
    id: "filter",
    name: "Extra filter wash",
    price: 5,
    checked: true,
  },
];

interface InputDesignProps {
  onSubscribe?: (data: {
    gallons: number;
    services: Service[];
    total: number;
  }) => void;
}

function InputDesign({ onSubscribe }: InputDesignProps) {
  const [poolGallons, setPoolGallons] = useState(DEFAULT_GALLONS);
  const [services, setServices] = useState(DEFAULT_SERVICES);
  const [isHovered, setIsHovered] = useState(false);

  const toggleService = (index: number) => {
    const newServices = [...services];
    newServices[index].checked = !newServices[index].checked;
    setServices(newServices);
  };

  const calculateTotal = () => {
    const additionalCost = services
      .filter((service) => service.checked)
      .reduce((sum, service) => sum + service.price, 0);
    return BASE_PRICE + additionalCost;
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700&family=Inter:wght@400;500;700;800;900&display=swap"
        rel="stylesheet"
      />
      <main
        className="box-border px-12 py-12 rounded-[39px] shadow-[0px_3px_8px_rgba(0,0,0,0.25)] max-md:p-8 max-md:max-w-[90%] max-md:w-[95%] max-sm:p-5 max-sm:rounded-3xl"
        style={{
          width: "30rem",
          height: "42rem",
          background: isHovered
            ? "linear-gradient(159deg, rgba(177, 175, 239, 0.75), rgba(174, 255, 239, 0.75))"
            : "#fff",
          transition: "background 800ms ease-in-out, background-color 800ms ease-in-out",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="mb-11 text-4xl font-bold leading-10 text-center text-slate-900 max-sm:text-3xl max-sm:leading-9">
          Calculate Your Subscription Price
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center max-sm:flex-col max-sm:gap-2.5 max-sm:items-start">
            <h2 className="text-lg font-bold text-slate-900">
              How many gallons is your pool?
            </h2>
            <button className="text-lg font-bold text-[#485AFF] cursor-pointer">
              Don't know?
            </button>
          </div>

          <input
            className="box-border px-7 py-4 w-full text-2xl text-black bg-white rounded-lg border-gray-300 border-solid border-[1.5px] max-sm:w-full"
            value={poolGallons}
            onChange={(e) => setPoolGallons(Number(e.target.value))}
            type="number"
            min="0"
          />

          <div className="flex flex-col gap-2">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="flex justify-between items-center h-11 max-sm:flex-wrap"
              >
                <div className="mr-4 h-[26px] w-[26px]">
                  <input
                    type="checkbox"
                    checked={service.checked}
                    onChange={() => toggleService(index)}
                    className="h-[26px] w-[26px] rounded-[5.84px] border-[1.5px] border-gray-300 checked:bg-[#1066EA] checked:border-[#1066EA] cursor-pointer focus:ring-[#1066EA] text-[#1066EA]"
                  />
                </div>
                <div className="grow text-lg font-bold text-slate-900">
                  {service.name}
                </div>
                <div className="text-lg font-bold text-slate-900">
                  +{service.price}
                </div>
              </div>
            ))}
          </div>

          <hr className="mx-0 my-5 h-px bg-slate-300" />
        </div>

        <div>
          <p className="mb-1.5 text-lg font-medium text-slate-500">
            ESTIMATED PRICE:
          </p>
          <p className="mb-5 text-4xl font-black text-sky-950 max-sm:text-3xl">
            <span>$</span>
            <span>{calculateTotal()}</span>
            <span> / MONTH</span>
          </p>
        </div>

        {/* <button
          className="mb-4 inline-flex flex-col justify-center items-center gap-[7.3px] p-[11.68px_14.601px] rounded-[5.84px] bg-[#485AFF]"
          onClick={() =>
            onSubscribe?.({
              gallons: poolGallons,
              services: services,
              total: calculateTotal(),
            })
          }
        >
          <p className="text-[#F6FEFF] text-center font-inter text-[13.141px] font-extrabold leading-[20.441px]">
            Request Subscription
          </p>
        </button> */}
        <FancyButton text={"Request Subscription"}/>
      </main>
    </div>
  );
}

export default InputDesign;



