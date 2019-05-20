// const mocks = {
//     'auth': { 'POST': { token: 'This-is-a-mocked-token' } },
//     'user/me': { 'GET': { name: 'doggo', title: 'sir' } }
//   }
  
// const apiCall = ({url, method, ...args}) => new Promise((resolve, reject) => {
//   -    setTimeout(() => {
  const apiCall = async (url, user, method) => {
    console.log('la url es : ' +url)
    // const apiUrl = url
    // const postData = user.data
    // const methodData = method
    // console.log(apiUrl)
    // const postData = data.user
    // console.log(postData)
    // console.log(postData)
    const settings = {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user) // context.state.newObject // JSON.stringify(context.state.catalog)
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