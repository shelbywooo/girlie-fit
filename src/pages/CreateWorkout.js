import { useState, useRef } from 'react';
import { createWorkout } from '../models';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from 'react-router-dom';

export default function CreateWorkout() {
  const navigate = useNavigate();

  const workoutTypes = {
    Glutes: false,
    Quads: false,
    Biceps: false,
    Back: false,
    Stretch: false,
    Cardio: false,
  };

  const workoutName = useRef('');
  const [workoutType, setWorkoutType] = useState(workoutTypes);
  const [workoutDescription, setWorkoutDescription] = useState('');

  const workoutTypesList = Object.keys(workoutTypes);

  const handleCreateWorkout = (e) => {
    e.preventDefault();

    if (!workoutName.current.value) {
      alert('You need to add name and workout');
    } else {
      createWorkout(workoutName.current.value, workoutType, workoutDescription);
      alert('Workout created successfully');
      navigate('/workouts');
    }
  };

  return (
    <div className="container py-4">
      <h1>create workout</h1>
      <form>
        <div className="form-group">
          <label className="control-label" htmlFor="workoutName">
            Workout Name
          </label>
          <input
            className="form-control"
            ref={workoutName}
            type="text"
            name="workoutName"
            id="workoutName"
          />
        </div>
        <fieldset>
          <label className="control-label" htmlFor="workoutName">
            Workout Type
          </label>

          {workoutTypesList.map((type) => (
            <div key={type}>
              <input
                type="checkbox"
                id={type}
                value={type}
                checked={workoutType[type] === true}
                onChange={(event) => {
                  setWorkoutType({
                    ...workoutType,
                    [type]: event.target.checked,
                  });
                }}
              />
              <label htmlFor={type}>{type}</label>
            </div>
          ))}
        </fieldset>

        <div className="form-group">
          <label className="control-label" htmlFor="workoutName">
            Workout Description
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={workoutDescription}
            row={100}
            onReady={(editor) => {}}
            onChange={(event, editor) => {
              const data = editor.getData();
              setWorkoutDescription(data);
            }}
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary mt-3"
            onClick={handleCreateWorkout}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
