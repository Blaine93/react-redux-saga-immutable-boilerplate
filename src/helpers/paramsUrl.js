import { parse, stringify } from 'qs';

function getUrlParams() {
  return parse(window.location.search, { ignoreQueryPrefix: true });
}

export function getQueryString(params) {
  return stringify(params, { addQueryPrefix: true, encode: false });
}

export function updateUrlQueryString(values) {
  const params = getUrlParams();

  values.forEach(([paramName, value]) => {
    if (value) {
      params[paramName] = value;
    } else {
      delete params[paramName];
    }
  });

  return getQueryString(params);
}
