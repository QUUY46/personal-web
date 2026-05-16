# 照片放置说明

页面里的说明块已经删掉。以后加图时，以这里为准。

## 1. 页面和文件夹对应关系

| 页面 | 文件夹 | 用法 |
| --- | --- | --- |
| Home | `photos/hero/` | 只放一张主照片，固定文件名 `main.jpg` |
| Landscape | `photos/landscape/` | 这一页只放 Landscape 系列 |
| 大舞台 の一歩 | `photos/da-butai/` | 这一页只放大舞台系列 |
| Polaroid | `photos/polaroid/` | 这一页只放 Polaroid 系列 |
| About | `photos/about/` | 只放一张代表照片 |

## 2. 命名规则

```text
photos/hero/main.jpg
photos/landscape/photo-01.jpg
photos/landscape/photo-02.jpg
photos/da-butai/photo-01.jpg
photos/da-butai/photo-02.jpg
photos/polaroid/photo-01.jpg
photos/polaroid/photo-02.jpg
photos/about/photo-01.jpg
```

## 3. 处理顺序

1. 先把照片复制到对应文件夹
2. 再按 `photo-01.jpg`、`photo-02.jpg` 这种顺序重命名
3. 公开页面优先用 `.jpg`
4. 需要轻量版时，再生成对应的 `-800` 文件

## 4. 规则

- 文件名保持简单
- `p1` 只是原始素材库，不是网页入口
- About 页只保留一张代表照片
- 以后要加图，先分文件夹，再改名，再替换页面引用
