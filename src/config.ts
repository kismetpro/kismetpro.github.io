import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

// 导出网站配置对象，类型为 SiteConfig
export const siteConfig: SiteConfig = {
  // 网站标题
  title: 'KismetPro',
  // 网站副标题
  subtitle: '我的小破站',
  // 网站语言，取值可以是 'en'（英文）、'zh_CN'（简体中文）、'zh_TW'（繁体中文）、'ja'（日文）、'ko'（韩文）、'es'（西班牙文）、'th'（泰文）
  lang: 'zh_CN',
  // 主题颜色配置
  themeColor: {
    // 主题颜色的默认色调，取值范围是 0 到 360。例如：红色是 0，蓝绿色是 200，青色是 250，粉红色是 345
    hue: 220,
    // 是否对访问者隐藏主题颜色选择器
    fixed: true,
  },
  // 横幅配置
  banner: {
    // 是否启用横幅
    enable: true,
    // 横幅图片的路径，相对于 /src 目录。如果路径以 '/' 开头，则相对于 /public 目录
    src: 'assets/images/demo-banner.png',
    // 横幅图片的位置，相当于 object-position，只支持 'top'（顶部）、'center'（中间）、'bottom'（底部），默认值是 'center'
    position: 'center',
    // 横幅图片的版权信息配置
    credit: {
      // 是否显示横幅图片的版权文本
      enable: false,
      // 要显示的版权文本
      text: '',
      // （可选）指向原创作品或作者页面的 URL 链接
      url: ''
    }
  },
  // 目录配置
  toc: {
    // 是否在文章右侧显示目录
    enable: true,
    // 目录中显示的最大标题深度，取值范围是 1 到 3
    depth: 2
  },
  // 网站图标配置，留空数组则使用默认图标
  favicon: [
    // {
    //   // 网站图标路径，相对于 /public 目录
    //   src: '/favicon/icon.png',
    //   // （可选）'light'（浅色模式）或 'dark'（深色模式），只有当你有不同的浅色和深色模式图标时才设置
    //   theme: 'light',
    //   // （可选）网站图标尺寸，只有当你有不同尺寸的图标时才设置
    //   sizes: '32x32',
    // }
  ]
}

// 导出导航栏配置对象，类型为 NavBarConfig
export const navBarConfig: NavBarConfig = {
  // 导航栏链接数组
  links: [
    // 首页链接预设
    LinkPreset.Home,
    // 归档页链接预设
    LinkPreset.Archive,
    // 关于页链接预设
    LinkPreset.About,
    {
      // 链接名称
      name: 'GitHub',
      // 链接地址，内部链接不应包含基础路径，因为会自动添加
      url: 'https://github.com/kismetpro',
      // 是否为外部链接，为 true 时会显示外部链接图标并在新标签页中打开
      external: true,
    },
  ],
}

// 导出个人资料配置对象，类型为 ProfileConfig
export const profileConfig: ProfileConfig = {
  // 头像图片路径，相对于 /src 目录。如果路径以 '/' 开头，则相对于 /public 目录
  avatar: 'assets/images/demo-avatar.png',
  // 名字
  name: 'KismetPro',
  // 个人简介
  bio: '海上生明月，天涯共此时',
  // 个人资料链接数组
  links: [
    {
      // 链接名称
      name: 'Twitter',
      // 图标代码，访问 https://icones.js.org/ 获取图标代码，若图标集未包含则需安装对应图标集，例如 `pnpm add @iconify-json/<icon-set-name>`
      icon: 'fa6-brands:twitter',
      // 链接地址
      url: 'https://twitter.com',
    },
    {
      // 链接名称
      name: 'Steam',
      // 图标代码
      icon: 'fa6-brands:steam',
      // 链接地址
      url: 'https://store.steampowered.com',
    },
    {
      // 链接名称
      name: 'GitHub',
      // 图标代码
      icon: 'fa6-brands:github',
      // 链接地址
      url: 'https://github.com/kismetpro',
    },
  ],
}

// 导出许可证配置对象，类型为 LicenseConfig
export const licenseConfig: LicenseConfig = {
  // 是否启用许可证
  enable: true,
  // 许可证名称
  name: 'CC BY-NC-SA 4.0',
  // 许可证链接地址
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
