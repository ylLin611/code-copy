# Markdown 语法
<hr />

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 段落

在这个世界上，每个人都有自己的生活方式和追求。有人喜欢安静的生活，有人喜欢热闹的环境。有人追求物质的满足，有人追求精神的富足。无论我们选择什么样的生活，都应该坚持自己的梦想，勇敢地去追求。因为只有这样，我们的生活才会充满意义和价值。同时，我们也要学会欣赏生活中的美好，无论是一朵花，一片云，还是一首歌，一部电影，都可以给我们带来快乐和感动。生活就像一本书，每一页都充满了惊喜和未知，只有我们用心去读，才能发现其中的奥秘和乐趣。所以，让我们珍惜每一天，热爱生活，勇往直前，追求自己的梦想吧！

## 图片

#### 写法

```markdown
![logo](/logo.png)
```

#### 输出(例)

![logo](/logo.png)

## 引用块

从外部引用的内容，可以选择：
- 使用`footer`、`cite`等标签
- markdown语法

### 不带标签

#### 写法

```markdown
> **加粗** 可以在引用块中使用 _Markdown 写法_ 。
```

#### 输出(例)

> **加粗** 可以在引用块中使用 _Markdown 写法_ 。

### 标签

#### 写法

```markdown
> 我这一生如履薄冰.<br>
> — <cite>e[^1]</cite>
```

#### 输出(例)

> 我这一生如履薄冰.<br />
> — <cite>e[^1]</cite>

[^1]: /

## 表格

#### 写法

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

#### 输出(例)

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## 代码块

#### 写法

可以使用三个``` 来开启代码块，让代码高亮，后面可以跟语言，如html, javascript, css, markdown, typescript, txt, bash等

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>HTML</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

输出(例)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>HTML</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## 列表

### 有序列表

#### 写法

```markdown
1. First item
2. Second item
3. Third item
```

#### 输出(例)

1. First item
2. Second item
3. Third item

### 无序列表

#### 写法

```markdown
- List item
- Another item
- And another item
```

#### 输出(例)

- List item
- Another item
- And another item

### 嵌套列表

#### 写法

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### 输出(例)

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## 其他 — abbr, sub, sup, kbd, mark

#### 写法

```markdown
<abbr title="我是title">GIF</abbr> 是图片格式.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd>

<mark>高亮</mark>
```

#### 输出(例)

<abbr title="我是title">GIF</abbr> 是图片格式.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd>

<mark>高亮</mark>

## 其他：关于mdx

- [MDX 语法文档](https://mdxjs.com/docs/what-is-mdx)