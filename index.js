const express = require('express')
const cors = require('cors')
const PORT = 8000
const app = express()

app.use(cors())

const recycle = {
    'ALPAR' : {
        'website': 'https://www.alparalaska.com/wp/https://www.alparalaska.com/wp/',
        'description': 'ALPAR supports recycling in railbelt communities (Anchorage, Kenai, Mat-Su Valley and Fairbanks)',
        'city': 'Anchorage',
        'volunteer': 'no',
        'name':'Alaskans for Litter Prevention and Recycling (ALPAR)'
    },
    'Anchorage Recycling Center' : {
        'website': 'https://www.muni.org/Departments/SWS/Recycling/Pages/Default.aspx',
        'description': 'The city of Anchorage offers a variety of recycling resources',
        'city': 'Anchorage',
        'volunteer': 'no',
        'name':'Anchorage Recycling Center'
    },
    'Cordova' : {
        'website': 'https://www.cityofcordova.net/city-utilities/',
        'description': 'The city of Cordova offers recycling',
        'city': 'Cordova',
        'volunteer': 'no',
        'name':'Cordova'
    },
    'Valley Community for Recycling Solutions' : {
        'website': 'https://www.valleyrecyclingak.org/',
        'description': 'Valley Community for Recycling Solutions (VCRS) is a community and volunteer based non-profit organization serving the residents and businesses of the Mat-Su Borough and the communities connected along the road system.TVCRS provides the opportunity to recycle and educates all ages on the benefits of recycling.',
        'city': 'Palmer',
        'volunteer': 'https://www.valleyrecyclingak.org/volunteer',
        'name':'Valley Community for Recycling Solutions'
    },
    'Central Recycling Facility' : {
        'website': 'https://www.co.fairbanks.ak.us/294/Central-Recycling-Facility',
        'description': '',
        'city': 'Fairbanks',
        'volunteer': 'no',
        'name':'Central Recycling Facility'
    },
    'Sitka' : {
        'website': 'https://www.cityofsitka.com/departments/PublicWorks/solid-waste',
        'description': 'Sitka offers a number of recycling items',
        'city': 'Sitka',
        'volunteer': 'no',
        'name':'Sitka'
    },
    'unknown' : {
        'description': 'Nothing exists for that name'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:recycle_name', (request, response) => {
    const recycle_name = request.params.recycle.toLowerCase()
    if (recycle[recycle_name]) {
        response.json(recycle[recycle_name])
    } else {
        response.json(recycle[]])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})