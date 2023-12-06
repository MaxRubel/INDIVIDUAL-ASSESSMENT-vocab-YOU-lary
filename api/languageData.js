const endpoint = 'https://vocabcards-aeca9-default-rtdb.firebaseio.com';

const getLangs = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json?orderBy="uid"&equalTo="${user.uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getAllLangs = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const grabLanguageKey = (language) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json?orderBy="language"&equalTo="${language}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  createLanguage,
  updateLanguage,
  getLangs,
  getAllLangs,
  grabLanguageKey
};
