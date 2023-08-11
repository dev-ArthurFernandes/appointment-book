import * as yup from "yup"


export const LoginSchema = yup.object({
  email: yup.string().email(),
  password: yup.string()
})

export const CreateUserSchema = yup.object({
  firstName: yup.string().min(3, 'Name must contain at least 3 characters').required(),
  lastName: yup.string().min(3, 'Name must contain at least 3 characters').optional(),
  email: yup.string().email().required(),
  recoveryEmail: yup.string().email().required(),
  password: yup.string().min(6, 'Password must contain more than 6 characters').required(),
  phone1: yup.string().max(14, 'It is not a valid number'),
  phone2: yup.string().max(14, 'It is not a valid number')
})