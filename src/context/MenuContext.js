import React, { createContext, useMemo, useState } from 'react'
import { getFullPath,PATH_T_KATEGORI_DETAILS } from '../consts/RouterPaths';


//export const pageDefaults = [{name:'Kategoriler',to:getFullPath(PATH_T_KATEGORI_DETAILS)}];
export const pageDefaults = [];

export const menuSettingDefaults = ['Giriş Yap'];


// Bu default değerleri vermezsen build olmuyor
export const MenuContext = createContext({
    pages: [],
    setPages: () => {},
    menuSettings: menuSettingDefaults,
    setMenuSettings: () => {}
});

const MenuContextProvider = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [menuSettings, setMenuSettings] = useState(menuSettingDefaults);
    const value = useMemo(() => ({ pages, setPages,menuSettings,setMenuSettings }), [pages,menuSettings]);
    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider;
