// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList2 = () => {
    // Invoke the function that you imported from the database module
    const fishes2 = getFish()
    
    // Start building a string filled with HTML syntax
    let htmlString2 = '<section class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes2) {

        // Why is there a backtick used for this string?
        htmlString2 += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.locationphoto}"/></div>                
                <section class="fish location">
                <div=fish_location>Quote: ${fish.quote}</div>
                </section>`
            }
            htmlString2 += `</section>`
            return htmlString2        
    }
    

