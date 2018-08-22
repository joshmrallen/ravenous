//Add credentials
const apiKey = 'so7zEtdKGsJPkKuyWkfRKL3lNbaWk4N2o8R0-hX1xxg_ZCvNjZ4nJT2fewX3vZNmfFBV55RqhSQhw7CO2QfxcArt-0hxx7y4JGABdE2g-CjJ_4xaPH5aICnzfp16W3Yx';

//Creating a Yelp module
export const Yelp = {

  //use this method to retrieve search results from the Yelp API
  search(term,location,sortBy) {
    return {
      //fetching the businesses part of the API
      fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }//end inner object
      }//end outer object
    ).then(response => {
        //convert the returned response to JSON so we can effectively use the response
        return response.json();
      }).then(jsonResponse => {
          if(jsonResponse.businesses) {
            return {
              jsonResponse.businesses.map(business => {
                return {
                  rating: business.rating,
                  price: business.price,
                  phone: business.phone,
                  id: business.id,
                  alias: business.alias,
                  is_closed: business.is_closed,
                  category.alias: business.categories.alias,
                  category.title: business.categories.title,
                  review_count: business.review_count,
                  name: business.name,
                  url: business.url,
                  coordinates: business.coordinates,
                  image_url: business.image_url,
                  city: business.location.city,
                  country: business.location.country,
                  address2: business.location.address2,
                  address3: business.location.address3,
                  state: business.state,
                  address1: business.address1,
                  zip_code: business.zip_code,
                  distance: business.distance,
                  pickup: business.transactions.pickup,
                  delivery: business.transactions.delivery
                };//attributes to return from jsonResponse
              });//end map
            };//end return
          }//end if
        });//end fetch().then().then()
    };//end return of search method
  };//end search method


};//end Yelp module
