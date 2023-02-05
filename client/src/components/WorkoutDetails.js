const WorkoutDetails = ({ data }) => {
    return (
        <div className="workout-details">
            <h4>{data.title}</h4>
            <p><strong>Load (kg):</strong>{data.load}</p>
            <p><strong>Reps:</strong>{data.reps}</p>
            <p>{data.createdAt}</p>
        </div>
    );
}

export default WorkoutDetails;