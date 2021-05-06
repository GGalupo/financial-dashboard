import React, { useState, useContext, createContext } from 'react'

interface IMenuContextProps {
    isMenuOpen: boolean,
    toggleMenuOpen(): void
}

const MenuContext = createContext<IMenuContextProps>({} as IMenuContextProps)

const MenuProvider: React.FC = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <MenuContext.Provider value={{isMenuOpen, toggleMenuOpen}}>
            {children}
        </MenuContext.Provider>
    )
}

function useMenu(): IMenuContextProps {
    const context = useContext(MenuContext)

    return context
}

export { MenuProvider, useMenu }