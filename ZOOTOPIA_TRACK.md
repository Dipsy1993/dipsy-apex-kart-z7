# 动物城 · 热力追踪（Zootopia Hot Pursuit 灵感赛道）

> 这是一张原创同人灵感赛道，不是迪士尼官方地图，也不使用任何迪士尼图片、模型、音频或平面素材。
> 仅用于个人/非商业的赛车游戏试玩。名称与地名是对公开资料中“疯狂动物城：热力追踪”的致敬。

## 1. 公开资料与路线依据

本轮按“实际乘坐体验”重新核对，而不是按电影城市地图硬套：

- Wikipedia — *Zootopia: Hot Pursuit*：ZPD 集合 → 冰川镇雪地摩托追逐 → 撒哈拉广场（货运列车、Duke、神秘泉绿洲）→ 雨林区空中缆车 → 稀树草原中心 Zootopia Day 派对。  
  https://en.wikipedia.org/wiki/Zootopia:_Hot_Pursuit
- Disney Wiki — 骑乘剧情与角色顺序（Bellwether、Woolter、Jesse、Gazelle、Clawhauser）。  
  https://disney.fandom.com/wiki/Zootopia:_Hot_Pursuit
- 上海迪士尼官方景点页（Zootopia 园区、黑暗骑乘、身高 81cm）。  
  https://www.shanghaidisneyresort.com/en/experience/attraction/zootopia-hot-pursuit/
- KKday 园区指南（Zootopia land 布局、Hot Pursuit 入口/排队动线）。  
  https://www.kkday.com/en/blog/84468/zootopia-land-shanghai-disneyland-hot-pursuit-ride-food-map-and-merch
- Blooloop 2024 创新奖项目页（撒哈拉广场场景的媒体/霓虹/实景同步）。  
  https://blooloop.com/innovation-awards/2024/project/zootopia-hot-pursuit/

官方没有公开精确轨道图，因此本赛道只复刻“**地区顺序 + 追逐节拍 + 场景记忆点**”，路线形状、建筑、道具、标识和音乐均为原创/程序化生成。

## 2. 赛道设定

- ID：`zootopia`
- 名称：动物城 · 热力追踪
- 长度：3480 m
- 级别：专家
- 一圈 3 个检查段；大奖赛 3 圈 / 计时 2 圈
- 主题：从 ZPD 出发，追捕穿过六个城区，最后回到 Zootopia Day 全城派对

| 区段 | 距离比例 | 场景/事件 | 驾驶差异 |
| --- | --- | --- | --- |
| 动物城警局（ZPD） | 0–4% | 警局广场、警车、警灯、新警报到 | 起步区，正常抓地 |
| 冰川镇 | 4%–31% | 雪堤、冰柱、鱼罐头厂、雪地摩托痕迹 | 路宽 0.96，抓地 0.82，转向/制动减弱 |
| 撒哈拉广场 | 31%–44% | 货运列车横穿、市场遮阳棚、Duke 摊位 | 路宽 1.12，抓地 1.02，长距离加速 |
| 神秘泉绿洲 | 44%–56% | 温泉池、岩石、蒸汽、棕榈、窄路 detour | 路宽 0.88，抓地 0.95 |
| 雨林区 | 56%–80% | 巨树、树冠、空中缆车塔/缆车、湿雾 | 路宽 0.92，抓地 0.96 |
| 稀树草原中心 | 80%–100% | 天际线、Gazelle 舞台、Big Donut、彩带人群 | 路宽 1.07，终点冲刺 |

## 3. v20 实现方式

> v20 放弃近轨 3D 盒子街道，改为“清晰赛道走廊 + 远景 skyline billboard + 2.5D 舞台/人群剪影”。目标不是更细的模型，而是**在 300 km/h 下不穿模、能读城区**。


> v17 在 v16 的城区套件基础上，补了立面贴图/发光窗/店招、货运列车横穿、市场人群、Gazelle 舞台演出、彩带和每城区环境音。


> v16 在 v15 的区段/门架/天气基础上，补了五套城区建筑套件、可动画地标、小地图地标点和当前城区高亮。


- `kart.js`
  - `routePoints.zootopia`：ZPD 东侧出发 → 北侧冰川 → 西侧撒哈拉 → 西南绿洲 → 西北雨林 → 东侧稀树草原；避免旧版“贴五个地名的大直道”。
  - `roadAt()`：按 phase 调整宽度/抓地，形成冰面、沙地、绿洲窄路、雨林湿地的差异。
  - `courseLighting.zootopia`、`sectorFractions.zootopia`、`trackLandmarks.zootopia` 全部按新区段重设。
- `scene.js`
  - `zooMood()`：按区段插值天空、雾、环境光、太阳、曝光，冰川蓝、撒哈拉橙、绿洲青、雨林绿、稀树草原金；不再全图一个紫色黄昏。
  - `portal()`：每个城区入口的实体门架 + 大字横幅，替代“路边小牌子”。
  - `ZootopiaProps`：ZPD、鱼罐头厂、货运列车、绿洲温泉、空中缆车、Gazelle 舞台、Big Donut、天际线剪影；大体量道具放在护栏外 12–24 m，避免挡屏。
  - 移除旧的 Little Rodentia / Skyline 独立城区段；它们只作为稀树草原的远景/彩蛋，不再是骑乘站点。
- `game.js`
  - 赛道卡改为**手绘风城区地图**（6 段颜色 + ZPD 起终点 + 城区标签），不再用 3D 预览的绿 blob。
  - 小地图按城区色段绘制，HUD 城区名同步使用区段色。
- `track-visual.js`
  - 2D 天际线按 `zpd/tundra/sahara/oasis/rainforest/savanna` 分区着色。

## 4. 免责声明

“Zootopia / 疯狂动物城 / 热力追踪 / ZPD / Gazelle”等名称归迪士尼所有。本实现是粉丝向、非商业的原型，不包含官方地图、角色模型、电影画面或原声。若用于商业发行，请替换为完全原创的命名与视觉。
