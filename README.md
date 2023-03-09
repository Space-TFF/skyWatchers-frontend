# 301 Final Project: Space Explorer

## Team members

Jack Stubblefield, Susan Harguss, Eva Smith

## Overview

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
  