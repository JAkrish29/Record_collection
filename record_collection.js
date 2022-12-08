
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  let p=records[id];
  if(prop!=="tracks"&&value!==""){
   p[prop]=value;
  }
  else if(prop!=="tracks"&&value===""){
    delete p[prop];
  }
  else if(prop==="tracks"&&p.hasOwnProperty(prop)===false){
    if(value!==""){
    p[prop]=[];
    p[prop].push(value);}
  }
  else if(prop==="tracks"&&p.hasOwnProperty(prop)===true){
    if(value!==""){
    p[prop].push(value);
    }
    else {
      delete p[prop];
    }
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
