import React, { createContext, useState, useContext } from 'react'

interface IAuthContext {
    logged: boolean
    signIn(username: string, password: string): void
    signOut(): void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@financial-dashboard:logged')

        return !!isLogged
    })
    
    const signIn = (username: string, password: string) => {
        if (username === 'demo' && password === 'demo1234') {
            localStorage.setItem('@financial-dashboard:logged', 'true')
            setLogged(true)
        } else {
            alert("Invalid username or password!")
        }
    }
    
    const signOut = () => {
        localStorage.removeItem('@financial-dashboard:logged')
        setLogged(false)
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
        
    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth}