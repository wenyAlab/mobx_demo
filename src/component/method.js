const formatTextLength = (text, num) => {
  let finalText;
  if (text.length>num){
    finalText = text.slice(0, num) + '...';
  } else {
    finalText = text;
  }
  return finalText;
}

const mapData = (arr) => {
  return arr&&arr.length>0&&(arr.length>4?arr[0]:arr.map(i=> i));
}


export {
  formatTextLength,
  mapData
}