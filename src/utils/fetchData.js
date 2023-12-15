
export const exerciseOptions = {
    method: 'GET',  
    headers: {
        'X-RapidAPI-Key': 'ff33ae0779msh2be7dc5cae73e3fp193e9ajsnfe199ebf34b7',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
}; //параметры запроса для взаимодействия с API сервиса упражнений.

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ff33ae0779msh2be7dc5cae73e3fp193e9ajsnfe199ebf34b7',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}; //параметры запроса для взаимодействия с API сервиса YouTube поиска и скачивания видеороликов.

export const fetchData = async (url, options) => {
    const response =  await fetch(url, options);
    const data = await response.json();
    
    return data;
} // Экспортируется функция fetchData, которая принимает URL и параметры запроса, выполняет запрос с использованием fetch, парсит ответ в формат JSON и возвращает данные.
const axios = require('axios');

try {
	const response = await axios.request(youtubeOptions);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

try {
	const response = await axios.request(exerciseOptions);
	console.log(response.data);
} catch (error) {
	console.error(error);
}