import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

// 得到el中loading效果的img元素
function getLoadingImage(el) {
  return el.querySelector("img[data-role=loading]");
  
}
// 创建一个加载图片元素
function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = loadingUrl;
  img.className = styles.loading;
  return img;
}

// 导出指令的配置对象
export default function (el, binding) {
  //根据bingding.value的值决定创建或者删除元素
  const curImg = getLoadingImage(el);
  if (binding.value) {
    if (!curImg) { //没有loading图片，并且要创建一个
      const img = createLoadingImg();
      el.appendChild(img);
    }
  } else {
      if(curImg){
        curImg.remove();
      }
  }
}
