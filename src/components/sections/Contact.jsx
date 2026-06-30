import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Bio } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: rgba(13, 17, 23, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 32px;
  border-radius: 14px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  margin-top: 28px;
  gap: 14px;
`;
const ContactTitle = styled.div`
  font-size: 26px;
  margin-bottom: 6px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.accent2};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  font-family: "Inter", sans-serif;
  &:focus {
    border: 1px solid ${({ theme }) => theme.accent2};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => theme.gradient};
  padding: 14px 16px;
  margin-top: 4px;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    filter: brightness(1.1);
  }
`;

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Use EmailJS when configured; otherwise fall back to a mailto: link.
    if (serviceId && templateId && publicKey) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        () => {
          alert("Message sent! I'll get back to you soon.");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Something went wrong — please email me directly.");
        }
      );
    } else {
      const data = new FormData(form.current);
      const subject = encodeURIComponent(
        data.get("subject") || "Portfolio enquiry"
      );
      const body = encodeURIComponent(
        `Name: ${data.get("from_name") || ""}\n` +
          `Email: ${data.get("from_email") || ""}\n\n` +
          `${data.get("message") || ""}`
      );
      window.location.href = `mailto:${Bio.email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" type="email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" name="message" rows={4} />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
