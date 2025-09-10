import * as yup from 'yup';

const booking_schema = yup.object().shape({
  total_person: yup
    .string()
    .matches(/^\d+$/, 'Total person must be a numeric string')
    .test(
      'is-greater-than-zero',
      'Total person must be greater than 0',
      value => Number(value) > 0
    )
    .required('Total person is required'),

  phone: yup
    .string()
    .matches(
      /^(?:\+977|977)?[7-9]\d{9}$/,
      'Phone number must be a valid mobile number'
    )
    .required('Phone is required'),
});

export default booking_schema