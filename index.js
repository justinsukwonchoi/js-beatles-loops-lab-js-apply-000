function theBeatlesPlay(musicians, instruments) {
  var result = [];
  
  for (let i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    
    var string = `${musician} plays ${instrument}`;
    
    result.push(string);
  }
  
  return result;
}

