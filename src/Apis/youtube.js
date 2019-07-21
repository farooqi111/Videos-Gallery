import axios from "axios";
const KEY = "AIzaSyCmy0B-CQD6yUqQNLRBxxYyiaKkFsL0XBg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    key: KEY
  }
});
