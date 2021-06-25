import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RentalPropertyEvaluator from './components/rpe/RentalPropertyEvaluator';

function App() {
  return (
    <div className="App">
      <Header />
      <RentalPropertyEvaluator />
      <Footer />
    </div>
  );
}

export default App;
