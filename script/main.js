data = {
    "category1": [{
        "Description": "Burgdoggen bacon t-bone chuck, flank meatloaf sausage. Prosciutto tenderloin boudin beef ribs, ham brisket pork doner andouille. Leberkas alcatra cupim jerky pork belly kielbasa ribeye. Doner turducken alcatra, boudin pastrami bacon ham kielbasa sirloin capicola.",
        "Interpret": "Dalida",
        "AlbumName": "Les 50 plus belles chansons",
        "coverImg": "img/dalida.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9733; &#9734;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "Elvis Presley",
        "AlbumName": "Love Me Tender",
        "coverImg": "img/elvis.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9733; &#9733;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "Ella Fitzgerald",
        "AlbumName": "Summertime",
        "coverImg": "img/ella.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9734; &#9734;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "Frank Sinatra",
        "AlbumName": "My Way",
        "coverImg": "img/sinatra.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9734; &#9734;",
    }],
    "category2": [{
        "Description": "lorem ipsum",
        "Interpret": "Jack Nicholson",
        "AlbumName": "As Good As It Gets",
        "coverImg": "img/movie1.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9733; &#9733;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "Audrey Hepburn",
        "AlbumName": "Breakfast At Tiffany's",
        "coverImg": "img/movie2.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9733; &#9734;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "Whitney Houston",
        "AlbumName": "The Bodyguard",
        "coverImg": "img/movie3.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9734; &#9734;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "Tom Hanks",
        "AlbumName": "Forrest Gump",
        "coverImg": "img/movie4.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9733; &#9734;",
    }, ]

}


window.onload = function() {

    for (var key in data) {
        for (var i = 0; i < data[key].length; i++) {
            var title = data[key][i].AlbumName;
            var desc = data[key][i].Description;
            var interpret = data[key][i].Interpret;
            var coverImage = data[key][i].coverImg;
            var ratingSt = data[key][i].ratingStar;
            var well = document.createElement('div');
            well.className = 'well';
            well.innerHTML =
                '<h3>' + title + '</h3>' +
                '<h4>' + interpret + '</h4>' +
                '<img src=' + coverImage + '>' +
                '<p>' + ratingSt + '</p>' +
                '<div>';
            document.getElementById(key).appendChild(well);
        }
    }
}