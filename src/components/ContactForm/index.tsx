import { FieldValues, useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log("Form Submitted:", data);
    setTimeout(() => {
      reset();
    }, 2000);
  };

  return (
    <div className="contact-form">
      <div className="contact-head">
        <h4>Got Ideas? We{"'"}ve got the skills. Let{"'"}s team up.</h4>
        <p>Tell us more about yourself and what you{"'"}re got in mind.</p>
      </div>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {isSubmitSuccessful &&
          <div
            className="returnmessage"
            data-success="Your message has been received, we will contact you soon."
            style={{ display: "block" }}
          >
            <span className="contact_success">
              Your message has been received, we will contact you soon.
            </span>
          </div>
        }
        {Object.keys(errors).length > 0 && (
          <div className="empty_notice" style={{ display: "block" }}>
            <span>Please Fill Required Fields!</span>
          </div>
        )}
        <div className="row gx-3 gy-4">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">First name</label>
              <input
                {...register("name")}
                name="name"
                id="name"
                type="text"
                placeholder="Name *"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input
                {...register("email")}
                name="email"
                id="email"
                type="text"
                placeholder="E-mail *"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                {...register("subject")}
                name="subject"
                id="subject"
                type="text"
                placeholder="Subject *"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">Your message</label>
              <textarea
                {...register("msg")}
                name="msg"
                id="message"
                placeholder="Message"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="send">
              <button
                className="px-btn w-100"
                type="submit"
                id="send_message"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm