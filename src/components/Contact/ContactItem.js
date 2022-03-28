import React from "react";
import styled from "styled-components";

const Contact = styled.div`
  display: flex;
  align-items: center;
`;

const Para = styled.p`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin: 10px 0px 10px 0px;
`;

const Span = styled.span`
  white-space: nowrap;
`;

function ContactItem({ icon, title, desc }) {
  return (
    <Contact>
      <div>
        {icon}
        <Span>{title}</Span>
      </div>
      <Para>{desc}</Para>
    </Contact>
  );
}

export default ContactItem;
