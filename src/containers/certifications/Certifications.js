import React, { Component } from "react";
import "./Certifications.css";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert, index) => {
            return (
              <CertificationCard
                key={`certificate_${index}`}
                certificate={cert}
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
