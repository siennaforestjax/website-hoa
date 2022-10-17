import React from 'react';
import classes from './NeighborhoodPage.module.css'
import ImageWithLoadingFallback from '../ImageWithLoadingFallback/ImageWithLoadingFallback';

const sourceUrl = process.env.REACT_APP_API_URL;

function NeighborhoodPage() {
  return (
    <>
      <h1 className={classes.pageTitle}>Welcome to the Neighborhood!</h1>
      <figure className={classes.fig}>
        <ImageWithLoadingFallback source={`${sourceUrl}/entranceSign.jpg`} altText="Sienna Forest Entrance Sign" />
      </figure>
      <h2 className={classes.sectionTitle}>About Us</h2>
      <div className={classes.description}>
        Sienna Forest was established in 1993 in Jacksonville, FL. Over the past
        30 years, we've grown to 47 beautiful homes in this beautiful Mandarin
        area neighborhood.<br />
        Visit us{' '}
        <a
          href="https://www.google.com/maps/dir//Flynn+Road+%26+Tanya+Terrace,+Jacksonville,+FL/@30.1537967,-81.6761568,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e5cedbc36ebd3b:0x858067931f06455d!2m2!1d-81.6410515!2d30.1537272!3e0"
          target="_blank" rel="noreferrer"
        >
          here</a>, or write us at: <address>P. O. Box 600991, Jacksonville, Florida 32260-0991</address>
      </div>
      <h2 className={classes.sectionTitle}>Useful Links</h2>
      <ul className={classes.linkList}>
        <li><a className={classes.webLink} href="https://www.coj.net/welcome.aspx" target="_blank" rel="noreferrer">City Of Jacksonville Information</a></li>
        <li><a className={classes.webLink} href="https://www.jaxsheriff.org/Contact-Us.aspx" target="_blank" rel="noreferrer">Contact the Jacksonville Sheriff's Department</a></li>
        <li><a className={classes.webLink} href="https://www.duvalelections.gov/" target="_blank" rel="noreferrer">Find Voter Information</a></li>
        <li><a className={classes.webLink} href="https://myjax.custhelp.com/app/hauler" target="_blank" rel="noreferrer">Your Trash Schedule</a></li>
        <li><a className={classes.webLink} href="https://myjax.custhelp.com/app/evacuation_zone" target="_blank" rel="noreferrer">Know Your Evacuation Zone</a></li>
      </ul>
      <h2 className={classes.sectionTitle}>Did you know?</h2>
      <ul className={classes.factList}>
        <li className={classes.fact}>From the 1940s to 1968, Mandarin was known as the place in Jacksonville that had a "Little Train. It was located on State Road 13 (now mostly called San Jose Blvd.) and Mandarin Road. night where the Publix is. Folks would drive to Mandarin from all around to buy oranges and ride the train through the woods for 10 cents. The train was called the "St. Johns & Eastern Railroad" and built and owned by Mr. E. C. Ward.</li>
        <li className={classes.fact}>Many newcomers don't know that Mandarin used to have two baseball teams.  Sadly, the teams were segregated at the time. The White team, called the Orange Pickers, played orginally at the Mandarin Community Club parking lot, and later at Alberts Field. They played other teams from neighborhoods all around Duval County. In 1949, the home team won the North Florida Championship. They played from 1925-1956.
               The Black citizens had a team in the 1940s, called "the Ball Team" and later the Raiders. At first they played in an unimproved field off Brady Road, but later on the ballfield that is located on Orange Pickers Road, now called Walter Anderson Memorial Park. The park was renamed to honar Mr. Anderson, who sold that property in 1955 to the City of Jacksonville for $1.00- so the Black team would have a place to play baseball.
        </li>
        <li className={classes.fact}>Mandarin once had a winery! Frank and Dometella Losco had 7 acres of their farm in scuppemong grapes and they made about 40 barrels of wine a year that was for sale.
               Their little log cabin winery building was moved to Walter Jones Historical park in 2007, where you can visit it on the 1st and 3rd Saturdays from 10-2.
        </li>
        <li className={classes.fact}>1964 was a bad year for Mandarin because Humcane Dora caused great damage to the area on September 10 Mandarin resident George Winterling, who was the meteorologist at WIXT, was the only person to accurately predict the crazy path the storm took The Church of Our Saviour (including the Tiffany stained glass window that honored Harriet Beecher Stowe and her husband Calvin) was destroyed and there was much damage, loss of power, flooding and general destruction</li>
        <li className={classes.fact}>From 1911 until 1964 the Walter Jones Store and Post Office, located at 12471 Mandarin Road, was the heart of Mandarin's community. The Mandarin Store and Post Office evokes memories of small town and village general stores across America. It was the hub of village life from 1911 until it closed in 1964. It sold everything from canned goods from South America, to meat, animal feed, fish, cold soda, and penny candy. It was a favorite stop for area children because the school bus stopped out front.  The onginal proprietor and postmaster was Walter Jones. His daughter, Miss Agnes (Aggie) Jones, took over when he died in 1928. It is open on the 3rd Saturday of the month from 10-2</li>
      </ul>
    </>
  )
}

export default NeighborhoodPage;
