import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
const WorkoutForm = () => {

    let schema = yup.object().shape({
        title: yup.string().required("What exercise are you doing?"),
        load: yup.number().positive().integer(),
        reps: yup.number().positive().integer().min(10).required("Enter your amount of repetitions")
    })
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(schema)
    })
    const submit = async (data, e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/workout', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            },
        })
        const json = await response.json()
        if(!response.ok){
            errors(json.message)
        }
        if(response.ok){
            reset(data)
            console.log('New Workout added successfully', json)
        }
    }
    return ( 
        <form action="" className="create" onSubmit={handleSubmit(submit)}>
            <h3>Add a new workout</h3>
            <label>Exercise:</label>
            <input type="text" {...register("title")} />
            <label>Load (kg):</label>
            <input type="number" {...register("load")}/>
            <label>Reps:</label>
            <input type="number" {...register("reps")}/>
            <button>Add Workout</button>
            {/* {errors && <div className="error">Sorry something went wrong</div>} */}
        </form>
    );
}
 
export default WorkoutForm;