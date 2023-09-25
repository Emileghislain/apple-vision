'use client'

import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ThemeProvider({children}) {
    const [open, setOpen] = useState(false)

    return(
        <Context.Provider value={[open, setOpen]}>{children}</Context.Provider>
    )
}

export function useThemeContext() {
    return useContext(Context);
}