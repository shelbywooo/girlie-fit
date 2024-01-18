import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import WorkoutDetail from './pages/WorkoutDetail';
import CreateWorkout from './pages/CreateWorkout';
import CreateMovement from './pages/CreateMovement';
import Workouts from './pages/Workouts';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/workouts/" element={<Workouts />} />
          <Route path="/workouts/:id/" element={<WorkoutDetail />} />
          <Route exact path="/create-workout/" element={<CreateWorkout />} />
          <Route exact path="/create-movement/" element={<CreateMovement />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
