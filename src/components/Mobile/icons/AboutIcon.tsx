const AboutIcon = ({ className, stroke = "#9EA2BE" }: { className?: string; stroke?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 23" fill="none" className={className}>
    <path
      d="M13.8574 1.63892H1V22.0834H19.5716V7.67512L13.8574 1.63892Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.01953 12.4708H10.1451"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.01953 16.1875H10.9629"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 7.98457V2.00012L19.8071 7.98457H14Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export default AboutIcon;
