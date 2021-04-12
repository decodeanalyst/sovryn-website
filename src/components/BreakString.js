export const breakString = (str, limit) => {
    let brokenString = '';
    for(let i = 0, count = 0; i < str.length; i++){
       if(count >= limit && str[i] === ' '){
          count = 0;
          brokenString += '\n';
       }else{
          count++;
          brokenString += str[i];
       }
    }
    return brokenString;
}