export const handleFetchError = async res => {
  if (res.status >= 400 && res.status < 600) {
    let err = {
      Message: res.statusText,
      Status: res.status
    };
    throw err;
  }
  return res.json();
};
