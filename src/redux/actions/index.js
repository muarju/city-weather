export const addSearchResult = (result) => {
  console.log(result, 'FROM ADD_SEARCH ACtion')
   return{ type: 'ADD_SEARCH_RESULT',
    payload: result}
}

export const addSearchValue = (value) => ({
  type: 'ADD_SEARCH_VALUE',
  payload: value,
})