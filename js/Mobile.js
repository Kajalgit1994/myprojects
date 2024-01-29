const maindiv=document.getElementById('Mobile')

const Mobile=[
        {
            "name": "Samsung",
            "title": "Samsung",
            "description": "The organisation operating the mobile library",
            "type": "string",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "constraints": {
                "required": true
            }
        },
        {
            "name": "One Plus",
            "title": "One Plus",
            "description": "A name for the mobile library",
            "type": "string",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "constraints": {
                "required": true
            }
        },


        {
            "name": "Motorola",
            "title": "Motorola",
            "description": "A name for the route",
            "type": "string",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "constraints": {
                "required": true
            }
        },
        {
            "name": "vivo v29",
            "title": "vivo v29",
            "description": "The community served by the stop",
            "type": "string",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "constraints": {
                "required": false
            }
        },
        {
            "name": "Realme",
            "title": "Realme",
            "description": "The individual stop name",
            "type": "string",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "constraints": {
                "required": true
            }
        },
        {
            "name": "oopo",
            "title": "OOPO",
            "description": "An address for the stop",
            "type": "string",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "constraints": {
                "required": false
            }
        },
        {
            "name": "Nokia",
            "title": "Nokia",
            "type": "string",
            "description": "Nearest postcode for the stop",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "constraints": {
                "required": false,
                "pattern": "^$|^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$"
            }
        },
        {
            "name": "Apple",
            "title": "Apple X",
            "description": "X coordinate (e.g. longitude) for stop location",
            "type": "number",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "constraints": {
                "required": true
            }
        },
        {
            "name": "poco",
            "title": "Poco",
            "description": "Y coordinate (e.g. latitude) for stop location",
            "type": "number",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "constraints": {
                "required": true
            }
        },
        {
            "name": "One Plus",
            "title": "One Plus",
            "description": "The day of the week the mobile library visits this stop",
            "type": "string",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "constraints": {
                "required": true,
                "enum": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ]
            }
        },
        {
            "name": "Asus",
            "title": "Asus",
            "type": "time",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "description": "The time the mobile library arrives at the stop",
            "constraints": {
                "required": true
            }
        },
        {
            "name": "Apple",
            "title": "Apple",
            "type": "time",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "description": "The time the mobile library leaves the stop",
            "constraints": {
                "required": true
            }
        },
        {
            "name": "Nokia",
            "title": "Nokia",
            "type": "string",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "description": "The schedule for repeated visits to this stop in iCal Recurrence Rule format",
            "constraints": {
                "required": true
            }
        },
        {
            "name": "Samsung",
            "title": "Samsung",
            "type": "date",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "description": "The date the timetable for this stop started",
            "constraints": {
                "required": true
            }
        },
        {
            "name": "Asus",
            "title": "Asus",
            "type": "date",
            "format": "default",
            "imageLink":"images/shiwa-id-Uae7ouMw91A-unsplash.jpg",
            "description": "The date the timetable for this stop will end",
            "constraints": {
                "required": false
            }
        },





    ]


Mobile.forEach(function (mobile)
{
    debugger;
    const mobilediv=document.createElement('div')
    const title = document.createElement('h1')
    title.textContent = mobile.title
    const A=document.createElement('p')
    A.textContent=mobile.description
    const name = document.createElement('p')
    name.textContent = "Name: " +mobile.name;
    const image = document.createElement('img')
    image.src=mobile.imageLink
    
    image.height = "200"
    image.width="100"
    mobilediv.append(image,name,A,title)
    mobilediv.classList.add('mobile')
    maindiv.appendChild(mobilediv)
   

})