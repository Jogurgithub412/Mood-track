import {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link, useParams} from 'react-router-dom';
import projectsService from '../../Services/project.service';

function MoodDetailsPage() {
  // write state. By default it'll be null because we don't have
  // the mood
  const [mood, setMood] = useState(null);

  // grab the MoodId from route params
  const {moodId} = useParams();
  
  // function to call axios to do a GET request 
  // to find a Mood by the Id. 
  const getMood = () =>{
    projectsService.getProject(projectId)
    .then((response)=>{
        const oneProject = response.data; 
        setProject(oneProject);
    })
    .catch((error)=>console.log(error));
  }

  // Side-effect after initial render of the component.
  // The empty array must be as a parameter to tell to React that 
  // it'll happen after it renders the component

  useEffect(()=>{
    getProject();
  }, [])

  return (
    <div className="mood-details">
      {mood && (
        <div>
          <h1>{mood.mood}</h1>
          <p>{mood.comment}</p>
        </div>
      )}
        
      <Link to={`/moods/edit/${moodId}`}>
        <button>Edit Mood</button>
      </Link>      

      <Link to={`/moods/edit/${commentId}`}>
        <button>Edit Comment</button>
      </Link>


 
      <Link to="/mood-tracker">
        <button>Back to MoodTracker</button>
      </Link>
    </div>
  )
}

export default ProjectDetailsPage