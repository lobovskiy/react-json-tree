function getRootParents(data) {
  const rootParents = [];
  const indexedItems = [];
  let currentChainIndexes = [];

  // recursive chain search of parent item
  // with checking of already indexed items and preventing chain loop
  function findParents(arr, i) {
    if (!indexedItems.includes(arr[i]?.id)) {

      // saving item index in common index array and for the current recursive chain
      indexedItems.push(arr[i].id);
      currentChainIndexes.push(arr[i].id);

      if (currentChainIndexes.includes(arr[i].parentId)) {    // loop check
        rootParents.push(arr[i]);    // if there's a loop, consider current element as a root element
        return;
      }

      // searching for parents of current element in the array
      for (let j = 0; j < arr.length; j++) {
        if (arr[i].parentId === arr[j].id) {

          // if element's parent is already indexed, this chain doesn't have its own root parent
          if (indexedItems.includes(arr[j].id)) {
            return;
          }

          // recursively get parents for the current parent element
          findParents(arr, j);
          return;
        }
      }

      rootParents.push(arr[i]);    // make current element root if it hasn't got any parents in the array
    }
  }

  // search parent items in the all data array
  for (let i = 0; i < data.length; i++) {
    currentChainIndexes = [];   // make empty array of current chain items indexes for every iteration
    findParents(data, i);
  }

  return rootParents;
}

function createTreeArray(data, rootItems) {
  let indexedItems = [];
  rootItems.forEach(item => indexedItems.push(item.id));

  function findChildren(item) {
    item.children = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].parentId === item.id && !indexedItems.includes(data[i].id)) {
        item.children.push(data[i]);
        findChildren(data[i]);
      }
    }
  }

  rootItems.forEach(item => findChildren(item));
  return rootItems;
}

function getChildren(treeData, id) {
  if (!Array.isArray(treeData)) {
    return [];
  }

  const childrenArr = [];
  let isAdded = false;

  function addChildren(branchNodes) {

    for (let i = 0; i < branchNodes.length; i++) {
      if (branchNodes[i]?.id === id) {
        branchNodes[i]?.children?.forEach(child => {
          delete child.children;
          childrenArr.push(child);
        });
        isAdded = true;
        break;
      }

      if (branchNodes[i]?.children?.length) {
        addChildren(branchNodes[i].children);
      }

      if (isAdded) {
        break;
      }
    }
  }

  addChildren(treeData);
  return childrenArr;
}

export { getRootParents, createTreeArray, getChildren };
