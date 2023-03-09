const baseUrl = 'https://api.github.com/users';

const fetchUser = eventId =>
  fetch(`${baseUrl}/${eventId}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('fetch error');
    })
    .catch(err => alert(err));

export default fetchUser;
