export function urlFormer ({farm, server, secret, id}) {
   return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
}