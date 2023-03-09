# 301 Final Project: Space Explorer

## Team members

Jack Stubblefield, Susan Harguss, Eva Smith

## Overview

 The SkyWatcher website is to provide a centralized site for celestial information and upcoming events as well as assisting with travel information.  Our MVP will focus on the current path of the upcoming solar eclipse event in the USA. The path will be displayed on an interactive map which shows the cities on the eclipse path. The user can select the city they want to search and the search will return campgrounds and hotels  in the area with the ability to see user reviews, ratings, and contact info for booking.  There would be information on the time of the eclipse,  and include a countdown. Other information regarding the eclipse may be: tips for how to safely view a solar eclipse, and links on where to purchase gear related to the event.

1. An admin can create and delete user accounts.
2. A person can register on the website as a user.
3. A user can view and click on user added events on a map for viewing the eclipse.
4. The app will have a countdown to the eclipse.

## Scope (In/Out)

IN - What will your product do

 1. Our web app will provide information to the users about the upcoming eclipse in 2024
 2. Our app will allow users to look up details on campsites best suited for eclipse viewing in their selected areas.
 3. Our app will allow users to post gatherings on a map.
 4. Each gathering will bring up a modal when clicked on.
 5. Our app will allow users to communicate with each other on a basic level.
 6. Our app will have safeguards to keep it safe and family friendly.

OUT - What will your product not do.

 1. Our product will not include terrestrial events.
 2. Our app will not be officially associated with any organizations or businesses.
 3. Our app will not provide video of the eclipse or of any live viewing events.

## A list of any libraries, frameworks, or packages that your application requires in order to properly function

 1. React Bootstrap
 2. MUI
 3. Auth0
 4. Google Map API
 5. Axios
 6. MongoDB
 7. Netlify
 8. VS Code
 9. GitHub
10. Express
11. Node

## Clearly defined API endpoints with sample responses

REACT_APP=
PORT=
DB_URL=
REACT_APP_SERVER=
REACT_APP_DOMAIN=
REACT_APP_CLIENTID=
REACT_APP_MAP_KEY=


## Clearly defined database schemas

 placeSchema
    name: {type: String, require: true},
    city: {type: String, require: true},
    state: {type: String, require: true},
    time: {type: String, require: true},
    description: {type: String, require: true},
    RSVP: {type: Boolean, require: true},
    email: {type: String, require: true}

userSchema
    name: {type: String, require: true},
    email: {type: String, require: true},

UML
src/img/UML.png

Wireframe
src/img/wireframe.jpg

## Images

Photo by <a href="https://unsplash.com/@aldebarans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
>Aldebaran S</a> on
<a href="https://unsplash.com/s/photos/nebula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
>Unsplash</a>
  
Image by <a href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=33019"
>Clker-Free-Vector-Images</a> from
 <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=33019"
 >Pixabay</a>

Photo by <a href="https://unsplash.com/@sarahleejs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
>Jongsun Lee</a> on
<a href="https://unsplash.com/images/nature/eclipse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
>Unsplash</a>
  
  Image by <a href="https://pixabay.com/users/simaghaffarzadeh-779348/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2689087"
  >Sima Ghaffarzadeh</a> from
  <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2689087"
  >Pixabay</a>

  Image by <a href="https://pixabay.com/users/blendertimer-9538909/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6881859"
  >Daniel Roberts</a>
  from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6881859"
  >Pixabay</a>

  Photo by <a href="https://unsplash.com/@abedismail?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  >Abed Ismail</a>
   on <a href="https://unsplash.com/images/nature/eclipse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
   >Unsplash</a>
  
  Image by <a href="https://pixabay.com/users/astrobobo-13925790/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4545727"
  >Boris Štromar</a>
  from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4545727"
  >Pixabay</a>
  Image by <a href="https://pixabay.com/users/astrobobo-13925790/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4545727">Boris Štromar</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4545727">Pixabay</a>

  Image by <a href="https://pixabay.com/users/hans-2/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1061674">Hans</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1061674">Pixabay</a>
  Image by <a href="https://pixabay.com/users/simaghaffarzadeh-779348/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2689073">Sima Ghaffarzadeh</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2689073">Pixabay</a>
  Image by <a href="https://pixabay.com/users/pedrofigueras-5229515/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2878729">Pedro Figueras</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2878729">Pixabay</a>
  Image by <a href="https://pixabay.com/users/davedavidsoncom-4209827/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2670218">Dave Davidson</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2670218">Pixabay</a>
  Image by <a href="https://pixabay.com/users/davedavidsoncom-4209827/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2670217">Dave Davidson</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2670217">Pixabay</a>
  Image by <a href="https://pixabay.com/users/tramijasmine-6220387/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2662849">tramijasmine</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2662849">Pixabay</a>
  Image by <a href="https://pixabay.com/users/scratsmacker-16310259/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5159662">Uwe Conrad</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5159662">Pixabay</a>
  Image by <a href="https://pixabay.com/users/davedavidsoncom-4209827/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2670215">Dave Davidson</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2670215">Pixabay</a>
  Photo by <a href="https://unsplash.com/@thejasonhowell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Howell</a> on <a href="https://unsplash.com/images/nature/eclipse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  Photo by <a href="https://unsplash.com/@marcusdallcol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marcus Dall Col</a> on <a href="https://unsplash.com/images/nature/eclipse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  Photo by <a href="https://unsplash.com/@maximebhm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maxime Bhm</a> on <a href="https://unsplash.com/s/photos/outdoor-festival?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  Photo by <a href="https://unsplash.com/@davehoefler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dave Hoefler</a> on <a href="https://unsplash.com/images/nature/eclipse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  
  
  