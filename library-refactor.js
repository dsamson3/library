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
             },
  printPlaylists : function () {
  var playlists = this.playlists;
  var tracks = this.tracks;
  for(var x in playlists){
    console.log(playlists[x].id + ": " + playlists[x].name + " - " + playlists[x].tracks.length + " tracks");
  }
},
 printTracks : function () {
  var tracks = this.tracks
  for(var i in tracks){
    console.log(tracks[i].id + ": " + tracks[i].name + " by " + tracks[i].artist + "(" + tracks[i].album + ")");
  }
},
printPlaylist : function (playlistId) {
  console.log(this.playlists[playlistId].id + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks")
  for(var track in this["tracks"]){
    if(this.playlists[playlistId].tracks.indexOf(this.tracks[track].id) > - 1){
      console.log(this.tracks[track].id + ": " + this.tracks[track].name + "by " + this.tracks[track].artist + "(" + this.tracks[track].album + ")");
    }
  }
  },
  addTrackToPlaylist : function (trackId, playlistId)
{
  keyArray = [];
  keyArray = Object.keys(this["tracks"]);
    if(keyArray.indexOf(trackId) > - 1)
    {
    (this.playlists[playlistId].tracks.push(trackId))
    console.log(this["playlists"]);
  }
  else {
  console.log("Invalid Track");
}
},
uid : function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},
addTrack : function (name, artist, album) {
    var id = this.uid()
    String(id);
    this["tracks"]["id"] = {
      id : id,
      name : name,
      artist : artist,
      album : album
    }
console.log(this["tracks"]);
},
addPlaylist : function (name, tracks) {
  var id = this.uid()
  String(id);
  this["playlists"]["id"] =
  {
    id : id,
    name : name,
    tracks : tracks,
  }
  console.log(this["playlists"]);
}

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}