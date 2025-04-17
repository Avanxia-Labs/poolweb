import React from 'react';
import Image from 'next/image';

function Section2() {
    return (
        <section className="w-full bg-[#0F172A] px-4 sm:px-10 md:px-20 lg:px-[120px] xl:px-[220px] py-[60px] md:py-[100px] xl:py-[140px] max-w-[1920px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12">

                {/* Col 1 */}
                <div className="flex flex-col gap-6 w-full lg:w-1/2 max-w-[600px]">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-white text-[36px] md:text-[48px] xl:text-[64px] font-semibold leading-tight font-inter">
                                Yosbani Martinez
                            </h1>
                            <p className="text-[#485AFF] text-[18px] md:text-[20px] xl:text-[24px] font-medium leading-tight font-inter">
                                Founder & Chemical Engineer
                            </p>
                        </div>

                        <p className="text-white text-[14px] md:text-[15.823px] leading-[1.6] font-normal font-inter">
                            I founded Pool Quality Solutions to deliver pool care with true scientific rigor. As a Chemical Engineer, with a U.S.-equivalent degree evaluated by Josef Silny & Associates, I know water chemistry is not a guess—it's a science. A clean-looking pool isn't enough.
                            <br /><br />
                            It must be chemically balanced, safe, and healthy for everyone who uses it. My background in industrial process control, quality assurance, and field certifications allows me to apply this knowledge consistently, offering services that are precise, trustworthy, and grounded in real expertise.
                        </p>

                        <p className="text-white text-[14px] md:text-[15.823px] leading-[1.6] font-normal font-inter">
                            With a background in industrial chemistry, environmental compliance, and quality control, I founded Pool Quality Solutions to bring unmatched technical knowledge to pool care. As a Chemical Engineer with a degree equivalent to a U.S. Bachelor of Science, I know that accurate water chemistry is critical for your loved ones' safety. My goal is to raise industry standards through certified training, real-world experience, and personalized service. I stay involved in projects because trust is built not only through great results, but through consistency, professionalism, and honest relationships.
                        </p>
                    </div>

                    <a 
                    href='/docs/VerifiedCredentials.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="hover:text-[#485AFF] text-[#A1A1AA] text-[13px] md:text-[14.065px] italic font-extrabold leading-relaxed underline decoration-skip-ink-none font-plusjakartasans">
                        View Verified Credentials
                    </a>
                </div>

                {/* Col 2 */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-start gap-10">

                    <div className="w-full max-w-[498px]">
                        <Image
                            src="/images/yosbaniServicesDesktop.png"
                            alt="chica"
                            width={498}
                            height={382}
                            className="w-full object-contain"
                        />
                    </div>

                    <div className="w-full max-w-[498px] bg-[#485AFF] rounded-[10px] p-4 flex flex-col items-center">
                        <div className="w-full flex flex-col items-center gap-4">
                            <p className="text-white text-center font-inter text-[24px] md:text-[32px] xl:text-[40px] font-bold leading-tight">
                                Professional <br /> Credentials
                            </p>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="25" viewBox="0 0 31 25" fill="none">
                                         <path d="M27.0116 9.27825C25.7016 9.81825 24.4616 10.3182 23.2416 10.8482C21.4616 11.6182 19.6916 12.4082 17.9216 13.2082C16.7116 13.7582 15.4716 13.8882 14.2316 13.3482C9.97157 11.4882 5.70158 9.61825 1.45158 7.71825C1.15158 7.57825 0.721575 7.12825 0.771575 6.96825C0.881575 6.63825 1.23158 6.28825 1.57158 6.12825C4.46158 4.81825 7.36157 3.53825 10.2616 2.26825C11.4916 1.72825 12.7316 1.21825 13.9616 0.688248C15.1116 0.188248 16.2616 0.138249 17.4316 0.658248C21.6316 2.49825 25.8416 4.31825 30.0316 6.16825C30.9816 6.58825 31.0216 7.38825 30.0616 7.75825C28.7916 8.23825 28.5516 9.12825 28.5716 10.2882C28.5916 11.7782 28.5216 13.2782 28.5916 14.7682C28.6216 15.3782 28.8916 15.9782 29.0716 16.5682C29.1316 16.7782 29.3616 17.0382 29.3016 17.1782C28.4616 19.1982 30.0716 20.7982 30.1816 22.6482C30.1816 22.7182 30.2316 22.7882 30.2516 22.8582C30.5416 24.1782 30.1616 24.6782 28.8216 24.6982C28.1916 24.7082 27.5516 24.7182 26.9116 24.6982C25.7716 24.6682 25.3716 24.1682 25.6216 23.0382C25.8616 21.9482 26.1316 20.8582 26.4916 19.7982C26.7616 18.9982 27.2016 18.2682 26.6316 17.4182C26.5316 17.2682 26.6616 16.9082 26.7516 16.6782C27.4116 15.1482 27.6116 11.0382 27.0116 9.27825Z" fill="white" />
                                         <path d="M7.25152 11.8683C9.45152 12.8083 11.3215 13.5483 13.1315 14.4083C14.9115 15.2483 16.6215 15.2483 18.4015 14.4083C19.8815 13.7083 21.4015 13.0983 22.9115 12.4583C23.2715 12.3083 23.6615 12.1983 24.1315 12.0383C24.1315 13.9183 24.2715 15.6683 24.0615 17.3783C23.9815 18.0083 23.1515 18.7783 22.4815 19.0383C21.1815 19.5483 19.7815 19.8583 18.3915 20.0483C15.6315 20.4183 12.8815 20.2983 10.1915 19.5183C7.77152 18.8183 7.26152 18.1283 7.26152 15.6283C7.24152 14.4883 7.25152 13.3383 7.25152 11.8683Z" fill="white" />
                                     </svg>
                            <p className="text-white text-center font-inter text-[14px] font-medium leading-[34px]">
                                Yosbani Martinez - Chemical Engineer
                            </p>
                            <div className="bg-white w-[250px] h-[1px]" />
                            <p className="text-white text-center font-inter text-[14px] leading-[19px]">
                                Bachelor of Science in Chemical Engineering <br /> (U.S.-equivalent)
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Section2;