import { useEffect, useState } from 'react';
import { getMovements } from '../models';
import { Link } from 'react-router-dom';

const MovementList = () => {
  const [movements, setMovements] = useState([]);
  useEffect(() => {
    async function fetchMovements() {
      let data = await getMovements();
      setMovements(data);
    }
    fetchMovements();
  }, []);

  return (
    <>
      {movements.length > 0
        ? movements.map((movement, idx) => (
            <>
              <p>
                {movement.data.name} - {movement.ts}
              </p>
              <Link>Add to Workout</Link>
            </>
          ))
        : 'No movements have been created yet. Be the first to create one.'}
    </>
  );
};

export default MovementList;
