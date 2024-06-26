console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection,title,artist,yearPublished){
 let newAlbum = {
  title:title,
  artist: artist,
  yearPublished: yearPublished,
 };
 collection.push(newAlbum);
 return newAlbum;
}

addToCollection(myCollection, "Abbey Road", "The Beatles", 1969);
addToCollection(myCollection, "Thriller", "Michael Jackson", 1982);
addToCollection(myCollection, "Rumours", "Fleetwood Mac", 1977);
addToCollection(myCollection, "Back in Black", "AC/DC", 1980);
addToCollection(myCollection, "Dark Side of the Moon", "Pink Floyd", 1973);
addToCollection(myCollection, "Nevermind", "Nirvana", 1991);

console.log(myCollection);

function showCollection(collection){
  for(const album of collection){
     console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }

}
showCollection(myCollection);


function findByArtist(collection,artist){
  let matchingResult = [];
  for(let i=0; i<collection.length; i++){
    if(artist === collection[i].artist){
    matchingResult.push(collection[i]);
    }
  }
return matchingResult;
}
console.log(findByArtist(myCollection,'Nirvana'));
console.log(findByArtist(myCollection,[]));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
