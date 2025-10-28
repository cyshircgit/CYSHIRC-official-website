# 數據配置文件說明

本目錄包含網站使用的所有 JSON 配置文件，方便管理和更新網站內容。

## 📁 文件結構

### `stats.json`
網站統計數據，用於首頁和關於頁面。

```json
{
  "memberCount": 45,        // 社員人數
  "currentClass": "116級",  // 當前屆別
  "semesterFee": "500",     // 學期社費（元）
  "foundedYear": "2010"     // 創立年份
}
```

**使用位置：**
- `/src/routes/about/+page.svelte` - 關於頁面的統計區塊

---

### `events.json`
活動列表，包含所有近期活動資訊。

```json
[
  {
    "id": 1,
    "category": "社群活動",
    "date": "2024.11",
    "title": "新生迎新茶會",
    "description": "活動描述...",
    "icon": "IconUsers"  // 對應的 Tabler Icon 名稱
  }
]
```

**Icon 對應表：**
- `IconUsers` - 社群活動
- `IconCode` - 技術課程
- `IconRocket` - 競賽活動

**使用位置：**
- `/src/routes/+page.svelte` - 首頁活動預覽
- `/src/routes/events/+page.svelte` - 活動列表頁面

---

### `features.json`
社團特色功能列表。

```json
[
  {
    "id": 1,
    "title": "技術學習",
    "description": "系統化程式課程與工作坊",
    "icon": "IconDeviceLaptop"
  }
]
```

**Icon 對應表：**
- `IconDeviceLaptop` - 技術學習
- `IconUsersGroup` - 團隊協作
- `IconSparkles` - 創新實踐
- `IconNetwork` - 社群連結

**使用位置：**
- `/src/routes/+page.svelte` - 首頁特色區塊

---

## 🔧 如何更新數據

### 更新社員人數
編輯 `stats.json`：
```json
{
  "memberCount": 50  // 改成新的人數
}
```

### 新增活動
在 `events.json` 中新增項目：
```json
{
  "id": 4,  // 遞增的唯一 ID
  "category": "工作坊",
  "date": "2025.03",
  "title": "AI 機器學習入門",
  "description": "學習基礎機器學習概念...",
  "icon": "IconCode"
}
```

### 修改學期社費
編輯 `stats.json`：
```json
{
  "semesterFee": "600"  // 改成新的金額
}
```

---

## 📌 注意事項

1. **Icon 名稱必須正確**：確保 JSON 中的 `icon` 值與 `iconMap` 中的鍵名對應
2. **ID 唯一性**：events 和 features 的 `id` 必須唯一
3. **日期格式**：統一使用 `YYYY.MM` 格式
4. **JSON 格式**：確保 JSON 語法正確，可使用線上工具驗證

---

## 🚀 可用的 Icons

來自 `@tabler/icons-svelte`：
- `IconUsers` - 用戶/社群
- `IconCode` - 程式碼
- `IconRocket` - 火箭/競賽
- `IconDeviceLaptop` - 筆電
- `IconUsersGroup` - 團隊
- `IconSparkles` - 星光/創新
- `IconNetwork` - 網絡
- `IconCalendar` - 日曆
- `IconMapPin` - 地點
- `IconClock` - 時間

需要更多 icons 請至：https://tabler.io/icons
