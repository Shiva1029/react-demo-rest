export const htmlDecode = (str) => {
  const element = document.createElement('div'); // eslint-disable-line no-undef
  element.innerHTML = str;
  return element.childNodes.length === 0 ? '' : element.childNodes[0].nodeValue;
};

export const dsHTML = str => ({ __html: htmlDecode(str) });
