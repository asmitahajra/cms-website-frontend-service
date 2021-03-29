const yup = require('yup');

// Yup.string()
//   .required('required')
//   .matches(phoneRegExp, 'Phone number is not valid')
//   .min(10, 'to short')
//   .max(10, 'to long');

const Validation = yup.object().shape({
  word: yup.string().required('Word required'),
  sentence: yup.string().required('Sentence required'),
});

export default Validation;
