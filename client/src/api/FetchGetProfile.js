const FetchGetProfile = async (url, token) => {
  const fullUrl = '/api/v1/user/' + url
  console.log(url, token)
  try {
    const res = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const resdata = await res.json()
    //console.log('resdata', resdata)
    return resdata
  } catch (error) {
    console.log('error', error)
  }
}
export default FetchGetProfile
