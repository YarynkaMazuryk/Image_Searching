import {fetchData} from "../helpers/apiHelpers";

export function getImages(searchProp) {
    return fetchData(`method=flickr.photos.search&api_key=6b3575d10435de5f010fc941f5eff94a&format=json&nojsoncallback=1&text=${searchProp}`, 'GET')
}