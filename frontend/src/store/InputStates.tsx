import { atom } from "jotai"

export const inputEmail = atom({
    key: "inputEmail",
    default: "",
})

export const inputPassword = atom({
    key: "inputPassword",
    default: ""
})

export const inputUsername = atom({
    key: "inputUsername",
    default: ""
})

export const checkBox = atom({
    key: "defValue",
    default: true
})

export const LoaderValue = atom({
    key: "LoaderValue",
    default: "Sign up"
})