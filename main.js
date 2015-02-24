//Declare all data columns
//All of the inbound data will go here in the format [categoryName, datum, datum, datum...]
var dates = ['x', '10/30/13', '11/1/13', '11/3/13', '11/6/13', '11/8/13', '11/10/13', '11/13/13', '11/14/13', '11/18/14', '11/16/13', '11/21/13', '11/24/13', 
            '11/27/13', '11/29/13', '12/1/13', '12/3/13', '12/4/13', '12/6/13', '12/8/13', '12/10/11', '12/11/13', '12/13/13', '12/15/13', 
            '12/17/13', '12/19/13', '12/21/13', '12/22/14', '12/25/14', '12/27/13', '12/29/13', '12/31/13','1/2/14', '1/4/14', '1/5/14', '1/7/14', 
            '1/9/14', '1/11/14', '1/14/14', '1/16/14', '1/17/14', '1/19/14', '1/21/14', '1/22/14', '1/24/14', '1/25/14', '1/27/14', 
            '1/29/14', '1/31/14', '2/1/14', '2/3/14', '2/5/14', '2/7/14', '2/9/14', '2/11/14', '2/13/14', '2/20/14', '2/23/14', '2/26/14',
            '2/28/14', '3/2/14', '3/4/14', '3/6/14', '3/9/14', '3/11/14', '3/13/14', '3/16/14', '3/17/14', '3/20/14', '3/21/14', '3/24/14', 
            '3/25/14', '3/28/14', '3/30/14', '4/3/14', '4/4/14', '4/6/14', '4/8/14', '4/9/14', '4/11/14', '4/13/14', '4/14/14', 
            '4/16/14', '4/19/14', '4/21/14', '4/24/14', '4/26/14', '4/29/14', '5/1/14', '5/3/14', '5/5/14', '5/7/14', 
            '5/9/14', '5/11/14', '5/13/14', '5/15/14', '5/19/14', '5/21/14', '5/25/14', '5/27/14', '5/29/14', '5/31/14'],
    offensiveRebounds = ['Offensive Rebounds', 10, 14, 10, 10, 17, 16, 8, 13, 12, 19, 9, 5, 11, 11, 8, 10, 13, 7, 10, 10, 8, 20, 11, 12, 8, 10, 13, 8, 10, 4, 10, 6, 10, 12, 15, 8, 21, 12, 10, 12, 17, 15, 11, 12, 9, 10, 11, 10, 11, 10, 19, 4, 5, 10, 9, 11, 10, 11, 15, 11, 9, 7, 19, 8, 13, 10, 6, 18, 9, 7, 10, 3, 7, 8, 10, 7, 10, 11, 8, 8, 11, 24, 7, 16, 15, 20, 19, 8, 9, 15, 15, 10, 9, 7, 7, 9, 11, 15, 5, 8, 7],
    points = ['Points', 101, 81, 103, 107, 119, 106, 103, 115, 92, 115, 105, 95, 94, 113, 113, 97, 104, 109, 118, 101, 116, 122, 101, 105, 107, 113, 98, 123, 89, 117, 94, 93, 115, 119, 101, 88, 101, 87, 104, 127, 108, 105, 111, 101, 103, 111, 112, 120, 81, 86, 106, 102, 112, 98, 107, 81, 117, 104, 113, 116, 125, 122, 110, 106, 131, 86, 97, 102, 119, 117, 119, 94, 116, 106, 107, 115, 107, 107, 116, 97, 89, 112, 100, 105, 95, 92, 99, 104, 120, 105, 112, 118, 99, 105, 104, 105, 77, 106, 105, 89, 107],
    secondChancePoints = ['2nd Chance Points', 10, 9, 13, 12, 24, 20, 6, 22, 11, 25, 9, 5, 14, 18, 15, 15, 20, 5, 12, 14, 8, 19, 12, 17, 6, 12, 10, 15, 12, 9, 10, 6, 13, 12, 11, 16, 27, 21, 12, 20, 20, 16, 12, 19, 11, 15, 17, 11, 6, 17, 19, 11, 4, 10, 11, 13, 16, 7, 16, 19, 12, 9, 14, 4, 18, 16, 5, 18, 12, 18, 17, 1, 10, 11, 17, 19, 12, 17, 11, 12, 13, 19, 4, 15, 13, 12, 14, 15, 12, 12, 17, 16, 10, 9, 6, 13, 11, 15, 5, 11, 8 ];

var chart = c3.generate({
    padding: {
        right:30,
        top:5
    },

    data: {
        x: 'x',

//      Specify the type of inputed date format

        xFormat:'%m/%d/%y',

        columns: [
            dates,
            offensiveRebounds
        ]
    },

//  Specifies OKC Thunder's colors to be shown on page

    color: {
        pattern:[  '#187FC0', '#EE543B', '#1E3160', '#fff']
    },

//  Specifying size of the graph itself

    size: {
        height:410
    },

    axis: {
        x: {

//          Ensures that the x-axis will be displayed in an ordinal fashion(evenly spaced)

            type: 'category',

//          Specifies the exact format of the date on each tick

            tick: {
                count: 6,
                format: '%m-%d-%y'
            }
        },
    }
});

//Event listeners for each of the three buttons

var buttons = document.getElementsByClassName('button'),
buttonOne = buttons[0],
buttonTwo = buttons[1],
buttonThree = buttons[2];

//Toggles the points data column to the page

buttonOne.addEventListener('click', function () {

    var isPoints = chart.data().some(function (element, index, array) {
        return element.id === 'Points';
    });

    if (!isPoints) {
         chart.load({
             columns: [ points ]
         });
    } else {
        chart.unload({
             ids:['Points']
         });
    }
});

//Toggles the 2nd chance points column to the page

buttonTwo.addEventListener('click', function () {

    var isSCP = chart.data().some(function (element, index, array) {
        return element.id === '2nd Chance Points';
    });

    if (!isSCP) {
         chart.load({
             columns: [ secondChancePoints ]
         });
    } else {
        chart.unload({
             ids:['2nd Chance Points']
         });
    }
});

buttonThree.addEventListener('click', function () {

    var image = document.getElementById('image');

    if (image.style.opacity !== '0') {

        image.style.opacity = '0';

        image.style.height = '0';

            chart.resize({
                height:510
            })

    } else {

        image.style.height = '100px';
        image.style.opacity = '1';
        chart.resize({
            height:400
        })
        
    }

});
