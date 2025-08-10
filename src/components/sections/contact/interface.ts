type ContactInfo = {
  email: string;
  phone: string;
  location: string;
};

type ContactForm = {
  fullName: string;
  email: string;
  message: string;
  send: string;
  placeholder: {
    name: string;
    email: string;
    message: string;
  };
};

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactSectionProps = {
  title: string;
  subtitle: string;
  socialMedia: string;
  info: ContactInfo;
  form: ContactForm;
};
