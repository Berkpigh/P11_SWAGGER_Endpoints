const FetchUpdateProfile = async (url, token, data) => {
  const fullUrl = '/api/v1/user/' + url
  console.log(url, token, data)
  try {
    const res = await fetch(fullUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })
    const resdata = await res.json()
    //console.log('resdata', resdata)
    return resdata
  } catch (error) {
    console.log(error)
  }
}
export default FetchUpdateProfile
