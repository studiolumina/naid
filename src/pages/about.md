---
layout: ../layouts/AboutLayout.astro
---

Firstly, thank you for checking this template out. This is the end of a weekend long project to learn more about utility CSS frameworks and Astro templates. The template is inspired by the website for [voidzero.dev](https://voidzero.dev), and it will look very similar. The main goal in creating this template was to recreate the look of their site but using only Uno CSS. Outside of a few exceptions, that goal was accomplished.

The secondary goal of this template was to be something a developer could pick up and edit to fit their needs easily. It stays as close to Astro practices as possible, doesn't include unnecessary plugins or build processes. If you build sites with Astro and use any of the official templates as a base, this should be familiar to work in.

## The exceptions

Let's go over the shortcuts that have been created.

- `.wrapper` &mdash; Used as the `.container` for the template.
- `.title` &mdash; Used for most section titles.
- `.project-title` &mdash; Used for grid item titles.
- `.subtitle` &mdash; Used for section subtitles. Similar to adding `small.text-muted` when using Bootstrap
- `.small` &mdash; Used for accessory text, such as the "source" found on the sections on the home page.
- `.subtitle-small` &mdash; A smaller variant of the `.subtitle` class.
- `.project-list` &mdash; The grid set up for the project grid.
- `.section--index` &mdash; Used for the number index when adding the `index` prop to the `<Section>` component, e.g. `<Section index>`
- `.section--source` &mdash; Used for the accessory text when adding the `source` prop to the `<Section>` component, e.g. `<Section source="fake-file-name.md">`
- `.investor--label` &mdash; Used to label each level of investors.

### The inline styles

In a few places the choice was made to write CSS instead of inducing a concussion on the developer. These are mainly global styles, such as `.content-wrapper` which can be found on this page. `.content-wrapper` adds the necessary styles to the generated heading and paragraph elements. You can also find `.ignore-content-container` and `.inherit-content-container` which is used to manage spacing of descendant elements of the `<Section>` component.

```html
<Section>
    <h2>This element should have some inline padding</h2>
    <ul class="inherit-content-container">
        <li>But the if the <code>&gt;ul></code> element was give padding</li>
        <li>It would mess with the padding on the <code>&gt;li></code> element</li>
        <li><code>.inherit-content-container</code> passes the padding on to the child of the element with the class.
    </ul>
    <!-- 
        Or if your component already manages 
        it's own padding, we can ignore it entirely
    -->
    <ComponentWithPadding class="ignore-content-padding" />
</Section>
```

## Content Collections

If you aren't using Content Collections, you should be. They're a wonderful way to make sure the content/data you're writing is inline with all the other content on your site. It's also a great way to organize data that is tangential, such as authors or related projects.

The included collections are:

- authors &mdash; Each author get's their own `.json` file that can be referenced.
- posts &mdash; Markdown files should go here, with frontmatter matching the collection schema
- investors &mdash; This is a single entry collection, but could be converted to multiple entry fairly easily.
- projects &mdash; This is a multi entry collection, each project gets it's own `.json` file
- stats &mdash; This is a multi entry collection, use the `<StatsGrid entryName={entryIdentifier}>` component to generate a grid based on the data in the matching `.json` file.

If you wanted a page for all the stats in the collection, it would hypothetically look like this:

```astro
---
import { getCollection } from 'astro:content';
const stats = await getCollection('stats');
---
<main>
    <Section>
        <h2>Want to learn more about all the incredible data we have?</h2>
    </Section>
    {stats.map(({ id }) => <StatsGrid entryName={id} />)}
</main>
```

## Other tech used

As mentioned at the start, this template is styled with [Uno CSS](https://unocss.dev/). It is a utility first framework, with presets that can turn it into anything you want it to.

## FAQ

None yet! If you have questions or issues, feel free to reach out in an issue or discussion on [GitHub](https://github.com/studiolumina/naid).