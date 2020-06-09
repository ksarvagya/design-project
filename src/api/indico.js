import { key } from "../config";

const formatResponse = response => {
  console.log(response);
  return response.json().then(data => {
    return { data: data.results, status: response.status };
  });
};

const analyze = text => {
  const url =
    "https://apiv2.indico.io/apis/multiapi?apis=sentimenthq,texttags,keywords,personality,emotion";
  const data = { api_key: key, data: text };
  return fetch(url, {
    body: JSON.stringify(data),
    method: "post"
  }).then(formatResponse);
};

export default { analyze };
