import React, { Fragment } from "react";
import { useViewport } from "../context/viewport";

const Section2 = () => {
  const { width } = useViewport();
  const services = [
    {
      title: "UI/UX",
      label:
        "Mordern and elegant design prototypes and better user flows to improve customer conversion rate",
      background: "#DDFBF8",
      icon: (
        <svg
          height={"1.8rem"}
          width={"1.8rem"}
          viewBox="0 0 24 24"
          color="#19E2CF"
        >
          <path
            fill="currentColor"
            d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"
          />
        </svg>
      ),
    },
    {
      title: "Web Development",
      label: "Fast and Secure websites built using mordern technologies",
      background: "#E7D9F8",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={"1.5rem"}
          width={"1.5rem"}
          viewBox="0 0 24 24"
          fill="#863FDE"
        >
          <path d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 20H3V6H21V20Z" />
        </svg>
      ),
    },
    {
      title: "Testing",
      label: "Software testing to ensure everything works well and avoid bugs",
      background: "#FFEDE6",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2.2rem"
          width="2.2rem"
          viewBox="0 0 48 48"
          fill="#FE895B"
        >
          <path d="M24 42q-3.25 0-6.05-1.55T13.8 36H8v-3h4.6q-.35-1.3-.35-2.625V27.7h-4.3v-3h4.3q0-1.45.025-2.875T12.7 19H8v-3h6q.7-1.4 1.85-2.45Q17 12.5 18.4 11.8L14.55 8l2-2 4.7 4.7q1.4-.5 2.825-.5 1.425 0 2.825.5L31.6 6l2 2-3.8 3.8q1.4.7 2.475 1.775Q33.35 14.65 34.15 16h5.9v3H35.3q.45 1.4.425 2.825Q35.7 23.25 35.7 24.7h4.35v3H35.7q0 1.35.025 2.675Q35.75 31.7 35.4 33h4.65v3h-5.8q-1.3 2.95-4.125 4.475Q27.3 42 24 42Zm0-3q3.6 0 6.15-2.525 2.55-2.525 2.55-6.125V22q0-3.6-2.55-6.125T24 13.35q-3.6 0-6.15 2.525Q15.3 18.4 15.3 22v8.35q0 3.6 2.55 6.125T24 39Zm-4-7h8v-3h-8Zm0-8.65h8v-3h-8Zm4 2.85h.025H24h.025H24h.025H24h.025H24Z" />
        </svg>
      ),
    },
    {
      title: "Deployment and Maintainence",
      label:
        "Design, Setup cloud architecture, deploy and maintain your product.",
      background: "#FFE1E9",

      icon: (
        <svg
          height={"1.7rem"}
          width={"1.7rem"}
          viewBox="0 0 24 24"
          color="#FD346E"
        >
          <path
            fill="currentColor"
            d="M20 22L16.14 20.45C16.84 18.92 17.34 17.34 17.65 15.73L20 22M7.86 20.45L4 22L6.35 15.73C6.66 17.34 7.16 18.92 7.86 20.45M12 2C12 2 17 4 17 12C17 15.1 16.25 17.75 15.33 19.83C15 20.55 14.29 21 13.5 21H10.5C9.71 21 9 20.55 8.67 19.83C7.76 17.75 7 15.1 7 12C7 4 12 2 12 2M12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="mb-10" id="services">
      <div
        className={`sub-heading ${width > 900 && "text-center"} w-100 m-auto`}
      >
        <p className="label">Our Services</p>
        <h2>Save Time Managing your business with our best services</h2>
      </div>
      <div className="services">
        {services.map((service, i) => (
          <Fragment key={i}>
            <div className="service-item">
              <div
                className="icon"
                style={{ backgroundColor: `${service.background}` }}
              >
                {service.icon}
              </div>
              <p className="title">{service.title}</p>
              <p className="label">{service.label}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Section2;
