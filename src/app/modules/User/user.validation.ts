import { z } from "zod";




const userValidationSchema=z.object({

    name:z.string(),
    email:z.string(),
    password:z.string({invalid_type_error:'password must be string'}),
    phone:z.string(),
    address:z.string(),
    role:z.enum(['admin','user']),
    isDeleted:z.boolean().optional().default(false),
})

export const UserValidations={
    userValidationSchema,

}


 