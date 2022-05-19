import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "@/assets/middle1.jpg",
      bigImg: "@/assets/big1.jpg",
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "2",
      midImg: "@/assets/middle3.jpg",
      bigImg: "@/assets/big2.jpg",
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "3",
      midImg: "@/assets/middle3.jpg",
      bigImg: "@/assets/big3.jpg",
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});
