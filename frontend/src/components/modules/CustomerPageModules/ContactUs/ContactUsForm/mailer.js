import emailjs from 'emailjs-com';

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ciusefn',
        'template_7ejkdmr',
        e.target,
        'user_ROu3yl79rK1Rc0ZSZjsoP'
      )
      .then((res) => {
        console.log(res);
        alert('Message Sent Successfully!');
      })
      .catch((err) => console.log(err));
  }
  return (
    <div
      className="container border"
      style={{ marginTop: '50px', width: '50%' }}
    >
      <h1 style={{ marginTop: '25px', textAlign: 'center' }}>Contact Form</h1>
      <form
        className="row"
        style={{ margin: '25px 85px 75px 100px' }}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input type="text" name="name" className="form-control" />

        <label>Email</label>
        <input type="email" name="user_email" className="form-control"></input>

        <label>Message</label>
        <textarea name="message" rows="4" className="form-control" />

        <input
          type="submit"
          value="Send Message"
          style={{ marginTop: '25px' }}
        />
      </form>
    </div>
  );
};

export default Mailer;
