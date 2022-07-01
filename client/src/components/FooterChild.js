function FooterChild({ handleChange, handleSubmit, email }) {
  return (
    <div className="email-container">
      <h2 className="footer-title">Discounts here 😱</h2>
      <p className="footer-text">
        Leave us your e‑mail and we will send you exclusive offers, discounts
        and more awesome stuff. We promise to curate our e‑mail very carefully.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="email-input"
            type="text"
            name="name"
            value={email.value}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </label>
        <input type="submit" value="Submit" className="email-submit" />
      </form>
    </div>
  );
}

export default FooterChild;
