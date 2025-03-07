import React from "react";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

const Contact = ({ theme, onToggle }) => (
  <div className="contact-main">
    <div className="basic-contact">
      <div className="contact-heading-div">
        <div className="contact-heading-img-div">
          <img
            src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
            alt=""
          />
        </div>
        <div className="contact-heading-text-div">
          <h1 className="contact-heading-text" style={{ color: theme.text }}>
            {ContactData["title"]}
          </h1>
          <p
            className="contact-header-detail-text subTitle"
            style={{ color: theme.secondaryText }}
          >
            {ContactData["description"]}
          </p>
          <SocialMedia theme={theme} centred={true} />
          <div className="resume-btn-div">
            <Button
              text="See My Resume"
              newTab={true}
              href={greeting.resumeLink}
              theme={theme}
            />
          </div>
        </div>
      </div>
      <div className="blog-heading-div">
        <div className="blog-heading-text-div">
          <h1 className="blog-heading-text" style={{ color: theme.text }}>
            {blogSection["title"]}
          </h1>
          <p
            className="blog-header-detail-text subTitle"
            style={{ color: theme.secondaryText }}
          >
            {blogSection["subtitle"]}
          </p>
          <div className="blogsite-btn-div">
            <Button
              text="Visit My Blogsite"
              newTab={true}
              href={blogSection.link}
              theme={theme}
            />
          </div>
        </div>
        <div className="blog-heading-img-div">
          <BlogsImg theme={theme} />
        </div>
      </div>
      <div className="address-heading-div">
        <div className="contact-heading-img-div">
          <AddressImg theme={theme} />
        </div>
        <div className="address-heading-text-div">
          <h1 className="address-heading-text" style={{ color: theme.text }}>
            {addressSection["title"]}
          </h1>
          <p
            className="contact-header-detail-text subTitle"
            style={{ color: theme.secondaryText }}
          >
            {addressSection["subtitle"]}
          </p>
          <h1 className="address-heading-text" style={{ color: theme.text }}>
            {phoneSection["title"]}
          </h1>
          <p
            className="contact-header-detail-text subTitle"
            style={{ color: theme.secondaryText }}
          >
            {phoneSection["subtitle"]}
          </p>
          <div className="address-btn-div">
            <Button
              text="Visit on Google Maps"
              newTab={true}
              href={addressSection.location_map_link}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </div>
    <Footer theme={theme} onToggle={onToggle} />
    <TopButton theme={theme} />
  </div>
);

export default Contact;
