import { useEffect, useState } from "react"
import { Movie } from "../types/movie"

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([])

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch("https://localhost:4000/movie")
      const temp = await rsp.json()
      setMovieData(temp)
    }

    fetchMovie()
  }, [])

  return (
    <>
      <div className="row">
        <h4>Joel's Movies</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Movie ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((f) => (
            <tr key={f.movieId}>
              <td>{f.movieId}</td>
              <td>{f.title}</td>
              <td>{f.category}</td>
              <td>{f.year}</td>
              <td>{f.director}</td>
              <td>{f.rating}</td>
              <td>{f.edited}</td>
              <td>{f.lentTo}</td>
              <td>{f.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default MovieList
