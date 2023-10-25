/* eslint-disable @typescript-eslint/restrict-template-expressions */
const API_URL = process.env.API_URL

export const getAllQuestions = async () => {
  const res = await fetch(`${API_URL}/data.json`)
  const json = await res.json()
  return json
}
