A web app To help users track their moods,listen to relaxing ambient sounds to  improve their mental wellbeing. 


Create - 

Read 

Create, read , Update , Delete - Individuals can update, edit, delete their daily mood and add note.   

Delete 



User Stories

404: As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
Signup: As an anonymous user I can sign up on the platform so that I can start creating and managing tournaments.

Login: As a user I can login to the platform so that I can access my profile and track my mood , .

Logout: As a logged in user I can logout from the platform so no one else can use it.

Profile Page: As a logged in user I can visit my profile page to  edit my profile , access mood tracker , relaxing sounds

Add Mood : As a logged in user I can access the home page ,edit  and track my mood. 
Edit Mood  : As a logged in user I can access edit my mood and add comment.
View Mood graph: As a logged in user I can access my mood graph, listen to mood enhancing ambient sound. 



Client / Frontend

User model: 1) User Model

{ email: {type:}
}
2) Mood
3) Mood enhancing Sound




React Router Routes (React App)

Path    Component    Permissions    Behavior

/login    LoginPage    anon only <AnonRoute>    Login form, navigates to home page after login.

/signup    SignupPage    anon only <AnonRoute>    Signup form, navigates to home page after signup

/    HomePage    public <Route>    Home page.

/user-profile    ProfilePage    user only <PrivateRoute>    User and player profile for the current user.

/user-profile/edit    EditProfilePage    user only <PrivateRoute>    Edit user profile form.

/mood/add    CreatemoodPage    user only <PrivateRoute>    Create add mood form.

/viewmoodgraph    Moodgraph    user only <PrivateRoute>    Mood graph.

/mood/:moodId    MoodDetails    user only <PrivateRoute>    Show Mood details.

/improveMood     Sound     user ony <PrivateRoute>  Show mood enhancing sounds  and being able to play them. 

