/*
What are the properties of each fish that you will be representing in your HTML?
    create an array of fishObjects with properties required by Martin

What are the properties of the fish care tips that Martin wants on the side?
What are the properties of the locations Martin has visited?*/

// Import the FishList function from the correct module
import {FishList} from './fishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishList", ".fishLocation")

parentHTMLElement.innerHTML = FishList()


// fishCare [
//     Cleaning = "Depending on how many fish you have, and how messy they are, most tanks require cleaning about once every two weeks. Cleaning should involve: ✔ Siphoning the gravel to remove any debris and uneaten food, and changing about 10-15% of the water. ✔ Check the filter is working correctly.",
//     Salinity = "As low as 1.023 and as high as 1.028 are generally considered safe for corals, however, most hobbyists keep their salinity in the range of 1.024 and 1.026 (32 to 35 ppt). Generally only used for aquariums with saltwater fish as the salinity is too low for the vast majority of corals.",
//     Temperature = "Most tank fish do well at temperatures from 75-80 degrees Fahrenheit (23-27 degrees Celsius), but the needs of specific fish can vary."
// ]

// martinsHtml = () => {
 
// for (fishObject of fishList) {
//     fishhtmlString = (fishlist) => {
//         fishaddhtml = 
//         `<subtitle>Available Fish</subtitle>
//         <section>${fishlist.image} ${fishlist.name}: ${fishlist.species}, ${fishlist.length}, ${fishlist.location}, ${fishlist.diet} </section>`

//         return fishaddhtml
//     }
    
//     fishLocationhtmlString = (fishlist) => {
//          locationhtml = `
//          <subtitle>Harvest Locations</subtitle>
//          <section>${fishlist.locationphoto} ${fishlist.location}: "${fishlist.quote}"</section>
//          `
//          return locationhtml
//     }
// }

// fishCarehtmlString = (fishCare) => {
//    fishCarehtml= `<subtitle>"Helpful Tips"</subtitle>
//     <aside>${fishCare}</aside>`

//     return fishCarehtml
// }
// }

// let parentHTMLElement = document.querySelector("fish")
//module.exports = {martinsHtml()} 

/*
What should be the class names for component?
For example, locations for the container element for all locations, 
locations__header for the header, and location for each individual card.
Which semantic tags should you use?
You can be as creative as you like.
There are very few hard rules when it comes to semantic tags. 
Refer to the image in chapter 2 for guidance.

Nave bar- later
Heading- Name of Aquarium

Current Fish:- article
Image <Name, species, length, where it was harvested, and diet>

Places Visited:-article
Image <Place name and a quote about each one>

Aside Bar
Tank Cleaning Information
Salinity Information
Temperature Information

Background color for the whole site (sunset)
*/