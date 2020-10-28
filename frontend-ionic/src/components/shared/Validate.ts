export const validate = (name: string, value: string) => {
  const map = createMap();
  let newValue: RegExp | any = map.get(name);

  if (value)
    if (!value.match(newValue)) {
      return true;
    }
  return false;
};

const createMap = () => {
  let map = new Map<string, RegExp | any>();
  map.set(
    'name',
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/
  );
  map.set(
    'email',
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  map.set('height', /^[1][3-9][0-9]$|^[2][0-1][0-9]$/);
  return map;
};
