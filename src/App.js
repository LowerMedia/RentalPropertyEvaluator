import Header from './components/Header';
import Footer from './components/Footer';
import RentalPropertyEvaluator from './components/rpe/RentalPropertyEvaluator';

function App() {
  return (
    <div className="App hide-branding mx-3 columns">
      <Header />
      <RentalPropertyEvaluator />
      <Footer />
    </div>
  );
}

export default App;
