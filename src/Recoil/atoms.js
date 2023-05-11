import {atom} from "recoil";

export const ThemeMood = atom({
    key : Math.random().toString(),
    default : true
})

export const HandelDashboard = atom({
    key : Math.random().toString(),
    default : true
})

export const HandelTranslation = atom({
    key : Math.random().toString(),
    default : true
})