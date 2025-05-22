export interface IProduct {
  id: number;
  titlePart: {
    titlePart1: string;
    titlePart2: string;
  };
  image: string;
  description: string;
  price: number;
}

export interface IFeedback {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  profession: string;
  feedback: string;
}

export interface IEmailForm {
  email: string;
}

export interface IQuestion {
  id: number;
  question: string;
  answer: string;
}

export interface IStyle {
  readonly [key: string]: string;
}

export interface IFAQForm {
  name: string;
  email: string;
  question: string;
}

export interface IBlog {
  id: number;
  title: string;
  user: {
    image: string;
    username: string;
    date: {
      day: string;
      month: string;
      year: string;
    };
  };
  blogImage: string;
  article: string;
}

export interface IContactForm {
  name: string;
  email: string;
  phone?: string;
  option?:
    | "Business Department"
    | "Personal Department"
    | "Support Department"
    | "Others";
  question: string;
}
