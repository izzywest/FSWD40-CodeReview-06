// Create a data model based on this input specification. Feel free to use an array of “classic old” JavaScript object, or to wrap your inputs in ECMA6 classes that are stored “somehow”. Create at least 2 test Media items per type CDs, Books, DVDs & Comics => total  at least 8 test Media objects.

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
        "ratingStar": "&#9733; &#9733; &#9733; &#9734; &#9734;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "Whitney Houston",
        "AlbumName": "The Bodyguard",
        "coverImg": "img/movie3.jpg",
        "ratingStar": "&#9733; &#9733; &#9734; &#9734; &#9734;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "Tom Hanks",
        "AlbumName": "Forrest Gump",
        "coverImg": "img/movie4.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9734; &#9734;",
    }],

    "category3": [{
        "Description": "lorem ipsum",
        "Interpret": "Stephen Hawking",
        "AlbumName": "A Brief History of Time",
        "coverImg": "img/book1.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9734; &#9734;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "Anne Frank",
        "AlbumName": "The Diary of a Young Girl",
        "coverImg": "img/book2.jpg",
        "ratingStar": "&#9733; &#9733; &#9734; &#9734; &#9734;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "Harper Lee",
        "AlbumName": "To Kill a Mockingbird",
        "coverImg": "img/book3.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9734; &#9734;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "Sindiwe Magona",
        "AlbumName": "Mother to Mother",
        "coverImg": "img/book4.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9733; &#9734;",
    }],


    "category4": [{
        "Description": "lorem ipsum",
        "Interpret": "<a href='https://www.instagram.com/olioptic/' target='_blank'>olioptic</a>",
        "AlbumName": "Photo hunter and artist with passion",
        "coverImg": "img/olioptic.jpg",
        "ratingStar": "&#9733; &#9733; &#9734; &#9734; &#9734;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "<a href='https://www.instagram.com/fabolus_vienna/' target='_blank'>fabolus_vienna</a>",
        "AlbumName": "Vienna my freedom is over your heads - only my photos - lowlight, urbex, architecture & nature.",
        "coverImg": "img/fabolus_vienna.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9734; &#9734;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "<a href='https://www.instagram.com/misshattan/' target='_blank'>misshattan</a>",
        "AlbumName": "Living the dream, one picture at a time. ",
        "coverImg": "img/misshattan.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9734; &#9734;",
    }, {
        "Description": "lorem ipsum",
        "Interpret": "<a href='https://www.instagram.com/perfex_vie/' target='_blank'>perfex_vie</a>",
        "AlbumName": "Urban street photography - based in Vienna",
        "coverImg": "img/perfex_vie.jpg",
        "ratingStar": "&#9733; &#9733; &#9733; &#9733; &#9733;",
    }],


}

// Use that data model to populate your objects on the screen (hint: to get the bonus points more easily, organize that part of your code as a JavaScript function. If you feel stuck, create an HTML that resembles the structure that you want to present, then move to the Bootstrap part to get enough points to pass this CR).


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
                '<p class="rtng">' + ratingSt + '</p>' +
                '<div>';
            document.getElementById(key).appendChild(well);
        }
    }
}


// ADD Form: Add a form to your HTML page and create an ADD button that adds new Media to the list. You need to create a code that a) adds an item to the list of your objects (book, CD, etc) and b)  displays the new item on the screen.

$('.button').on('click', function() {
    var a = $('#item1').val();
    var b = $('#item2').val();
    var c = $('#item3').val();

    $("ul").append('<li>' + '<b>Album/Book/Movie/Photographer:</b><br> ' + a + '</li><br>');
    document.getElementById('item1').value = '';
    $("ul").append('<li>' + '<b>Interpret/Author:</b><br> ' + b + '</li><br>');
    document.getElementById('item2').value = '';
    $("ul").append('<li>' + '<b>Description:</b><br> ' + c + '</li><hr>');
    document.getElementById('item3').value = '';
});