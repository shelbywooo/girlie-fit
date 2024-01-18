import WorkoutList from '../components/WorkoutList';
import { Link } from 'react-router-dom';

const Workouts = () => {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1>workouts</h1>
        <Link to="/create-workout" className="btn btn-primary">
          Create New Workout
        </Link>
      </div>
      <WorkoutList />
    </div>
  );
};

export default Workouts;
