 
import { z } from "zod";

const rentalValidationSchema=z.object({
    body:z.object({
        userId: z.string().optional(),
        bikeId: z.string(),
        startTime:z.string(),
      
    })
})

 

export const RentalValidations={
    rentalValidationSchema,
 

}