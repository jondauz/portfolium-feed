function retrievedata ({limit, offset, sort}) {
    let apiUrl = `https://api.portfolium.com/entries/expert?limit=${limit}&offset=${offset}&sort=${sort}&X-API-KEY=devtest`;
    return fetch(`${apiUrl}`);
}

export default retrievedata;