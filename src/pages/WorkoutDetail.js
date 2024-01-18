import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWorkout, updateWorkout, deleteWorkout } from '../models';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import MovementList from '../components/MovementList';

const WorkoutDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [workoutData, setWorkoutData] = useState({});
  let typesArray = [];

  useEffect(() => {
    async function fetchWorkout() {
      let data = await getWorkout(id);
      setWorkoutData(data);
    }
    fetchWorkout();
  }, [id]);

  if (Object.keys(workoutData).length > 0) {
    Object.entries(workoutData.type).map((type) => {
      if (type[1] === true) {
        return typesArray.push(type[0]);
      } else {
        return;
      }
    });
  }

  const handleUpdateWorkout = async () => {
    await updateWorkout(id);
    alert('Workout updated successfully');
  };

  const handleDeleteWorkout = async () => {
    await deleteWorkout(id);
    alert('Workout removed successfully');
    navigate('/workouts');
  };

  return (
    <div className="container py-4">
      <h1>
        {workoutData?.name}
        {/* REF - {id} */}
      </h1>
      {typesArray.map((type) => (
        <h4 key={type} className="d-inline-block me-2">
          <span className="badge bg-primary">{type}</span>
        </h4>
      ))}
      <div dangerouslySetInnerHTML={{ __html: workoutData?.description }}></div>
      <div className="form-group">
        <div className="d-flex justify-content-between align-items-center">
          <label className="control-label" htmlFor="workoutMovements">
            Movements:
          </label>
          <div>
            <Link to="/create-movement" className="btn btn-primary me-2">
              Add New Movement
            </Link>
            <button
              className="btn btn-secondary"
              onClick={() => handleDeleteWorkout()}
              type="submit"
            >
              Delete Workout
            </button>
          </div>
        </div>
        {workoutData?.movements?.map((movement) => {
          return (
            <p key={movement.data.name}>
              {`Movement Name: ${movement.data.name}`}
              {`Movement ID: ${movement.ts}`}
            </p>
          );
        })}

        {/* <MovementList /> */}

        {/* <div className="form-group">
          <button onClick={() => handleUpdateWorkout()} type="submit">
            Update Workout
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default WorkoutDetail;
