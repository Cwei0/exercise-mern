import { useWkcontext } from "../hooks/useWkcontext"
import {TrashIcon} from "@heroicons/react/24/outline"
import formatDistanceToNow  from "date-fns/formatDistanceToNow"

const WorkoutDetails = ({ data }) => {
    const {dispatch} = useWkcontext()
    const deleteHandle = () => {
        fetch(`http://localhost:8000/workout/${data._id}`, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then((json) => {
                dispatch({type:'DELETE_WORKOUT', payload: json})
                console.log('Workout deleted successfully', json)
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="workout-details">
            <h4>{data.title}</h4>
            <p><strong>Load (kg):</strong>{data.load}</p>
            <p><strong>Reps:</strong>{data.reps}</p>
            <p>{formatDistanceToNow(new Date(data.createdAt), {addSuffix: true})}</p>
            <TrashIcon onClick={deleteHandle} className="icon"/>
        </div>
    );
}

export default WorkoutDetails;