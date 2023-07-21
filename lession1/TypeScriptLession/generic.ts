//-------------------Generic--------------------------------

const arrColors = ['red', 'blue', 'yellow', 'red'];

const getDictinctArray = <Type>(arg: Type[]): Set<Type> => {
  const list = new Set<Type>();
  arg.forEach((element) => {
    list.add(element);
  });
  return list;
};

console.log('Array color ', getDictinctArray<String>(arrColors));

