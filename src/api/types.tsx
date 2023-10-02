export type OptionType = {
  id: string;
  answer: string;
};

export type AnswerResponse = {
  id: string;
  correct_options: OptionType[];
};

export type UserType = {
  name: string;
  avatar: string;
};

export type QuestionType = {
  type: string;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: OptionType[];
  user: UserType;
};
