import React from 'react';
import './App.css';
import Picture from './HomePage';
import styles from './HomePage.module.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MovieList from './Movies';
import Podcast from './Pod';

class HomeBody extends React.Component {
  render() {
    return (
      <h3 className={styles.h3}>
        This website provides a list of Joel Hilton's favorite movies.
      </h3>
    );
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Picture title="Joel Hilton Movie List Website" />
        <br></br>
        <HomeBody />
      </div>
    );
  }
}

class Conclusion extends React.Component {
  render(): React.ReactNode {
    return <p className={styles.p}>Hope you enjoy your movie!!</p>;
  }
}

function App() {
  return (
    <div>
      <Router>
        <nav className={styles.nav}>
          <Link className={styles.nava} to="/movies">
            Movies
          </Link>

          <Link className={styles.nava} to="/Pod">
            Podcast
          </Link>

          <Link className={styles.nava} to="/">
            Home
          </Link>
        </nav>

        <Routes>
          <Route path="/movies" element={<MovieList />} />
          <Route path="/Pod" element={<Podcast />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <br></br>
      <Conclusion />
    </div>
  );
}

export default App;
