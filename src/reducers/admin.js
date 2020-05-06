const initialState = [];

const adminItems = (state = initialState, action) => {
  let newState = [...state];
  switch (action.type) {
    case 'FETCH_DATA':
      console.log('actionFetctAllData', action);
      newState = action.data;
      return [...newState];
    case 'DELETE_ADMINITEM':
      let index = newState.findIndex((item) => item.id === action.id);
      newState.splice(index, 1);
      return [...newState];
    case 'ADD_DATA':
      console.log('actionADD', action);
      let data = {
        id: action.data.id,
        usersName: action.data.usersName,
        gmail: action.data.gmail,
        firtName: action.data.firtName,
        lastName: action.data.lastName,
        password: action.data.password,
        role: action.data.role,
      };
      newState.push(data);
      return [...newState];
    case 'UPDATE_DATA':
      let indexUpdate = newState.findIndex(
        (item) => item.id === action.data.id
      );
      newState[indexUpdate] = action.data;
      return [...newState];
    case 'SEARCH_DATA':
      console.log('actionSearch', action);
      newState = action.data;
      let arrFilter = [];
      let count = 0;
      const keyWord = action.keyword;
      if (keyWord !== '') {
        action.data.filter((item) => {
          let arrCharState = item.usersName.toUpperCase().split('');
          let arrCharKeyword = keyWord.toUpperCase().split('');
          console.log('arrChar', arrCharState + ' ' + arrCharKeyword);
          for (let i = 0; i < arrCharKeyword.length; i++) {
            for (let j = 0; j < arrCharState.length; j++) {
              if (arrCharKeyword[i] === arrCharState[j]) {
                count++;
                if (count >= 2) {
                  console.log('item', item);
                  arrFilter.push(item);
                  return arrFilter;
                }
              }
            }
          }
        });
        newState = [...arrFilter];
      } else return (newState = [...action.data]);
      return [...newState];
    default:
      return [...newState];
  }
};

export default adminItems;
