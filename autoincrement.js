import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://app.asana.com/api/1.0/webhooks',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer 2/1204702265344627/1206113834109438:35a63d69e9b6f82ef1ef9e3e87439717'
  },
  data: {
    data: {
      resource: '1206113979841157',
      target: 'https://nodejs-postgresql-vtwl.onrender.com',
      filters: [{resource_type: 'project'}]
    }
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });