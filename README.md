# Adriana Alvarado Garcia — personal website

A single scrolling research portfolio with a persistent menu for About,
Publications, and Recent News. It keeps the Quicksand typography, white
background, blue links, and publication formatting from the original website.

The content is readable HTML. There is no package installation, build step,
framework, or content generator to maintain. A small JavaScript file updates
the menu highlight as the reader scrolls. Anchor links and expandable
publication years also work with JavaScript disabled.

## Files

- `index.html`: all content, navigation, portrait, and professional profile links.
- `style.css`: fonts, colors, sidebar, spacing, and mobile layout.
- `navigation.js`: highlights the section currently being read.
- `assets/adriana.jpg`: portrait photograph.
- `publications.html` and `recent-news.html`: redirects for older page links.
  Edit the content in `index.html`, rather than these redirect files.

## Preview and edit

Open `index.html` in your browser. Edit it in a text editor, save, and refresh.
The site works when opened directly from disk, including the menu highlighting.

The main content has three clearly labeled sections: `id="about"`,
`id="publications"`, and `id="recent-news"`. The sidebar links point to those
IDs. Keep them consistent if renaming a section. New section links placed in
`.section-navigation` are also picked up by the highlighting script.

To change the biography, edit the paragraphs in the About section. To replace the
portrait, replace `assets/adriana.jpg` or change the image's `src` attribute.

To add a publication, copy an entire `<article class="publication">` block
inside the appropriate year's `<details>` element, then edit its title,
authors, venue, and links. For a new year, copy an entire `<details>` block and
update its `id` and `<summary>`. Years start collapsed; add `open` to a details
tag to expand that year by default. Multiple years can be open together.

To add news, copy a `<li>...</li>` block into the right month's `<ul>`. For a
new month, copy a whole `<section class="news-month">`, put it at the top of
Recent News, and update its heading, heading `id`, and matching
`aria-labelledby` value.

Use `<a href="https://example.com">link text</a>` for links, `<strong>` for
bold text, and `<em>` for italics. Write `&amp;` for an ampersand in HTML.
Keep the indentation and blank lines so each item remains easy to find.

## Navigation

On desktop, the left menu stays fixed. On smaller screens, it becomes a sticky
bar above the content. Clicking a menu item uses a regular HTML anchor; smooth
scrolling respects the reader's reduced-motion setting. The script marks the
current section using `aria-current="location"` and does not move focus or
rewrite the address as the reader scrolls.

Old links to `publications.html` and `recent-news.html` redirect to their
sections. New links can use `index.html#publications`, `index.html#recent-news`,
or individual publication-year anchors such as `index.html#year-2024`.

## Hosting on GitHub Pages

In the repository's **Settings → Pages**, choose **Deploy from a branch**,
then **main** and **/ (root)**. Commit and push the website files and assets.
All local URLs are relative, so they work for a personal site or a project site.

The published address depends on the GitHub username and repository name;
**Settings → Pages** shows the current address. After an account rename,
repository rename, or custom-domain change, update the hidden `sitesearch`
input in `index.html` to the published URL without `https://`.

## Design and content notes

- Google Fonts supplies Quicksand and Source Sans 3, with local fallback fonts.
- The search icon opens a plain HTML form that searches the published site
  through Google. Results depend on Google's indexing and do not search a local
  preview. Use the browser's Find command for local text.
- Social profile links use simple text badges instead of copying Google's icons.
- The Google Sites information icon and footer are omitted.
- Original wording, year groupings, and available links are preserved, including
  the paper listed under 2017 whose venue text says CSCW 2018. Older entries
  without original links remain plain text; add verified links when available.
- Publication authors use slightly darker gray than the reference screenshots
  for readability.
