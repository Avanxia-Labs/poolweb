import React from 'react';
import { SubscriptionCalculator } from '@/components/shared/SubscriptionCalculator';

const PoolQualityComponent = () => {
    return (
        <div className="flex flex-row bg-[#F5F9FF] w-full py-16 px-32 gap-[118px]">
            
                {/* Before/After Section */}
                <div className="w-3/5">
                    <div className="w-full mb-[58px]">
                        <img id='poolBeforeAndAfter'
                            src="/images/poolBeforeAndAfter.png"
                            alt="Pool before and after cleaning service"
                            className="rounded-lg w-full h-auto"
                        />
                    </div>

                    <div id='serviceDescription' className="w-full mb-[58px]">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">The Pool Quality Cleaning Difference</h2>
                        <p className="text-gray-700 mb-4">
                            Keeping Your Pool Visually Appealing Is Just The Start. Our Professional Pool Cleaning Service Ensures
                            Your Water Is Not Only Sparkling Clear But Also Healthy And Safe For Swimming, Reflecting Our
                            Commitment To Meticulous Care Backed By Scientific Understanding.
                        </p>
                        <p className="text-gray-700 mb-4">
                            We Go Beyond A Simple Surface Skim. Our Comprehensive Cleaning Includes Thoroughly Brushing Pool Walls,
                            Steps, And Waterlines To Dislodge Algae And Buildup, Meticulous Vacuuming Of The Pool Floor To Remove
                            Settled Debris, Emptying Skimmer And Pump Baskets To Maintain Proper Flow, And Ensuring Overall Cleanliness.
                        </p>
                        <p className="text-gray-700">
                            Whether You Need A One-Time Deep Clean After A Party Or Storm, Require Seasonal Opening Or
                            Closing Services, Or Are Dealing With The Challenge Of Recovering A Green Pool, Pool Quality
                            Solutions Has The Specialized Tools And Expertise Required. Even During Routine Cleaning, Our
                            Knowledge Of Water Chemistry - Driven By Our Founder's Chemical Engineering Background - Ensures
                            We Help Maintain The Delicate Water Balance, Protecting Both Swimmers And Your Valuable Pool
                            Equipment From Potential Issues Caused By Neglect. Let Us Handle The Hard Work With Precision And
                            Care, So You Can Simply Relax And Enjoy Your Pristine, Healthy Pool Environment.
                        </p>
                    </div>

                    {/* Before/After Pool Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <div id='beforeImage' className="border border-blue-200 rounded-lg overflow-hidden">
                            <img
                                src="/images/pooldirty2.png"
                                alt="Pool before cleaning"
                                className="w-full h-auto"
                            />
                        </div>
                        <div id='afterImage' className="border border-blue-200 rounded-lg overflow-hidden">
                            <img
                                src="/images/poolclean2.png"
                                alt="Pool after cleaning"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                </div>

                {/* Services and Calculator Section */}
                <div className="flex flex-col w-2/5 gap-12">
                    {/* Services Column */}
                    <div id='Services' className="w-[485px] mt-[110px] bg-white">
                        <div className="mb-12">
                            <h3 className="text-2xl font-semibold text-gray-800 ml-[60px] mt-[68px]">Services</h3>
                            <ul className="space-y-4 ml-[60px] mt-[24.5px]">
                                <li className="text-gray-700">Pool Maintenance</li>
                                <li className="text-blue-600 font-medium">Pool Cleaning</li>
                                <li className="text-gray-700">Equipment Repair & Installation</li>
                                <li className="text-gray-700">Pool Automation</li>
                                <li className="text-gray-700">Diagnostics & Troubleshooting</li>
                            </ul>
                        </div>
                    </div>

                    {/* Subscription Calculator */}
                    <div className="w-full lg:w-1/2">
                        <SubscriptionCalculator isMobile={false} />
                    </div>

                    {/* Social Media Section */}
                    <div className=" mt-16 text-center">
                        <div className="border border-gray-500 w-[485px] rounded-lg px-8 py-6">
                            <h3 className="text-xl flex justify-left font-medium text-gray-800 mb-4">Follow Us Instagram</h3>
                            <div className="flex justify-left space-x-6">
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 10.08l-7.76-5.88a6.82 6.82 0 0 1 2-1.52 5.42 5.42 0 0 1 5.56.48l1.2.9 1.27-.9a5.42 5.42 0 0 1 5.56-.48 6.82 6.82 0 0 1 2 1.52l-7.83 5.88"></path>
                                        <path d="M10 17.4h.01"></path>
                                        <path d="M15 17.4h.01"></path>
                                        <path d="M8.5 20h7"></path>
                                        <path d="M12.01 7.7c-.63-.7-1.51-1.2-2.51-1.2C7.67 6.5 6 8.17 6 10s1.01 3.5 6.01 3.5"></path>
                                        <path d="M18 10c0-1.83-1.67-3.5-3.5-3.5-.99 0-1.88.5-2.5 1.2"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            
        </div>
    );
};

export default PoolQualityComponent;