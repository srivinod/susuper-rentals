import Route from '@ember/routing/route';

export default class IndexRoute extends Route{
    async model() {
        return{
            title: 'Grand Old Mansion',
            owner: 'Nishant',
            city: 'San Fransico',
            location : {
                lat: 37.7749,
                lng: -122.194,
            },
            category: 'Estate',
            type: 'StandAlone',
            bedrooms: '15',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
            description: 'This is a grand old mansion',            
        }
    }

}