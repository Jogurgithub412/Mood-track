import axios from "axios";

/* Axios Service that deals with Project Requests */

class ProjectsService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_APP_SERVER_URL,
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/projects
  createProject = (requestBody) => {
    return this.api.post("/api/projects", requestBody);
  };

  getSounds = () => {
    return this.api.get("/api/moodsound");
  };

  createMood = (requestBody) => {
    return this.api.post("/api/create-mood", requestBody);
  };

  getAllMoods = () => {
    return this.api.get("/api/get-mood");
  };

  getMood = (id) => {
    return this.api.get(`/api/get-mood/${id}`);
  };

  updateMood = (id, requestBody) => {
    return this.api.put(`/api/update-mood/${id}`, requestBody);
  };

  deleteMood = (id) => {
    return this.api.delete(`/api/delete-mood/${id}`);
  };
}


// Create one instance object
const projectsService = new ProjectsService();

export default ProjectsService;
