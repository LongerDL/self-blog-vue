<template>
  <div class="siteAside">
    <!-- 用于装头像 -->
    <Avatar
      class="headImg"
      url="https://img0.baidu.com/it/u=1794455602,3389966975&fm=26&fmt=auto"
      :size="150"
    />
    <div class="name">汪汪队睡大觉</div>
    <!-- 中间文章首页等部分 -->
    <nav class="center">
      <RouterLink
        v-for="item in items"
        :exact="item.exact"
        :key="item.link"
        :to="{ name: item.name }"
        active-class="selected"
        exact-active-class=""
      >
        <div class="iconfont">
          <Icon :Icontype="item.icon" />
          <span>{{ item.title }}</span>
        </div>
      </RouterLink>
    </nav>
    <!-- 最底层的收件箱 -->
    <div class="footer">
      <ul>
        <li>
          <a href="" @click.prevent
            ><Icon class="iconfont" Icontype="github" /><span
              >This is github</span
            ></a
          >
        </li>
        <li>
          <a href="mailto:1780105381@qq.com">
            <Icon class="iconfont" Icontype="mail" /><span>This is email</span>
          </a>
        </li>
        <li>
          <a
            href="tencent://message/?Menu=yes&uin=609412188&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
          >
            <Icon class="iconfont" Icontype="qq" /><span>This is QQ</span>
          </a>
        </li>
        <li>
          <a href="" @click.prevent
            ><Icon class="iconfont" Icontype="weixin" /><span
              >This is WeChat</span
            ></a
          >
          <div class="pop">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.669pic.com%2Felement_pic%2F50%2F30%2F1%2F47%2F4d0a0e7236d48364b61ff2119088bd0c.jpg&refer=http%3A%2F%2Fimages.669pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638953893&t=0f4af4f27bc8406f007f3893adea759e"
              alt=""
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Avatar from "../Avatar";
import Icon from "../Icon";
export default {
  components: {
    Avatar,
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          link: "/",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          link: "/blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          link: "/about",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          link: "/project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          link: "/message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  methods: {
    // isSelected(itemLink) {
    //   let path = itemLink.toLowerCase() //菜单地址
    //   let curPathName = location.pathname.toLowerCase() //输入的地址
    //   if (itemLink.startWith) {
    //     return curPathName.startsWith(path)
    //   } else {
    //     return curPathName === path
    //   }
    // },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@sitebgColor: #202020;
@wordsColor: #fff;
li {
  list-style: none;
  margin: 8px;
  padding-top: 8px;
  cursor: pointer;
  position: relative;
  &:hover {
    color: lightpink;
    .pop {
      transform: scaleY(1);
    }
  }
}
.siteAside {
  background: @dark;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: @wordsColor;
  justify-content: space-around;
  margin: 0;
  font-size: 100%;
}
.headImg {
  margin: 20px auto;
}
.name {
  text-align: center;
  height: 2em;
  line-height: 2em;
  font-size: 1.5em;
  margin-top: -20px;
}
.center {
  padding-left: 10px;
}
.center span {
  display: inline-block;
  margin: 8px auto;
}
.center span,
.footer span {
  text-align: center;
  height: 20px;
  line-height: 20px;
  font-size: 1em;
  padding-left: 8px;
}
.footer {
  margin: 20px;
}
.footer .pop img {
  width: 80%;
  height: 80%;
  border-radius: 5px;
}
.iconfont {
  font-size: 1em;
  color: lightblue;
  &:hover {
    color: lightpink;
  }
}
a {
  display: block;
  text-decoration: none;
  color: #fff;
  &.selected {
    background-color: darken(@gray, 40%);
  }
  &:hover {
    color: lightpink;
  }
}
.pop {
  position: absolute;
  top: -150px;
  transform: scaleY(0);
  transition: 0.3s;
  transform-origin: center bottom;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background-color: #fff;
  }
}
</style>
