import mongoose from "mongoose";

export type MovieDocument = mongoose.Document & {
  name: string;
  image: string;
};

const movieSchema = new mongoose.Schema<MovieDocument>({
  name: { type: String },
  image: { type: String },
});

export const Movie = mongoose.model<MovieDocument>("Movie", movieSchema);