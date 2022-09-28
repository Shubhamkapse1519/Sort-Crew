import Image from "next/image";
import React, { Fragment } from "react";
import { useViewport } from "../context/viewport";

const Section3 = () => {
  const { width } = useViewport();
  return (
    <Fragment>
      <div className="why-wrapper mb-10">
        <div className="why-details">
          <div className="sub-heading why-heading">
            <p className="label">Why Choose Us</p>
            <h2>
              Specialist In building fast, secure and cost effecient products.
            </h2>
            <p className="description">
              We are idea generators, goal seekers, challenge-thirsty
              professionals, creators of unique digital products.
            </p>
          </div>

          {[...Array(3)].map((i) => (
            <div key={i} className="why-list">
              <div className="why-list-icon"></div>

              <div className="why-list-details">
                <p className="title">First Working Process</p>
                <p className="description">
                  We are idea generators, goal seekers, challenge-thirsty
                  professionals, creators of unique digital products.
                </p>
              </div>
            </div>
          ))}
        </div>
        {width > 900 && (
          <div className="why-image">
            <Image
              src={"/smiling-girl.png"}
              alt={"smiling girl"}
              width={600}
              height={750}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Section3;
