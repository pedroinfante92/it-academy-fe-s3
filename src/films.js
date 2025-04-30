// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}


// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director)
  console.log("EXERCICE 2 ->", result);
  return result;
} 

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let sum = array.filter(movie => movie.director == director).map(movie => movie.score).reduce((sum, score) => sum + score, 0)
  let length = array.filter(movie => movie.director == director).length
  let result = sum / length
  console.log("EXERCICE 3 ->", result);
  return result;
}



// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(movie => movie.title).sort().slice(0, 20)
  console.log("EXERCICE 4 ->", result);
  return result;
} 

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.map(movie => movie).sort((a, b) => {
    
    if(a.year === b.year) {
      
      if(a.title < b.title) {
        return -1
      } else if (a.title > b.title) {
        return 1
      } else {
        return 0
      }
    }
    return a.year - b.year
  })
  
    console.log("EXERCICE 5 ->", result)
  
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let filteredMoviesScores = array.filter(movie => movie.genre.includes(category)).map(movie => movie.score)
  let sum = filteredMoviesScores.reduce((a, b) => a + b)
  let length = filteredMoviesScores.length
  let result1 = parseFloat((sum / length).toFixed(2))
  
  /*
  let sum2 = array.reduce((totalScore, movie) => {
    if(movie.genre.includes(category)) {
      return totalScore + movie.score
    }
    return totalScore
  }, 0)

  let result2 = parseFloat((sum2 / length).toFixed(2))
  */
 
  return result1

}


// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(array) { 
  
  let result = array.map(movie => {
      let newDuration = 0
      
      if(movie.duration.includes('min')) {
        newDuration = (parseInt(movie.duration.charAt(0)) * 60) + parseInt(movie.duration.slice(3, 5))
        // movie.duration = (parseInt(movie.duration.charAt(0)) * 60) + parseInt(movie.duration.slice(3, 5))
      } else {
        newDuration = parseInt(movie.duration.charAt(0)) * 60
        // movie.duration = parseInt(movie.duration.charAt(0)) * 60

    }

    return { ...movie, duration: newDuration }
    // return movie
  })
  console.log("EXERCICE 7 ->", result)
  
  return result
}

// hoursToMinutes(movies)



// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let result = array.filter(movie => movie.year === year).sort((a, b) => b.score - a.score).splice(0, 1)
  
  console.log("EXERCICE 8 ->", result)
  return result
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
