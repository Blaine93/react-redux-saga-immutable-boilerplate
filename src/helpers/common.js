import { Iterable } from 'immutable';

export const isImmutable = (data) => {
  return Iterable.isIterable(data);
};

export const convertFromImmutableToJS = (elt) => {
  if (isImmutable(elt)) {
    return elt.toJS();
  }

  return elt;
};
