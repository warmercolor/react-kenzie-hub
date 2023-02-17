import * as yup from 'yup'

export const schema = yup.object().shape({
    email: yup
    .string()
    .email('E-mail inválido')
    .required('Campo obrigátorio: E-mail'),
    password: yup
    .string()
    .min(6, 'Necessário ter no mínimo 6 digitos')
    .required('Campo obrigátorio: Senha')
})