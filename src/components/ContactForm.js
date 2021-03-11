import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(400, "Too Long! (400 Characters)")
    .required("Required"),
});

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => (
  <div className="bg-gradient-to-br from-indigo-700 via-green-200 to-indigo-900 h-screen flex flex-col items-center justify-center">
    <div className="bg-green-100 border border-indigo-900 p-10 rounded-2xl m-10 shadow-lg">
      <h2 className="text-indigo-900 font-semibold mb-5 text-center text-xl">
        Contact Phil?!
      </h2>
      <p className="text-indigo-900 font-semibold mb-5 text-center text-l">
        Reach out at any time ! I'd love to get in touch!
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "contact",
              ...values,
            }),
          })
            .then(() => {
              setSubmitting(false);
              alert("Succesfully submitted !");
              resetForm();
            })
            .catch((error) => {
              alert(error);
              setSubmitting(false);
            });
        }}
      >
        {({ errors, touched, validateForm, isSubmitting, handleSubmit }) => (
          <Form
            className="flex flex-col w-300"
            action="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">
              Name:
              {errors.name && touched.name ? (
                <div className="text-red-500">{errors.name}</div>
              ) : null}
            </label>
            <Field
              name="name"
              type="text"
              className="py-2 px-4 mb-5 rounded border border-indigo-900 text-indigo-900 placeholder-green-400 font-semibold"
            />

            <label htmlFor="email">
              Email:{" "}
              {errors.email && touched.email ? (
                <div className="text-red-500">{errors.email}</div>
              ) : null}
            </label>
            <Field
              name="email"
              type="text"
              className="py-2 px-4 mb-5 rounded border border-indigo-900 text-indigo-900 placeholder-indigo-900 font-semibold"
            />

            <label htmlFor="message">
              Message:
              {errors.message && touched.message ? (
                <div className="text-red-500">{errors.message}</div>
              ) : null}{" "}
            </label>
            <Field
              name="message"
              component="textarea"
              rows="5"
              className="py-2 px-4 mb-5 rounded border border-indigo-900 text-indigo-900 placeholder-indigo-900 font-semibold"
            />

            <button
              type="submit"
              className="text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all  bg-indigo-900 hover:bg-indigo-400"
              disabled={isSubmitting}
              onClick={() => validateForm().then(() => console.log("blah"))}
            >
              Send
            </button>
            <Link
              to="/"
              className="text-white text-center font-bold tracking-wider py-2 rounded cursor-pointer transition-all bg-indigo-900 hover:bg-indigo-400 mt-2"
            >
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default ContactForm;
