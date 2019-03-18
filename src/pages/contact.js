import React from 'react';
import Layout from  '../components/layout';
import styled from 'styled-components'
import Logo from '../components/logo'
import Button from '../components/button'

import { withFormik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";
import "../components/utils/form.css";

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(2, "C'mon, your name is longer than that")
        .required("First name is required."),
      lastName: Yup.string()
        .min(2, "C'mon, your name is longer than that")
        .required("Last name is required."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required!")
    }),
  
    mapPropsToValues: ({ user }) => ({
      ...user
    }),
    handleSubmit: (payload, { setSubmitting }) => {
      alert(payload.email);
      setSubmitting(false);
    },
    displayName: "MyForm"
  });


const InputFeedback = ({ error }) =>
error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({
    type,
    id,
    label,
    error,
    value,
    onChange,
    className,
    ...props
  }) => {
    const classes = classnames(
      "input-group",
      {
        "animated shake error": !!error
      },
      className
    );
    return (
      <div className={classes}>
        <Label htmlFor={id} error={error}>
          {label}
        </Label>
        <input
          id={id}
          className="text-input"
          type={type}
          value={value}
          onChange={onChange}
          {...props}
        />
        <InputFeedback error={error} />
      </div>
    );
  };

  const MyForm = props => {
    const {
      values,
      touched,
      errors,
      dirty,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      isSubmitting
    } = props;
    return (
      <form
        onSubmit={handleSubmit}
        name="contact2"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
        action="/thankyou"
      >
      <input type="hidden" name="form-name" value="contact" />
        <TextInput
          id="firstName"
          type="text"
          label="First Name"
          placeholder="John"
          error={touched.firstName && errors.firstName}
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          id="lastName"
          type="text"
          label="Last Name"
          placeholder="Doe"
          error={touched.lastName && errors.lastName}
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          id="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          error={touched.email && errors.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button>
        <button
          type="button"
          className="outline"
          onClick={handleReset}
          disabled={!dirty || isSubmitting}
        >
          Reset
        </button>
        </Button>
        
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    );
  };

  const MyEnhancedForm = formikEnhancer(MyForm);
const ContactContent = styled.div`
    max-width:772px;
    height: 95vh;
    display: flex; /* establish flex container */
    flex-direction: column; /* make main-axis vertical */
    justify-content: center; /* align items vertically, in this case */
    @media (min-width:1440px) {
        width:88%;
    }
    p {
        font-size: 1.2rem;
        color: #BCB2B2;
        line-height:2rem;
    }
    h4 {
        border-color:#BCB2B2;
        font-size:1.5rem;
        font-weight:normal;
    }
`;



const Contact = ({location}) => (
    <Layout location={location}>
    <ContactContent>
          <div>
            <h1>Contact Me</h1>
            <p>Let’s build something together! Or <a href="mailto:lucas@gilbert.codes?Subject=Hi Gilbert!" target="_top">email</a> email me if you have
            any other questions.</p>
            <MyEnhancedForm user={{ email: "", firstName: "", lastName: "" }} />
            <Logo/>
          </div>
        </ContactContent>
    </Layout>
);
export default Contact