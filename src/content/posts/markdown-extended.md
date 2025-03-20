---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '更多 Markdown 功能'
image: ''
tags: [测试]
category: '测试'
draft: false 
---

## GitHub 仓库卡片
您可添加动态链接至 GitHub 仓库的卡片，页面加载时会从 GitHub API 拉取仓库信息。

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码 `::github{repo="<所有者>/<仓库名>"}` 创建 GitHub 仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```

## 提示框
支持以下类型的提示框：`note`（注意）`tip`（提示）`important`（重要）`warning`（警告）`caution`（注意）

:::note
突出显示用户需要关注的信息，即使快速浏览时也需留意。
:::

:::tip
帮助用户更高效完成操作的补充信息。
:::

:::important
用户必须掌握的关键信息。
:::

:::warning
因潜在风险需要用户立即关注的关键内容。
:::

:::caution
某些操作可能导致的负面后果。
:::

### 基础语法

```markdown
:::note
突出显示用户需要关注的信息，即使快速浏览时也需留意。
:::

:::tip
帮助用户更高效完成操作的补充信息。
:::
```

### 自定义标题
可自定义提示框标题。

:::note[我的自定义标题]
这是带自定义标题的提示框。
:::

```markdown
:::note[我的自定义标题]
这是带自定义标题的提示框。
:::
```

### GitHub 语法支持

> [!TIP]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925) 同样受支持。

```
> [!NOTE]
> 支持 GitHub 语法

> [!TIP]
> 支持 GitHub 语法
```

## GitHub Repository Cards
You can add dynamic cards that link to GitHub repositories, on page load, the repository information is pulled from the GitHub API. 

::github{repo="Fabrizz/MMM-OnSpotify"}

Create a GitHub repository card with the code `::github{repo="<owner>/<repo>"}`.

```markdown
::github{repo="saicaca/fuwari"}
```

## Admonitions

Following types of admonitions are supported: `note` `tip` `important` `warning` `caution`

:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::

:::important
Crucial information necessary for users to succeed.
:::

:::warning
Critical content demanding immediate user attention due to potential risks.
:::

:::caution
Negative potential consequences of an action.
:::

### Basic Syntax

```markdown
:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::
```

### Custom Titles

The title of the admonition can be customized.

:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::

```markdown
:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::
```

### GitHub Syntax

> [!TIP]
> [The GitHub syntax](https://github.com/orgs/community/discussions/16925) is also supported.

```
> [!NOTE]
> The GitHub syntax is also supported.

> [!TIP]
> The GitHub syntax is also supported.
```