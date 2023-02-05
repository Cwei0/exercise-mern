import { useContext } from "react"
import { workoutContext } from "../context/Provider"


export const useWkcontext = () => {
    const context= useContext(workoutContext)

    if(!context){
        throw Error('This custom context must be used inside a provider')
    }
    return context
}