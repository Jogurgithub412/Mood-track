import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectsService from '../../Services/project.services';

function EditMood() {
  const [mood, setMood] = useState('');
  const [comment, setComment] = useState('');

  const { moodId, commentId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    new ProjectsService().getMood(moodId)
      .then((response) => {
        const oneMood = response.data;
        setMood(oneMood.mood);
        setComment(oneMood.comment);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [moodId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = { mood, comment };

    new ProjectsService().updateMood(moodId, requestBody)
      .then(() => {
        navigate(`/moodlist`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteMood = () => {
    new ProjectsService().deleteMood(moodId)
      .then(() => {
        navigate('/moods');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="edit-mood">
      <h3>Edit Mood</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Mood</label>
        <input
          type="text"
          name="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />

        <label>Comment:</label>
        <textarea
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button type="submit">Edit</button>
      </form>
      <button onClick={deleteMood}>Delete</button>
    </div>
  );
}

export default EditMood;