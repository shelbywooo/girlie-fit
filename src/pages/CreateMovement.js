import { useState, useRef } from 'react';
import { createMovement } from '../models';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from 'react-router-dom';

export default function CreateMovement() {
  const navigate = useNavigate();

  const movementName = useRef('');
  const movementRepetitions = useRef('');
  const movementSets = useRef('');
  const [movementNotes, setMovementNotes] = useState('');

  const handleCreateMovement = async (e) => {
    e.preventDefault();
    if (!movementName.current.value) {
      alert('You need to add name');
    } else {
      await createMovement(
        movementName.current.value,
        movementRepetitions.current.value,
        movementSets.current.value,
        movementNotes
      );
      alert('Movement created successfully');
      navigate('/workouts');
    }
  };

  return (
    <div className="container py-4">
      <h1>create movement</h1>
      <form>
        <div className="form-group">
          <label className="control-label" htmlFor="movementName">
            Movement Name
          </label>
          <input
            className="form-control"
            ref={movementName}
            type="text"
            name="movementName"
            id="movementName"
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="movementRepetitions">
            Movement Repetitions
          </label>
          <input
            className="form-control"
            ref={movementRepetitions}
            type="number"
            name="movementRepetitions"
            id="movementRepetitions"
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="movementSets">
            Movement Sets
          </label>
          <input
            className="form-control"
            ref={movementSets}
            type="number"
            name="movementSets"
            id="movementSets"
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="movementNotes">
            Movement Notes
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={movementNotes}
            row={100}
            onReady={(editor) => {}}
            onChange={(event, editor) => {
              const data = editor.getData();
              setMovementNotes(data);
            }}
          />
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary mt-3"
            onClick={handleCreateMovement}
            type="submit"
          >
            Add Movement
          </button>
        </div>
      </form>
    </div>
  );
}
