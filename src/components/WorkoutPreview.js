import { Link } from 'react-router-dom';

const WorkoutPreview = ({ id, name, description }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card">
        <div className="card-body p-0">
          <h5 className="card-title mb-0 p-3">{name}</h5>
          <div className="p-3">
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <Link to={`/workouts/${id}`} className="btn btn-primary">
              View Workout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPreview;
