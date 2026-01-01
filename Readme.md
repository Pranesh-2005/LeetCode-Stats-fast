# LeetCode Stats Card (Vercel Version)

Show your dynamically generated LeetCode stats on your GitHub profile or your website!

LeetCode and LeetCode CN are both supported.

[Playground: Try It Now](https://leetcodestatsgen.vercel.app/)

[![LeetCode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=unicorn&ext=activity)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=unicorn&ext=activity)

## Features

- 📈 Clean and simple LeetCode stats, for both `us` and `cn` sites
- 🎨 Multiple themes and fonts - [Theme](#theme-default-lightdark), [Font](#font-default-baloo_2)
- ⚡️ Fast and global edge network - [Vercel Edge Function](https://vercel.com/)
- 🚫 No tracking, controllable cache - [Cache](#cache-default-1800)
- 🍀 Open source - [MIT License](./LICENSE)
- ⚙️ Extended-cards: `activity`, `contest`, `heatmap`

Want to contribute? Feel free to open a pull request!


## Usage

Simply copy the code below, paste it into your `README.md`, and change the path to your leetcode username (case-insensitive).

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005)
```

Congratulation! You are now showing your LeetCode stats on your profile!

Want a hyperlink? Try this:

```md
[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005)](https://leetcode.com/pranesh_s_2005)
```

### Endpoint

The endpoint of this tool is:

<https://leetcode-stats-fast.vercel.app/>

### Options

There are many options, you can configure them by passing a query string to the endpoint.

#### `site` (default: `us`)

Data source, can be `us` or `cn`.

```md
![](https://leetcode-stats-fast.vercel.app/leetcode&site=cn)
```

[![](https://leetcode-stats-fast.vercel.app/leetcode&site=cn)](https://leetcode-stats-fast.vercel.app/leetcode&site=cn)

#### `theme` (default: `light,dark`)

Card theme, see [Theme](#themes) for more information.

Use a comma to separate the light and dark theme.

```md
![](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=unicorn)
![](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=light,unicorn)
```

[![](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=unicorn)](https://leetcode.com/jacoblincool)


#### `font` (default: `Baloo_2`)

Card font, you can use almost all fonts on [Google Fonts](https://fonts.google.com/).

It is case-insensitive, and you can use `font=dancing_script` or `font=Dancing%20Script` to get the same result.

```md
![](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&font=Dancing_Script)
```

[![](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&font=Dancing_Script)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&font=Dancing_Script)

#### `width` and `height` (default: `500` and `200`)

Change the card size, it will not resize the content.

But it will be helpful if you want to use custom css.

```md
![](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&width=500&height=500)
```

[![](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&width=500&height=500)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&width=500&height=500)


#### `animation` (default: `true`)

Enable or disable the animation.

```md
![](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&animation=false)
```

[![](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&animation=false)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&animation=false)

#### `ext` (default: `""`)

Extension, it is a comma-separated list of extension names.

NOTICE: You can only use one of extended-card extensions (`activity`, `contest`, `heatmap`) at a time now, maybe they can be used together in the future.

> Animation, font, theme, and external stylesheet are all implemented by extensions and enabled by default.

Want to contribute a `nyan-cat` extension& PR is welcome!

```md
![](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&ext=activity)
```

[![](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&ext=activity)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&ext=activity)

```md
![](https://leetcode-stats-fast.vercel.app/?username=lapor&ext=contest)
```

[![](https://leetcode-stats-fast.vercel.app/?username=lapor&ext=contest)](https://leetcode-stats-fast.vercel.app/?username=lapor&ext=contest)

```md
![](https://leetcode-stats-fast.vercel.app/?username=lapor&ext=heatmap)
```

[![](https://leetcode-stats-fast.vercel.app/?username=lapor&ext=heatmap)](https://leetcode-stats-fast.vercel.app/?username=lapor&ext=heatmap)

#### `cache` (default: `1800`)

Cache time in seconds.

Note: it will not be a good idea to set it to a long time because GitHub will fetch and cache the card.

```md
![](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&cache=0)
```

> You can make `DELETE` request to `/:site/:username` to delete the cache.


### Themes

Now we have 6 themes. If you have any great idea, please feel free to open a PR!

#### Light

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=light)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=light)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=light)

#### Dark

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=dark)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=dark)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=dark)

#### Nord

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=nord)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=nord)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=nord)

#### Forest

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=forest)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=forest)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=forest)

#### WTF

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=wtf)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=wtf)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=wtf)

#### Unicorn

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=unicorn)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=unicorn)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=unicorn)

#### Transparent

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=transparent)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=transparent)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&theme=transparent)

### Fonts

You can now use almost all fonts on [Google Fonts](https://fonts.google.com/).

Some examples:

#### Milonga

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&font=milonga)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&font=milonga)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&font=milonga)

#### Patrick Hand

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&font=patrick_hand)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&font=patrick_hand)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&font=patrick_hand)

#### Ruthie

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&font=ruthie)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&font=ruthie)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&font=ruthie)

### Extensions

Extension, it is a comma-separated list of extension names.

NOTICE: You can only use one of extended-card extensions (`activity`, `contest`, `heatmap`) at a time now, maybe they can be used together in the future.

> Animation, font, theme, and external stylesheet are all implemented by extensions and enabled by default.

Want to contribute a `nyan-cat` extension& PR is welcome!

#### `activity`

Show your recent submissions.

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&ext=activity)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&ext=activity)](https://leetcode-stats-fast.vercel.app/?username=pranesh_s_2005&ext=activity)

#### `contest`

Show your contest rating history.

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=lapor&ext=contest)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=lapor&ext=contest)](https://leetcode-stats-fast.vercel.app/?username=lapor&ext=contest)

#### `heatmap`

Show heatmap in the past 52 weeks.

```md
![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=lapor&ext=heatmap)
```

[![Leetcode Stats](https://leetcode-stats-fast.vercel.app/?username=lapor&ext=heatmap)](https://leetcode-stats-fast.vercel.app/?username=lapor&ext=heatmap)
