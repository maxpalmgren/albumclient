import { Artist } from "./artist";
import { Comment } from "../app/comment/comment"
import { Tracks } from "./tracks";


export interface Album {
    id: number;
    title: string;
    artist: Artist;
    image: string;
    bio: string;
    numberOfTracks: number;
    tracks: Tracks[];
    playtime: number;
    releaseYear: number;
    rating: number;
    totalRating: number;
    timesRated: number;
    comment: Comment[];
}
