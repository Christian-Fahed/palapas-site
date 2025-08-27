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

/**
 * Load and process collection data from JSON file
 * @returns Promise that resolves to processed collection data
 */
const loadCollectionData = async () => {
    try {
        const response = await fetch('/collectionData.json');
        const jsonData = await response.json();
        
        const processedData = {};
        Object.entries(jsonData).forEach(([key, collection]) => {
            processedData[key] = {
                ...collection,
                images: getCollectionImages(collection.folder)
            };
            // Remove folder property as it's no longer needed in final data
            delete processedData[key].folder;
        });
        
        return processedData;
    } catch (error) {
        console.error('Error loading collection data:', error);
        return {};
    }
};

export { loadCollectionData };
export default loadCollectionData;