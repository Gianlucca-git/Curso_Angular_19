interface AudioPlayer {
    audioVolume: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    song: 'Crystal',
    details: {
        author: 'Gian',
        year: 1990,
    }
}

// desestructurar Objetos
const {
    song: renameSong,
    details,
} = audioPlayer;
const {author} = details;

console.log('song: ', renameSong);
console.log('author: ', author);

// desestructurar Arrays
const [, , trunks = 'not found']: string[] = ['Roku', 'buu', 'trunks'];
console.log(trunks);

export {};

