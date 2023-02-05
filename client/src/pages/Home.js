import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWkcontext } from "../hooks/useWkcontext";

const Home = () => {
    const {workouts, dispatch} = useWkcontext()

    useEffect(() => {

        const fetchWorkout = async() => {
            const responce = await fetch('http://localhost:8000/workout')
            const data = await responce.json()
           
            try {
                if(responce.ok) {
                    dispatch({type: 'SET_WORKOUT', payload: data})
                    console.log('success')
                }
            } catch (error) {
                console.error(error)
            }
           
        }
        fetchWorkout()

        //eslint-disable-next-line
    }, [])
    

    return (
        <div className="home">
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} data={workout}/>
            ))}
            <WorkoutForm />
        </div>
    );
}

export default Home;