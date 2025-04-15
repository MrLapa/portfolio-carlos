'use client'

import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from "yup"
import Input from '../Input';

const validationSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required"),
    subject: yup.string().required("Subject is required"),
    msg: yup.string().nullable(),
  })
  .required()

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data: FieldValues) => {
    console.log("Form Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    reset();
  };

  return (
    <div className="contact-form">
      <div className="contact-head">
        <h4>Got Ideas? I&apos;ve got the skills. Let&apos;s team up!</h4>
        <p>Share your vision, and I&apos;ll help bring it to life.</p>
      </div>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {isSubmitSuccessful && (
          <div
            className="returnmessage"
            data-success="Your message has been received, we will contact you soon."
            style={{ display: "block" }}
          >
            <span className="contact_success">
              Your message has been received, we will contact you soon.
            </span>
          </div>
        )}
        <div className="row gx-3 gy-4">
          <div className="col-md-6">
            <div className="form-group">
              <Input
                register={register}
                id="name"
                label="First name"
                placeholder="Name *"
                error={errors.name}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <Input
                register={register}
                id="email"
                label="Your email"
                placeholder="E-mail *"
                error={errors.email}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <Input
                register={register}
                id="subject"
                label="Subject"
                placeholder="Subject *"
                error={errors.subject}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor='message' className="form-label">Your message</label>
              <textarea
                {...register("msg")}
                name="msg"
                id="message"
                placeholder="Message"
                className={`form-control ${errors.msg ? "is-invalid" : ""}`}
              />
              {errors.msg && (
                <span className="text-danger">{errors.msg.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="send">
              <button
                id="send_message"
                type="submit"
                disabled={isSubmitting}
                className={`px-btn w-100 ${isSubmitting ? "disabled" : ""}`}
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
