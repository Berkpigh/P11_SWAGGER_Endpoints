const FetchSignOut = async (url) => {
  const fullUrl = '/api/v1/user/' + url
  try {
    const res = await fetch(fullUrl)
    const result = res.json()
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
    return 'failure'
  }
}
export default FetchSignOut
