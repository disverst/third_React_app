import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Error404 from './Error404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Header />
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route exact path="/cat" component={Category} />
					<Route path="/cat/:description" component={CategoryDescription} />
					<Route component={Error404} />
				</Switch>
			</Router>
			<Footer />
		</>
	);
}

export default App;
