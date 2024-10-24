import axios from 'axios';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'X-RapidAPI-Key': '0fcd470ff0mshf98676035edce6bp1be2cdjsnd9a7a7a9a4b3',
        // 'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error: ', error.message);
  }
};

export const fetchExercisesByBodyPart = async bodyPart => {
  let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
