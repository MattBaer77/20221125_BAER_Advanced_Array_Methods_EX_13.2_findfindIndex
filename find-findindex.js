/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {

  //TRY 1

  // console.log(usersArray['0']);


  // const foundName =

  // usersArray.find((v, i) => {

  //   // console.log(usersArray[`${i}`]);
    
  //   if (username === usersArray[`${i}`]['username']){
  //     return usersArray[`${i}`];
  //   }

  //   // return Object.keys(usersArray)[`${v}`] === username;
  // });

  // console.log(foundName);

  // return foundName

  // TRY 1 

  // TRY 2

  // const foundName =

  // usersArray.find((v, i) => {

  //   // console.log(v);
    
  //   if (username === v['username']){
  //     return v;
  //   }
  // });

  // return foundName

  // TRY 2

  // TRY 3

  const foundName =

  usersArray.find((v, i) => {    
    return username === v['username']
  });

  return foundName

  // TRY 3

}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {

  // console.log(usersArray);
  // console.log(username);

  const foundIndex =

  usersArray.findIndex((v, i) => {

    return username === v['username'];

  })

  // console.log(foundIndex);

  // console.log(usersArray);

  let removedUser = usersArray[foundIndex];

  // console.log(removedUser);

  if (foundIndex !== -1) {
    usersArray.splice(foundIndex, 1)};

  // console.log(usersArray);

  return removedUser;



}