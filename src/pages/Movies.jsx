import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { MovieList } from "components/MovieList"

// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
export const Movies = () => {
  const { register, handleSubmit } = useForm();
  const [ filmName, setFilmName ] = useState("");

  const onSubmit = data => setFilmName(data.filmName)
  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("filmName")} />
      <button type="submit">Search</button>
      </form>
      {filmName && <MovieList/>}
    </main>
  );
};