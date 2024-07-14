import image1 from './spotify_1.jpg'
import image2 from './spotify_2.jpg'
import songs1 from './Justin Bieber - Baby ft. Ludacris.mp3'
import songs2 from './The Kid LAROI, Justin Bieber - STAY (Official Video).mp3'
import songs3 from './Slipknot - Psychosocial [OFFICIAL VIDEO] [HD].mp3'

export const assets = {
    image1,
    image2
}

export const albumsData = [
    {
        id: 1,
        name: "Top 50 Global Songs",
        image: image1,
        description: "Your weekly update of the most played tracks",
        backgroundColor: "#2a4365"
    },
    {
        id: 2,
        name: "Top 50 Myanmar Songs",
        image: image2,
        description: "Your weekly update of the most played tracks",
        backgroundColor: "#22543d"
    }
]

export const songsData = [
    {
        id: 1,
        name: "Song One",
        image: image1,
        mp3File: songs1,
        description: "Put a smile on your face with these happy tunes.",
        duration: "03:38"
    },
    {
        id: 2,
        name: "Song Two",
        image: image1,
        mp3File: songs2,
        description: "Put a smile on your face with these happy tunes.",
        duration: "03:00"
    },
    {
        id: 3,
        name: "Song Three",
        image: image1,
        mp3File: songs3,
        description: "Put a smile on your face with these happy tunes.",
        duration: "05:02"
    }
]