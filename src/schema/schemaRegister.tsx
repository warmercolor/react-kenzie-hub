import * as yup from 'yup'

export const schema = yup.object().shape({
    name: yup
    .string()
    .required('Campo obrigatório: Nome'),
    email: yup
    .string()
    .email('E-mail inválido')
    .required('Campo obrigátorio: E-mail'),
    password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,'A senha deve conter símbolo, número e letras')
    .min(6, 'Necessário ter no mínimo 6 digitos')
    .required('Campo obrigátorio: Senha'),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Senhas divergentes')
    .required('Campo obrigátorio: Confirmar senha'),
    course_module: yup
    .string()
    .required('Campo obrigátorio: Módulo do curso'),
    bio: yup
    .string()
    .required('Campo obrigátorio: Digite uma bio'),
    contact: yup
    .string()
    .required('Campo obrigátorio: Digite uma forma de contato'),
})