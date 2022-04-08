import serverRequest from '../server';

export async function getDataFromFile(fileName, dataRepresent) {
	// const res = await serverRequest(fileName, dataRepresent);

	return [
    {"id":1,"firstName":"Modestine","lastName":"Ciccottini","gender":"Female","parentId":97},
    {"id":2,"firstName":"Gabbie","lastName":"Sinton","gender":"Male","parentId":30},
    {"id":3,"firstName":"Goldie","lastName":"Ashforth","gender":"Polygender","parentId":38},
    {"id":4,"firstName":"Jasun","lastName":"Motion","gender":"Female","parentId":114},
    {"id":5,"firstName":"May","lastName":"Ellyatt","gender":"Female","parentId":44}
  ];
}
