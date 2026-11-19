# 动物城 · 热力追踪（Zootopia Hot Pursuit 灵感赛道）

> 这是一张原创同人灵感赛道，不是迪士尼官方地图，也不使用任何迪士尼图片、模型、音频或平面素材。
> 仅用于个人/非商业的赛车游戏试玩。名称与地名是对公开资料中“疯狂动物城：热力追踪”的致敬。

## 1. 公开资料自动审核

实现前抓取并交叉核对了以下公开资料（只取“事实级”信息，不复制任何地图或美术资产）：

- Wikipedia — *Zootopia: Hot Pursuit*（上海迪士尼乐园无轨黑暗骑乘，2023-12-20 开放；警车；Bellwether、Woolter、Jesse 越狱并绑架 Gazelle）  
  https://en.wikipedia.org/wiki/Zootopia:_Hot_Pursuit
- Disney Parks Blog — 官方景点介绍（新警员视角、ZPD、无轨警车）  
  https://disneyparksblog.com/disney-experiences/shanghai-disney-resort-reveals-attraction-details-dining-experiences-and-more-for-zootopia-a-new-themed-land/
- KKday — 动物城园区与热力追踪乘坐体验、分区与排队动线  
  https://www.kkday.com/en/blog/84468/zootopia-land-shanghai-disneyland-hot-pursuit-ride-food-map-and-merch
- 新闻晨报/网易 — 项目故事线、冰川镇鱼罐头工厂、撒哈拉广场、神秘泉绿洲、城市街道追逐、约 5 分钟  
  https://m.163.com/dy/article/IJLGR6GH0514A42S.html

交叉核对后采用的关键事实：

1. 游客身份是新警员，乘坐“全地形警车”；
2. 追捕对象是越狱的坏绵羊 Bellwether 及其同伙 Woolter、Jesse；
3. 被绑架的是流行巨星 Gazelle（夏奇羊），全城疯唱派对面临威胁；
4. 场景包括 ZPD 警局、监狱、冰川镇（鱼罐头工厂）、撒哈拉广场、雨林/神秘泉绿洲、城市街道；
5. 体验包含加速、急停、坠落和场景切换，官方未公开精确路线图。

因此本赛道只复刻“地区顺序 + 追逐叙事”，路线形状、建筑、道具、标识和音乐均为原创/程序化生成。

## 2. 赛道设定

- ID：`zootopia`
- 名称：动物城 · 热力追踪
- 长度：3480 m
- 级别：专家
- 一圈 3 个检查段；大奖赛 3 圈 / 计时 2 圈
- 主题：黄昏动物城，警车从 ZPD 出发，穿过六个城区后回到全城疯唱广场

| 区段 | 距离比例 | 视觉/路面 | 驾驶差异 |
| --- | --- | --- | --- |
| 稀树草原中心（ZPD 起点） | 0–15.5% | 暖金城市主街 | 正常抓地 |
| 冰川镇 | 15.5%–33.5% | 冰蓝楼群、鱼罐头厂 | 抓地 0.84，转向/制动减弱 |
| 撒哈拉广场 | 33.5%–54.5% | 沙色街区、宽路 | 路宽 1.12，适合长距离加速 |
| 雨林区 | 54.5%–73.5% | 绿色雨林、湿润路面 | 路宽 0.92，抓地 0.96 |
| 小型啮齿动物镇 | 73.5%–83.5% | 窄巷、彩色小店 | 路宽 0.88，连续小弯 |
| 动物城天际线 | 83.5%–92.5% | 高架、霓虹 | 高速区 |
| 全城疯唱广场 | 92.5%–100% | Gazelle 舞台、终点 | 宽路冲刺 |

## 3. 实现方式

- `kart.js`
  - `tracks` 新增 `zootopia` 数据；
  - `routePoints.zootopia` 新路线（大环 + 左侧内收，避免城市建筑压到赛道）；
  - `roadAt()` 按 phase 调整宽度/抓地，形成冰川、撒哈拉、雨林、啮齿镇差异；
  - `courseLighting.zootopia` 与 `sectorFractions.zootopia`；
  - `trackLandmarks.zootopia`。
- `scene.js`
  - `Rg.zootopia` 主题色；
  - 复用/扩展城市建筑，但把 `city` 判断扩展到 `zootopia`；
  - `ZootopiaProps` 生成 ZPD、六个城区侧牌和终点舞台侧牌（不遮挡路面）；
  - 预览相机距离表加入 `zootopia`。
- `track-visual.js`
  - 增加 `zootopia` 调色板与分区建筑配色；
  - 卡片预览使用城区渐变（冰蓝/沙金/雨林绿/霓虹）。
- `music.js` + `music/zootopia.mp3`
  - 复用城市放克底轨，作为“动物城追捕”音乐。

## 4. 免责声明

“Zootopia / 疯狂动物城 / 热力追踪 / ZPD / Gazelle”等名称归迪士尼所有。本实现是粉丝向、非商业的原型，不包含官方地图、角色模型、电影画面或原声。若用于商业发行，请替换为完全原创的命名与视觉。
