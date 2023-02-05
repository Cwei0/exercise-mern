import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {

    const [workout, setWorkout] = useState(null)

    useEffect(() => {

        const fetchWorkout = async() => {
            const responce = await fetch('http://localhost:8000/workout')
            const data = await responce.json()
           
            try {
                if(responce.ok) {
                    setWorkout(data)
                    console.log('success')
                }
            } catch (error) {
                console.error(error)
            }
           
        }
        fetchWorkout()
    }, [])
    

    return (
        <div className="home">
            {workout && workout.map((workout) => (
                <WorkoutDetails key={workout._id} data={workout}/>
            ))}
            <WorkoutForm />
        </div>
    );
}

export default Home;