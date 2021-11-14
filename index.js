const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (input) => {
  return tutorials.map( line => {
    const tokens = line.split(' ');
    const capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) );
    const response = capitalizedTokens.join(' ');
    return response;
  });
}




// const titleCased = (tutorials) => {
//   let answer = []
  
//   let mapTutorial = tutorials.map(string => {
//     //element.charAt(0).toUpperCase() + element.slice(1)).join('<br>');
 
//     let splitTutorials = string.split(' ')
//     let words = splitTutorials.map(word => {
//       let capitalizedWords = word.charAt(0).toUpperCase() + word.slice(1)
//       return capitalizedWords
//     }) 
//     let solution = words.join(' ')
     
//     answer.push(solution)
//   })
//    return mapTutorial
// }

