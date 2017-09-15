import $ from 'jquery'

export function queryAPI (query) {
  console.log('about to search movies')
  const term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
  var url = "http://api.tvmaze.com/search/shows?q=" + term;

  return $.getJSON(url).then(function(response) {
    console.log('raw response:')
    console.log(response)
    return response.map(result => {
      const {name, image} = result.show;
      return {
        name,
        image: image.medium
      }
    })
  });
}
