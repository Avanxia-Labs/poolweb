const HomeIcon = ({ className, stroke = "#9EA2BE" }: { className?: string; stroke?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none" className={className}>
    <path
      d="M5 12.7999H3L12 3.79993L21 12.7999H19M5 12.7999V19.7999C5 20.3304 5.21071 20.8391 5.58579 21.2141C5.96086 21.5892 6.46957 21.7999 7 21.7999H17C17.5304 21.7999 18.0391 21.5892 18.4142 21.2141C18.7893 20.8391 19 20.3304 19 19.7999V12.7999"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 21.7999V15.7999C9 15.2695 9.21071 14.7608 9.58579 14.3857C9.96086 14.0106 10.4696 13.7999 11 13.7999H13C13.5304 13.7999 14.0391 14.0106 14.4142 14.3857C14.7893 14.7608 15 15.2695 15 15.7999V21.7999"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HomeIcon;
