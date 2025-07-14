/**
 * Get all png jpe and svg images in the specified folder
 * starting at /public/images.
 * @param folder the specified folder.
 * @returns a list of all path string images.
 */
const getCollectionImages = (folder) => {
    try {
        const images = require.context('/public/images', true, /\.(png|jpe?g|svg)$/);
        const folderImages = images.keys()
            .filter(item => item.includes(`/${folder}/`))
            .map(item => item.replace('./', '/images/'));
        return folderImages;
    } catch (error) {
        console.error('require.context not available', error);
        return [];
    }
}

const collectionData = {
    'gym': {
        title: 'Gym',
        images: getCollectionImages('gym'),
        frontImage: 'front-img.jpeg',
    },

    'bungalows': {
        title: 'Bungalows',
        images: getCollectionImages('bungalows'),
        frontImage: 'front-img.png',
        features: [
            '1 living room',
            '1 bedroom',
            'Kitchen',
            '1 bathroom',
            'Ground floor',
            'Free WiFi',
            'Pool Access'
        ],
    },

    'bungalow-private-pool': {
        title: 'Bungalow with Private Pool',
        images: getCollectionImages('bungalow-private-pool'),
        frontImage: 'front-img.jpeg',
        features: [
            'Seaview Terrace',
            'Private Pool',
            'Living Room',
            'Master Bedroom',
            'Jacuzzi',
            'Kitchen',
            'Free WiFi',
            'Pool Access',
            'Sofa Beds'
        ],
    },

    'sweet-chalet': {
        title: 'Sweet Chalet',
        images: getCollectionImages('sweet-chalet'),
        frontImage: 'front-img.jpeg',
        features: [
            '1 large living room',
            '2 bedrooms',
            '2 bathrooms',
            'kitchen',
            'Panoramic large terrace seaview',
            'Free WiFi',
            '4 sofa beds',
            'Pool Access for 8pax'
        ],
    },

    'medium-chalet': {
        title: 'Standard Chalet 40m',
        images: getCollectionImages('medium-chalet'),
        frontImage: 'front-img.jpeg',
        features: [
            '1 living room',
            '1 bedroom',
            'Kitchen',
            '1 bathroom',
            'Seaview balcony',
            'Pool Access',
            'Free WiFi',
            'Gaz. Fridge. Boiler'
        ]
    },

    'large-chalet': {
        title: 'Large Chalet',
        images: getCollectionImages('large-chalet'),
        frontImage: 'front-img.jpg',
        features: [
            '1 large living room',
            '1 large master bedroom',
            '2 bathrooms',
            '1 large seaview balcony',
            'Kitchen',
            'Free WiFi',
            'Pool Access'
        ],
    },
    
    'chalet-studio': {
        title: 'Chalet Studio 15m',
        images: getCollectionImages('chalet-studio'),
        frontImage: 'front-img.jpg',
        features: [
            '1 bedroom',
            '1 bathroom',
            'Kitchen',
            'Seaview balcony',
            'Gaz. Frdige. Boiler',
            'Free WiFi',
            'Pool access for 2pax'
        ],
    },

    'chalet-jacuzzi': {
        title: 'Chalet with Jacuzzi',
        images: getCollectionImages('chalet-jacuzzi'),
        frontImage: 'front-img.jpg',
        features: [
            '1 bedroom',
            '1 bathroom',
            'Kitchen',
            'Seaview balcony',
            'Free WiFi',
            'Pool Access for 2pax',
        ],
    },

    'chalet-terrace': {
        title: 'Chalet with Terrace',
        images: getCollectionImages('chalet-terrace'),
        frontImage: 'front-img.jpg',
        features: [
            '1 large living room',
            '1 bedroom',
            '1 bathroom',
            'kitchen',
            'Panoramic terrace seaview',
            'Pool Access for 4pax',
            'Free WiFi',
            'Gaz. Fridge. Boiler.'
        ],
    },

    'dream-chalet': {
        title: 'Dream Chalet',
        images: getCollectionImages('dream-chalet'),
        frontImage: 'front-img.jpg',
        features: [
            'Panoramic Seaview',
            'Mountain view 360',
            '1 bedroom',
            '1 large living room',
            '2 bathrooms',
            'Kitchen',
            '3 balconies'
        ],
    },
}


export default collectionData;