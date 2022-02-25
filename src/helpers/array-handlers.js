function createTree(data) {
  let tempData = data.map(item => item);
  let indexedItems = [];
  let tree = [];

  // function createChildren(i) {
  //     if (!indexedItems.includes(data[i])) {
  //       indexedItems.push(data[i].id);

  //       for (let j = 0; j < tempData.length; j++) {
  //         if (!indexedItems.includes(tempData[j].id)) {
  //           if (tempData[j].id === data[i].parent_id) {
  //             indexedItems.push(data[j].id);
  //             tempData[j].children = [];
  //             tempData[i].children.push(data[j]);
  //           }
  //         }
  //       }

  //     // indexes.push(data[i].id);

  // }

  // for (let i = 0; i < data.length; i++) {
  //   createChildren(i)
  // }

  console.log(tempData);
  return data;
}

export { createTree };
