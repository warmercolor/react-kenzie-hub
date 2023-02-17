import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import  { toast } from 'react-toastify'
import { useNavigate, useLocation } from 'react-router-dom'
import { ILogin } from '../../pages/Login'
import { Api } from '../../services/Api'
import { ISubmit } from '../../pages/Register'
import 'react-toastify/dist/ReactToastify.css'

export interface IProps{
    children: ReactNode
}

export interface ITechs{
    created_at: string | Number
    id: string
    status: string
    title: string
    updated_at: Date
}
export interface IUser{
    id: string
    avatar_url?: null
    name: string
    bio: string
    contact: string
    course_module: string
    created_at: Date
    email: string
    techs: ITechs[]
    updated_at: Date
    works: []
}

export interface IData{
    user: IUser
    token: string
    userResponse: IUser
}

export interface IDataResponse{
    id: string
    name: string
    bio: string
    contact: string
    course_module: string
    created_at: Date
    email: string
    techs: ITechs[]
    updated_at: Date
    works: []
}

export interface IAuthContext{
    user: IUser
    loginApi: (data: ILogin) => void
    loading: boolean
    submit: (data: ISubmit) => void
    logout: any
    techs: ITechs[]
    setTechs: (value: ITechs[]) => void
    setUser: (value: IUser) => void
}


export const AuthContext = createContext({} as IAuthContext)


export const Authorization = ({children}:IProps ) => {
    const [user, setUser] = useState<IUser>({} as IUser)
    const [loading, setLoading] = useState(true)
    const [techs, setTechs] = useState<ITechs[]>({} as ITechs[])
    const navigate = useNavigate()
    const location = useLocation()
    
    useEffect( () => {
        async function loadingUser() {
            const token = localStorage.getItem('@KenzieHub: token')
            if(token){
                try{
                    Api.defaults.headers.authorization = `Bearer ${token}`

                const result = await Api.get<IDataResponse>('/profile')
                const { data } = result

                const toNavigate = location.state?.from?.pathname || '/dashboard'
                navigate(toNavigate, { replace: true })

                setUser(data)
                setTechs(data.techs)
            }
            catch ( error ) {
                console.log(error)
            }
        }
        setLoading(false)
        }
        loadingUser()
    }, [])

    const loginApi = async (data: ILogin) => {
        
        try{
            const result = await Api.post<IData>('/sessions', data)
            const token = result.data.token
            const user = result.data.user

            localStorage.setItem('@KenzieHub: token', token)
            localStorage.setItem('@KenzieHub: user', user.id)

            const { techs } = user
            setTechs(techs)

            const toNavigate = location.state?.from?.pathname || '/dashboard'
                navigate(toNavigate, { replace: true })

            toast.success('Login realizado com sucesso!')
        }
        catch ( error ) {
            console.log(error)
            toast.error('Verifique se os dados estão corretos, e tente novamente')
        }
    }

    const submit = async (data: ISubmit) => {

        try{
            const result = await Api.post<IData>('/users', data)
            const { userResponse, token } = result.data
            toast.success('Cadastro realizado com sucesso')
            const toNavigate = location.state?.from?.pathname || '/'
                navigate(toNavigate, { replace: true })
        }
        catch(error){
            toast.error('Ops, algo deu errado!')
        }
    }

    const logout = () => {
        localStorage.clear()
        const toNavigate = location.state?.from?.pathname || '/'
        navigate(toNavigate, { replace: true })
    }

    return (
    <AuthContext.Provider value={{user, setUser, loading, loginApi, techs, setTechs, submit, logout}}>
        {children}
    </AuthContext.Provider>
    )
}
