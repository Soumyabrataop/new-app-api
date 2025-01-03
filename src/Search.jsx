import React, { useState, useEffect } from "react";

const Search = ({ value }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=tt3896198&apikey=3031d4e8&s=${value}`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        setError("Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };

    if (value) {
      fetchMovies();
    }
  }, [value]);

  if (loading)
    return <p className="text-gray-900 dark:text-gray-300">Loading...</p>;
  if (error) return <p className="text-red-600 dark:text-red-400">{error}</p>;

  return (
    <div className="mt-5 px-5 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.length > 0 ? (
        movies.map((a) => (
          <a
            key={a.imdbID}
            href={`https://www.imdb.com/title/${a.imdbID}`}
            className="block max-w-xs rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-200 dark:bg-gray-800 dark:hover:shadow-xl"
          >
            <img
              alt={a.Title}
              src={
                a.Poster === "N/A"
                  ? "https://static.vecteezy.com/system/resources/previews/008/695/917/original/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg"
                  : a.Poster
              }
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
                {a.Title}
              </h3>

              <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                <span className="font-semibold">Year:</span> {a.Year}
              </p>

              <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                <span className="font-semibold">Type:</span> {a.Type}
              </p>

              <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                <span className="font-semibold">IMDb ID:</span> {a.imdbID}
              </p>
            </div>
          </a>
        ))
      ) : (
        <p className="text-gray-900 dark:text-gray-300">No results found.</p>
      )}
    </div>
  );
};

export default Search;
