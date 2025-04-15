const ServicesIcon = ({ className, stroke = "#9EA2BE" }: { className?: string; stroke?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none" className={className}>
    <g clipPath="url(#clip0)">
      <path
        d="M23 23.85H21.85C20.1813 23.85 18.7197 22.8622 18.4 21.55C18.0803 22.8622 16.6186 23.85 14.95 23.85C13.2813 23.85 11.8197 22.8622 11.5 21.55C11.1803 22.8622 9.71865 23.85 8.05 23.85C6.38135 23.85 4.9197 22.8622 4.6 21.55C4.2803 22.8622 2.81865 23.85 1.15 23.85H0M19.55 3.15002L19.2453 3.25122C17.7273 3.75722 16.9682 4.01022 16.5347 4.61282C16.1011 5.21542 16.1 6.01582 16.1 7.61547V19.25M10.35 3.15002L10.0452 3.25122C8.52725 3.75722 7.76825 4.01022 7.3347 4.61282C6.90115 5.21542 6.9 6.01582 6.9 7.61547V19.25M6.9 7.75002H16.1M6.9 12.35H16.1M6.9 16.95H16.1"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" transform="translate(0 0.488892)" />
      </clipPath>
    </defs>
  </svg>
);

export default ServicesIcon;
