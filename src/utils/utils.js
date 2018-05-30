export const htmlDecode = (str) => {
  const element = document.createElement('div');
  element.innerHTML = str;
  return element.childNodes.length === 0 ? '' : element.childNodes[0].nodeValue;
};

export const dsHTML = str => ({ __html: htmlDecode(str) });
