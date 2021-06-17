import mongoose from "mongoose";

export type PlaceDocument = mongoose.Document & {
  movieId: string;
  place: number;
  username: string;
};

const placeSchema = new mongoose.Schema<PlaceDocument>({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  place: { type: Number },
  username: { type: String },
});

export const Place = mongoose.model<PlaceDocument>("Place", placeSchema);