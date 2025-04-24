'use client'

import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from "yup"
import Input from '../Input';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();

  const validationSchema = yup
    .object({
      name: yup.string().required(t("contact.form.inputs.name.errors.required")),
      email: yup
        .string()
        .email(t("contact.form.inputs.email.errors.valid"))
        .required(t("contact.form.inputs.email.errors.required")),
      subject: yup.string().required(t("contact.form.inputs.subject.errors.required")),
      msg: yup.string().nullable(),
    })
    .required()

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
        <h4>{t("contact.form.title")}</h4>
        <p>{t("contact.form.description")}</p>
      </div>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {isSubmitSuccessful && (
          <div
            className="returnmessage"
            data-success="Your message has been received, we will contact you soon."
            style={{ display: "block" }}
          >
            <span className="contact_success">
              {t("contact.form.success")}
            </span>
          </div>
        )}
        <div className="row gx-3 gy-4">
          <div className="col-md-6">
            <div className="form-group">
              <Input
                register={register}
                id="name"
                label={t("contact.form.inputs.name.label")}
                placeholder={t("contact.form.inputs.name.placeholder")}
                error={errors.name}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <Input
                register={register}
                id="email"
                label={t("contact.form.inputs.email.label")}
                placeholder={t("contact.form.inputs.email.placeholder")}
                error={errors.email}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <Input
                register={register}
                id="subject"
                label={t("contact.form.inputs.subject.label")}
                placeholder={t("contact.form.inputs.subject.placeholder")}
                error={errors.subject}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label
                htmlFor='message'
                className="form-label">{t("contact.form.inputs.message.label")}
              </label>
              <textarea
                {...register("msg")}
                name="msg"
                id="message"
                placeholder={t("contact.form.inputs.message.placeholder")}
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
                {isSubmitting ? t("contact.form.inputs.sending") : t("contact.form.inputs.send")}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
