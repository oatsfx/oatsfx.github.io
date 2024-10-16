import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center sticky top-[100vh] p-4 bg-base-300 text-base-100">
      <aside>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1540 747"
          className="w-12"
          fill="currentColor"
        >
          <path d="M1017.98,225.1c82.29,94.79,105.53,275.34-11.54,406.88-118.53,133.18-322.96,142.54-453.36,20.42-131.33-122.99-125.48-314.76-31.89-427.66,65.04,77,147.4,119.09,248.75,119.03,101.04-.06,183.14-41.96,248.04-118.66Z" />
          <path d="M910.09,140.02c.2,77.49-62.57,140.57-140.05,140.76-77.36.19-140.48-62.78-140.59-140.23C629.34,62.87,691.86.14,769.51,0c77.71-.14,140.38,62.28,140.58,140.02Z" />
          <path d="M194.11,237.24c.14,53.6-43.28,97.23-96.87,97.36C43.74,334.74.07,291.19,0,237.61c-.07-53.73,43.17-97.12,96.88-97.22,53.75-.09,97.1,43.08,97.24,96.85Z" />
          <path d="M1345.42,237.24c-.14,53.6,43.28,97.23,96.87,97.36,53.5.13,97.17-43.42,97.24-97,.07-53.73-43.17-97.12-96.88-97.22-53.75-.09-97.1,43.08-97.24,96.85Z" />
          <path d="M383.28,445.74L80.47,234.52l90.37,512.52,321.08-56.62c-32.22-33.08-57.87-70.83-76.36-112.44-18.57-41.8-29.41-86.25-32.28-132.24Z" />
          <path d="M1459.07,234.52l-302.81,211.22c-2.21,35.51-9.24,70.29-21.03,103.75-16.66,47.29-42.4,90.7-76.5,129.02-3.62,4.06-7.3,8.03-11.06,11.92l321.02,56.6,90.37-512.52Z" />
        </svg>
        <p className="font-semibold text-xs">OatsFX - 2024</p>
        <p className="italic text-xs"></p>
      </aside>
    </footer>
  );
};

export default Footer;