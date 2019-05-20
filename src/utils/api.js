// const mocks = {
//     'auth': { 'POST': { token: 'This-is-a-mocked-token' } },
//     'user/me': { 'GET': { name: 'doggo', title: 'sir' } }
//   }
  
// const apiCall = () => new Promise((resolve, reject) => {
//   -    setTimeout(() => {
  // const apiCall = async (url, method, user) => { // ok
  const apiCall = async ( {url, method, ...args} ) => {
    const settings = {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('user-token')
      },
      body: JSON.stringify(args.data) // context.state.newObject // JSON.stringify(context.state.catalog)
    }
    const data = await fetch(url, settings)
      .then(response => response.json())
      .then(json => {
        return json
        // console.log(json)
      })
      .catch(e => {
        return e
        // console.log(e)
      })
    return data
      
    /* setTimeout(() => {
      try {
        resolve(mocks[url][method || 'GET'])
        console.log(`Mocked '${url}' - ${method || 'GET'}`)
        console.log('response: ', mocks[url][method || 'GET'])
      } catch (err) {
        reject(new Error(err))
      }
     }, 1000)*/
  }
  
  export default apiCall