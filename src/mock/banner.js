import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "https://s2.loli.net/2022/05/19/MN6uedHfX4wL1sG.jpg",
      bigImg: "https://s2.loli.net/2022/05/19/esnVQ5ULBj1d6Mk.jpg",
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "2",
      midImg: "https://s2.loli.net/2022/05/19/RPxhaAlK7dM2yCf.jpg",
      bigImg: "https://s2.loli.net/2022/05/19/6ZRotm2InHx1qCr.jpg",
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "3",
      midImg: "https://s2.loli.net/2022/05/19/i9CKtjWvc2AXylI.png",
      bigImg: "https://s2.loli.net/2022/05/19/gtMI7oN3TuUxLAC.jpg",
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});
