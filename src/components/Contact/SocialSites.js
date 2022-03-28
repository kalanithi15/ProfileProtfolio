import React from "react";
import { IconContext } from "react-icons";
import { SocialLinkData } from "../../datasets/constants";

function SocialSites() {
  return (
    <div class="contact-icons">
      <IconContext.Provider value={{ className: "icon" }}>
        <div class="contact-icon" style={{ marginTop: "20px" }}>
          {SocialLinkData.map((data, id) => {
            return (
              <a
                href={data.url}
                target={data.target}
                style={{ padding: "15px" }}
              >
                {data.icon}
              </a>
            );
          })}
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default SocialSites;
