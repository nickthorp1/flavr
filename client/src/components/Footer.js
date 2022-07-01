import { useState } from "react";
import FooterChild from "./FooterChild";

function Footer() {
  const [email, setEmail] = useState({ value: "" });

  const handleChange = (event) => {
    setEmail({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("This is a demo form and your email has not been recorded");
  };

  return (
    <FooterChild
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      email={email}
    />
  );
}

export default Footer;
