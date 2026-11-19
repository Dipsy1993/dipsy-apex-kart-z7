# 部署与验证

## 本地预览

在 `apex-kart` 目录运行：

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

打开 <http://127.0.0.1:8765/>。这是纯静态站点，不需要构建。

如果之前打开过旧版本，按 `Ctrl+F5` 强制刷新；或在 DevTools → Application → Service Workers 里 Unregister，再清空 Cache Storage。

## 部署到 GitHub Pages

当前仓库是静态构建，根目录直接发布：

1. 备份旧文件；
2. 用本目录内容覆盖仓库根目录（保留 `.nojekyll`）；
3. 确认 `index.html` 中所有资源都是 `?v=11`；
4. 确认 `offline-worker.js` 的 `cacheName` 是 `apex-z7-playtest-v14`；
5. 提交并 push 到 `main`；
6. 等待 GitHub Pages 构建后，用无痕窗口打开并强制刷新。

需要一起更新的文件：

```
index.html
style.css
game.js
kart.js
scene.js
track-visual.js
render.js
session.js
music.js
playtest.js
offline-worker.js
manifest.webmanifest
favicon.ico / favicon.svg
icon-192.png / icon-512.png
music/zootopia.mp3
CAR_SYSTEM.md
ZOOTOPIA_TRACK.md
CHANGELOG.md
```

`compare-before/` 是旧构建备份，不参与运行；可以保留或删除。

## 自动验证清单

- 直接开跑：倒计时显示 000 km/h，计时 00:00.00；
- 大奖赛发车：屏幕上方无黑色龙门架横梁；
- 新手训练 → 刹车入弯：从 300 m 起步，40 米牌前重刹；失败显示牌速/刹车距离；
- 赛事 → 动物城·热力追踪：卡片有预览；HUD 显示城区；跑完 3 圈有记录；
- 手机（触屏）：默认滑动手势转向；暂停可切“按键”；
- 暂停菜单：有“回到赛道 · R”；
- 车库：家族卡显示 x/7 · 使用中；改装对比无 0.00 噪音；
- 车库：C1–Z7 等级阶梯 7 步；当前车系 7 代时间线；“车系图谱 · 35 辆”矩阵显示 35 台；
- 车系卡显示 闪电/荒漠/蓝潮/星核/赤隼；Z7 名称分别为 天穹/荒神/环翼/星冕/赤霄；
- 控制台无 404（favicon 已补）。

## 说明

本环境没有用户的 GitHub 账号凭据，因此没有直接推送线上仓库；以上文件即完整可部署版本。
