var apimock = (function () {

    var mockdata = [];

    mockdata["JhonConnor"] = [
        {
            author: "JhonConnor",
            name: "house",
            points: [
                {
                    x: 10,
                    y: 20
                },
                {
                    x: 15,
                    y: 25
                },
                {
                    x: 45,
                    y: 25
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "bike",
            points: [
                {
                    x: 30,
                    y: 35
                },
                {
                    x: 40,
                    y: 45
                }
            ]
        }
    ]

    mockdata['LexLuthor'] = [
        {
            author: 'LexLuthor',
            name: 'kryptonite',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 70,
                    y: 75
                }
            ]
        }
    ]
	mockdata['author1'] = [
        {
            author: 'author1',
            name: 'developer',
            points: [
                {
                    x: 50,
                    y: 65
                },
                {
                    x: 50,
                    y: 55
                },
                {
                    x: 80,
                    y: 85
                },
            ]
        }
    ]
    mockdata['author2'] = [
        {
            author: 'author2',
            name: 'guitar',
            points: [
                {
                    x: 10,
                    y: 95
                },
                {
                    x: 70,
                    y: 45
                },
                {
                    x: 30,
                    y: 5
                },
            ]
        }
    ]
    mockdata['author3'] = [
        {
            author: 'author3',
            name: 'soccer',
            points: [
                {
                    x: 84,
                    y: 96
                },
                {
                    x: 10,
                    y: 20
                },
                {
                    x: 93,
                    y: 48
                },
                {
                    x: 80,
                    y: 80
                },
                {
                    x: 39,
                    y: 84
                },
            ]
        }
    ]

    return {
        getBlueprintsByAuthor: function(author, callback) {
            callback(null, mockdata[author]);
        },

        getBlueprintsByNameAndAuthor: function(name, author, callback) {
            blueprint = mockdata[author].find(function(blueprint) {
                return blueprint.name == name
            });
            callback(null, blueprint)
        }
    }

})();