export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
  return items.map((user) => {
    if (user[objPropName] === itemId) {
      return { ...user, ...newObjProps };
    }
    return user;
  });
};
//в итоге вернет нам новый массив, в котором заменит, если найдет совпадение по objPropName из объекта с таким itemId, создаст копию объекта и заменит старые свойства деструктуризацией из новых свойств newObjProps
