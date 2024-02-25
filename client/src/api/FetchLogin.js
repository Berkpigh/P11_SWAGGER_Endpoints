const FetchLogin = async (url, data) => {
  const fullUrl = '/api/v1/user/' + url
  //console.log(url, data)
  try {
    const res = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
    const resdata = await res.json()
    //console.log('resdata', resdata)
    return resdata
  } catch (error) {
    console.log('error', error)
    return error
  }
}
export default FetchLogin
