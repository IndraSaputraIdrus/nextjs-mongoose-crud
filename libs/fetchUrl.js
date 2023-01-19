const fetchUrl = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  } else {
    return "http://localhost:3000";
  }
};

export default fetchUrl;