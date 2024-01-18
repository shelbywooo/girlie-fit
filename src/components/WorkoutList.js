import { useEffect, useState } from 'react';
import WorkoutPreview from '../components/WorkoutPreview';
import { getWorkouts } from '../models';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    async function fetchWorkouts() {
      let workoutData = await getWorkouts();
      setWorkouts(workoutData);
    }
    fetchWorkouts();
  }, []);

  console.log(workouts);
  return (
    <div className="row my-4">
      {workouts.length > 0 ? (
        workouts.map((workout, idx) => (
          <WorkoutPreview
            key={idx}
            id={workout.ref.value.id}
            name={workout.data.name}
            description={workout.data.description}
          />
        ))
      ) : (
        <p>No workouts have been created yet. Be the first to create one.</p>
      )}
    </div>
  );
};

export default WorkoutList;
