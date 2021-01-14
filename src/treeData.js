{
  const treeData = [
    {
      name: "总部",
      place: "一楼",
      children: [
        { name: "财务部", place: "二楼" },
        { name: "生产部", place: "三楼" },
        {
          name: "开发部",
          place: "三楼",
          children: [
            {
              name: "软件部",
              place: "四楼",
              children: [
                { name: "后端部", place: "五楼" },
                { name: "前端部", place: "七楼" },
                { name: "技术支持部", place: "六楼" },
              ],
            },
            {
              name: "硬件部",
              place: "四楼",
              children: [
                { name: "DSP部", place: "八楼" },
                { name: "ARM部", place: "二楼" },
                { name: "调试部", place: "三楼" },
              ],
            },
          ],
        },
      ],
    },
  ];

  /**
   * 树状数据扁平 -- 遍历树状数据有children的进行递归处理
   * @param { Array } treeData
   * @param { Array } lastData
   */
  const flatTree = (treeData = [], lastData = []) => {
    treeData.forEach((item) => {
      if (item.children) {
        flatTree(item.children, lastData);
      } else {
        const { name, place } = item;
        lastData.push({ name, place });
      }
    });
    return lastData;
  };

  let list = flatTree(treeData);
  console.log(list);
}

{
  const data = [
    {
      id: 1,
      parent_id: null,
    },
    {
      id: 2,
      parent_id: null,
    },
    {
      id: 3,
      parent_id: 1,
    },
    {
      id: 4,
      parent_id: 2,
    },
    {
      id: 5,
      parent_id: 4,
    },
  ];
  /**
   * 根据key生成树状数据 -- 根据id重组数据，children进行递归处理
   * @param {Array} data
   * @param {any} id
   * @param {String} key
   */
  const nestTree = (data, id = null, key = "parent_id") => {
    return data
      .filter((fitem) => fitem[key] === id)
      .map((mitem) => ({
        ...mitem,
        children: nestTree(data, mitem.id),
      }));
  };
  const newTree = nestTree(data);
  console.log(newTree);
}
