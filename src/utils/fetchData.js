export const exerciseOptions = {
  method: 'GET',  
    headers: {
        'X-RapidAPI-Key': 'ff33ae0779msh2be7dc5cae73e3fp193e9ajsnfe199ebf34b7',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ff33ae0779msh2be7dc5cae73e3fp193e9ajsnfe199ebf34b7',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };

export const fetchData = async (url, options) => {
    const response =  await fetch(url, options);
    const data = await response.json();

    return data;
}