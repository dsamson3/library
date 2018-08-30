var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}


var printPlaylists = function () {
  var playlists = library.playlists;
  var tracks = library.tracks;
  for(var x in playlists){
    console.log(playlists[x].id + ": " + playlists[x].name + " - " + playlists[x].tracks.length + " tracks");
  }
}



var printTracks = function () {
  var tracks = library.tracks
  for(var i in tracks){
    console.log(tracks[i].id + ": " + tracks[i].name + " by " + tracks[i].artist + "(" + tracks[i].album + ")");
  }

}



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  console.log(library.playlists[playlistId].id + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks")
  for(var track in library["tracks"]){
    if(library.playlists[playlistId].tracks.indexOf(library.tracks[track].id) > - 1){
      console.log(library.tracks[track].id + ": " + library.tracks[track].name + "by " + library.tracks[track].artist + "(" + library.tracks[track].album + ")");
    }
  }
  }

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId)
{
  keyArray = [];
  keyArray = Object.keys(library["tracks"]);
    if(keyArray.indexOf(trackId) > - 1)
    {
    (library.playlists[playlistId].tracks.push(trackId))
    console.log(library["playlists"]);
  }
  else {
  console.log("Invalid Track");
}
}

addTrackToPlaylist("t01", "p02");
// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
    var id = uid()
    String(id);
    library["tracks"]["id"] = {
      id : id,
      name : name,
      artist : artist,
      album : album
    }
console.log(library["tracks"]);
}


// adds a playlist to the library

var addPlaylist = function (name, tracks) {
  var id = uid()
  String(id);
  library["playlists"]["id"] =
  {
    id : id,
    name : name,
    tracks : tracks,
  }
  console.log(library["playlists"]);
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}