import { useWkcontext } from "../hooks/useWkcontext"

const WorkoutDetails = ({ data }) => {
    const {dispatch} = useWkcontext()
    const deleteHandle = async () => {
        const response = await ('http://localhost:8000/workout/' + data._id, {
            method: 'DELETE'
        })
        let json = response.json()
        if(!response.ok){
            console.errors(json.message)
        }
        if(response.ok){
            dispatch({type:'DELETE_WORKOUT', payload: json})
            console.log('Workout deleted successfully', json)
        }
    }
    return (
        <div className="workout-details">
            <h4>{data.title}</h4>
            <p><strong>Load (kg):</strong>{data.load}</p>
            <p><strong>Reps:</strong>{data.reps}</p>
            <p>{data.createdAt}</p>
            <span onClick={deleteHandle}>Delete</span>
        </div>
    );
}

export default WorkoutDetails;