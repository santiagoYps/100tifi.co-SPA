const getHash = () => 
location.hash           //  #/1/
.slice(1)               //  /1/
.toLocaleLowerCase()
.split('/')[1]
|| '/';

export default getHash;