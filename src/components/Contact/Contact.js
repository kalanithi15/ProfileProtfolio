import React from "react";
import styled from "styled-components";
import SocialSites from "./SocialSites";
import Title from "../Common/Title/title";
import { ContactData } from "../../datasets/constants";
import ContactItem from "./ContactItem";
import DownloadCVButton from "../Common/DownloadCVButton";
import { Section } from "../Common/Section";

const ContactContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 15px;
  /* margin-top: 3rem;
  margin-top: -7px; */
  padding: 1.1rem;
  margin-bottom: 0.7rem;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  padding-bottom: 1rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

const LeftContact = styled.div`
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  position: relative;
`;

const RightContact = styled.div`
  -webkit-box-flex: 3;
  -ms-flex: 3;
  flex: 3;
  margin-left: 2rem;
  @media only screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

const InputControl = styled.div`
  margin: 1.5rem 0;
`;

const Input = styled.input`
  border-radius: 30px;
  font-weight: inherit;
  /* font-size: inherit; */
  font-family: inherit;
  padding: 0.8rem 1.1rem;
  outline: none;
  border: none;
  background-color: var(--color-grey-5);
  width: 100%;
  color: var(--color-white);
  resize: none;
`;

const Submit = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

const TextArea = styled.textarea`
  border-radius: 30px;
  font-weight: inherit;
  /* font-size: inherit; */
  font-family: inherit;
  padding: 0.8rem 1.1rem;
  outline: none;
  border: none;
  background-color: var(--color-grey-5);
  width: 100%;
  color: var(--color-white);
  resize: none;
`;

function Contact() {
  return (
    <Section>
      <div class="contact-container" style={{ width: "70%" }}>
        <Title maintitle="Contact" span="Me" spanbg="Contact" />
        <ContactContent>
          <LeftContact>
            <h4>Contact me here</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              laborum numquam? Quam excepturi perspiciatis quas quasi.
            </p>
            <div class="contact-info">
              {ContactData.map((contact, id) => {
                return (
                  <ContactItem
                    icon={contact.icon}
                    title={contact.title}
                    desc={contact.desc}
                  />
                );
              })}
            </div>
            <SocialSites />
          </LeftContact>
          <RightContact>
            <form action="" class="contact-form">
              <InputControl style={{ display: "flex" }}>
                <Input type="text" required placeholder="YOUR NAME" />
                <Input
                  type="email"
                  required
                  placeholder="YOUR EMAIL"
                  style={{ marginLeft: "1.5rem" }}
                />
              </InputControl>
              <InputControl>
                <Input type="text" required placeholder="ENTER SUBJECT" />
              </InputControl>
              <InputControl>
                <TextArea
                  name=""
                  id=""
                  cols="15"
                  rows="8"
                  placeholder="Message Here..."
                ></TextArea>
              </InputControl>
              <Submit>
                <DownloadCVButton />
              </Submit>
            </form>
          </RightContact>
        </ContactContent>
      </div>
    </Section>
  );
}

export default Contact;
