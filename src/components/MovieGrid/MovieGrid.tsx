import type { Movie } from '../../types/movie';
import styles from './MovieGrid.module.css';

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

//! 🔹 MovieGrid
export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  //! 🔹 Render

  return (
    <ul className={styles.grid}>
      {movies.map(item => (
        <li key={item.id} onClick={() => onSelect(item)}>
          <div className={styles.card}>
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
              loading="lazy"
            />
            <h2 className={styles.title}>{item.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
