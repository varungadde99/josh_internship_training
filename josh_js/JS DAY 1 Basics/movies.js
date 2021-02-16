var movies = [ 
    { 
        title: "Black Panther", 
        year: 2018, 
        rating: 8 
    },

    { 
        title: "Jodha Akbaar", 
        year: 2008, 
        rating: 9 
    }, 

    { 
        title: "Wake Up Sid", 
        year: 2009, 
        rating: 6 
    },

    { 
        title: "Saala Khadoos", 
        year: 2016, 
        rating: 8 
    }, 

    { 
        title: "Highway", 
        year: 2014, 
        rating: 5 
    },
    
    { 
        title: "Rockstar", 
        year: 2011, 
        rating: 7 
    },

    { 
        title: "Piku", 
        year: 2015, 
        rating: 7 
    },

    { 
        title: "Jolly LLB 2", 
        year: 2017, 
        rating: 6 
    },
];

function movieRating(movies){
    
    var finalResultingMovies = [];
    movies.forEach(movie => {
        if(movie.rating>7)
            finalResultingMovies.push(movie);
    });

    finalResultingMovies.sort(function(movie1,movie2)
    {
        return movie2.year-movie1.year;
    });
    //finalResultingMovies = JSON.stringify(finalResultingMovies, null, 2); 

    finalResultingMovies.forEach(movie => {
        console.log(movie.title);
        console.log(movie.year);
        console.log(movie.rating);
        console.log( );
    });
}

movieRating(movies);