import { useEffect, useState } from "react";

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
                <p key={workout._id}>
                    {workout.title}
                </p>
            ))}
        </div>
    );
}

export default Home;