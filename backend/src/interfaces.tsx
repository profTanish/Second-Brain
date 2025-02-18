import { z } from "zod"

export const userProfileSchema = z.object({
    email: z.string({message: "String is required in email"}).min(3).max(35),
    username: z.string({message: "String is required in username"}).min(3).max(10),
    password: z.string({message: "String is required in password"}).min(8).max(20).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~]).{8,20}$/, {message: `String must contain at least 1 Special character, number, UperCase Charecter, LowerCase Charecter `})
})

export const contentCreateInputsObj = z.object({
    title: z.string({message: "Title is Incorrect have to be a String"}).min(1).max(50),
    discription: z.string({message: "Discriptions should be in String"}).min(1).max(5000),
    shareLink: z.boolean(),
    private: z.boolean()
})

export const deleteInputObj = z.object({
    delete: z.string({message: "Title is Incorrect have to be a String"}).min(23).max(25)
})

