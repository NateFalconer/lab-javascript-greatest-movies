/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let newArr = [...arr];
    newArr.sort((a, b) => (a.year > b.year) ? 1 : -1);
    return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    let spielCount = arr.filter(it => {
        return it.director.includes('Steven Spielberg') && it.genre.includes('Drama')}
    ).length;
    return spielCount;
}

// function howManyMovies(arrOfMovies) {
//     return arrOfMovies.filter(movie => {
//         return movie.genre.includes('Drama') && movie.director === "Steven Spielberg";
//     }).length;
// }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// function orderAlphabetically(arr) {
//     let titleArr = [...arr];
//     let finalArr = [];
//     titleArr.sort((a, b) => (a.title > b.title) ? 1 : -1);
//     let twentyArr = titleArr.slice(0, 20);
//     twentyArr.forEach(element => {
//       finalArr.push(element.title);
//     });
//     return finalArr;
// }

function orderAlphabetically(arr) {
    return [...arr].sort((a,b) => a.title > b.title ? 1 : -1).slice(0,20).map(movie => movie.title);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// function ratesAverage(arr) {
//     if(arr.length === 0) return 0;
//     let newArr = [...arr];
//     let ratingArr = [];
//     newArr.forEach(element => {
//       ratingArr.push(element.rate);
//     });
//     let sum = ratingArr.reduce((a, b) => a + b, 0);
//     if 
//     return Math.round(100*sum/ratingArr.length)/100;
// }

function ratesAverage(arrOfMovies) {
    let averageRate = 0;
    if(arrOfMovies.length === 0) return averageRate;
    let newArr = arrOfMovies.filter(obj => Object.keys(obj).includes('rate'))
    newArr.forEach(movie => averageRate += movie.rate);
    return Math.round(100*averageRate/arrOfMovies.length)/100;
}    

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let dramaAvg = 0;
    let newArr = arr.filter(dramas => {
        return dramas.genre.includes('Drama')
    });
    newArr.forEach(movie => dramaAvg += movie.rate);
    if(newArr.length === 0) return 0;
    else return Math.round(100*dramaAvg/newArr.length)/100;
  }

// function dramaMoviesRate(arr) {
//     let dramas = arr.filter(movie => movie.genre.includes('Drama')).length;
//     if(dramas.length === 0) return 0;
//     let dramaRates = arr.reduce((acc, movie) => {
//         if(i.genre.includes('Drama')) {
//             acc += movie.rate;
//         }
//         return acc;
//     }, 0);
//     return Number((dramaRates/dramas.toFixed(2))
//     )};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// function turnHoursToMinutes(arr){
//     let newArr = arr.map(function(movie){
//         let movieLengthArr = movie.duration.split(" ");
//         if(movieLengthArr[0].includes("min")) {
//         movieLengthArr.unshift("0");
//         } if(movieLengthArr[0].includes("h")) {
//         movieLengthArr.push("0");
//         }
//         movieLengthArr[0] = movieLengthArr[0].replace(/\D/g,'');
//         movieLengthArr[1] = movieLengthArr[1].replace(/\D/g,'');
//         minuteDuration = Number(movieLengthArr[0]) * 60 + Number(movieLengthArr[1]);
//         movie.duration = minuteDuration;
//         return movie;
//     });
//   return newArr;
// }

function turnHoursToMinutes(arrOfMovies) {
    let newArr = arrOfMovies.map(movie => { 
        let copyMovie = {...movie};
        let timeArr = movie.duration.split(' ');
        if(timeArr.length === 2) {
            copyMovie.duration = parseInt(timeArr[0])
            * 60 + parseInt(timeArr[1]);
        } 
        else if(timeArr.length === 1 && timeArr[0].includes('h')) {
            copyMovie.duration = parseInt(timeArr[0]) * 60;
        }
        else if(timeArr[0].includes('min')) {
            copyMovie.duration = parseInt(timeArr[0]);
        }
        return copyMovie;
    });
    return newArr;


// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arrOfMovies) {
    let averageByYear = arrOfMovies.reduce((averages, movie) => {

    }, []);
}
