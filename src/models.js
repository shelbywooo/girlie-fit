import faunadb, { query as q } from 'faunadb';
const axios = require('axios').default;

const client = new faunadb.Client({
  secret: process.env.REACT_APP_FAUNADB,
});

export const createWorkout = (name, type, description) => {
  client
    .query(
      q.Create(q.Collection('workouts'), {
        data: {
          name,
          type,
          description,
          movements: [],
        },
      })
    )
    .then((ret) => console.log(ret))
    .catch((err) =>
      console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description
      )
    );
};

export const updateWorkout = (id) => {
  client
    .query(
      q.Update(q.Ref(q.Collection('workouts'), id), {
        data: {
          // TODO
        },
      })
    )
    .then((ret) => console.log(ret))
    .catch((err) =>
      console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description
      )
    );
};

export const deleteWorkout = (id) => {
  client
    .query(q.Delete(q.Ref(q.Collection('workouts'), id)))
    .then((ret) => console.log(ret))
    .catch((err) =>
      console.error(
        'Error: [%s] %s: %s',
        err.name,
        err.message,
        err.errors()[0].description
      )
    );
};

export const createMovement = async (name, repetition, sets, notes, id) => {
  let data = await client.query(
    q.Create(q.Collection('movements'), {
      data: {
        name,
        repetition,
        sets,
        notes,
      },
    })
  );
  data.data.id = data.ref.value.id;
  return data.data;
};

export const getWorkouts = async () => {
  let allWorkouts = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('workouts'))),
      q.Lambda('X', q.Get(q.Var('X')))
    )
  );
  return allWorkouts.data;
};

export const getMovements = async () => {
  let allMovements = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('movements'))),
      q.Lambda('X', q.Get(q.Var('X')))
    )
  );
  return allMovements.data;
};

export const getWorkout = async (id) => {
  try {
    let workout = await client.query(
      q.Get(q.Ref(q.Collection('workouts'), id))
    );
    workout.data.id = workout.ref.value.id;
    return workout.data;
  } catch (error) {
    return;
  }
};
