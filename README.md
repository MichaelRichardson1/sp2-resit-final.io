# sp2-resit-final

Known Issues

1/ 401 Authentication Error after logging in - Unsure on how to fix this one, my guess is I used the wrong API endpoint, or used the incorrect data from the response.
2/ Sass styling is incomplete
3/ Demo site link exists and works, however only displays a ReadMe file.

Functionality of site

The site is a nextJS project that uses React, Bootstrap and Sass. Ensure the necessary files are installed via npm or yarn.

The site opens onto a landing page, simply with 2 links, one for visitors and one for members.

Visitor path - View all listings, get a message about credits and how to become a member to get credits, link to register form.  Register as new user with a noroff or stud.noroff email address. Yup resolvers are in place to enforce validation. Upon success, become a member.

Member path - Login form, enter user details and log in, directed to member's version of the listings, extra options to enter bids and view bids, get credits 1000 once per day when logging in, links to create listings and update profile, logout button, credits displayed, logout redirects to landing page.

Create listing form - updates api with new listing upon submission.

Profile - used for updating profile avatar image url upon submission.

Would have liked to have tested the final two points, but I think the 401 error was stopping me from doing so. 

Would have also liked to finish the styling off, ensure all code was functional and add a few extra bits onto the site. Like displaying the avatar of the user for example in the various headers.

There are multiple different header, listing and item components to account for the different account types, in this case, visitors and members. 

Some headers have more content than others, as many of the options are not needed for both account types. Unnecessary links for example were removed.
