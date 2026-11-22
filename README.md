# Adriana Alvarado Garcia — personal website

A static recreation of the About, Publications, and Recent News pages from
[the original website](https://sites.google.com/view/alvarado-adriana/).
The site uses readable HTML and one shared CSS file. There is no JavaScript,
package installation, build step, or content generator to maintain.

## Files

- `index.html`: About page, portrait, and professional profile links.
- `publications.html`: publications grouped by year.
- `recent-news.html`: news grouped by month, newest first.
- `style.css`: shared colors, fonts, spacing, and mobile layout.
- `assets/adriana.jpg`: portrait photograph.

## Preview and edit

Open `index.html` in your browser. Edit any HTML file in a text editor, save it,
and refresh the browser. Navigation and expandable publication years work even
when opening files directly from disk.

To change the biography, edit the paragraphs in `index.html`. To replace the
portrait, replace `assets/adriana.jpg` or change the image's `src` attribute.

To add a publication, copy an entire `<article class="publication">` block
inside the appropriate year's `<details>` element, then edit its title,
authors, venue, and links. For a new year, copy an entire `<details>` block and
update its `id` and `<summary>`. Years start collapsed; add `open` to a details
tag to expand that year by default. Multiple years can be open together.

To add news, copy a `<li>...</li>` block into the right month's `<ul>`. For a
new month, copy a whole `<section class="news-month">`, put it at the top, and
update its heading, heading `id`, and matching `aria-labelledby` value.

Use `<a href="https://example.com">link text</a>` for links, `<strong>` for
bold text, and `<em>` for italics. Write `&amp;` for an ampersand in HTML.
Keep the indentation and blank lines so each item remains easy to find.

The header is repeated in all three files on purpose, so the site needs no
templates or build tools. Apply navigation or site-name edits to all three.

## Hosting on GitHub Pages

In the repository's **Settings → Pages**, choose **Deploy from a branch**,
then **main** and **/ (root)**. Commit and push the website files and assets.
All local URLs are relative, so they work for a personal site or a project site.

With owner `AdrianaAG` and repository `adriana-alvarado.github.io`, the expected
URL is `https://adrianaag.github.io/adriana-alvarado.github.io/`.
For `https://adrianaag.github.io/`, the repository must be named
`AdrianaAG.github.io`. If you rename the repository or use a custom domain,
update the hidden `sitesearch` input in every HTML header to the published URL
without `https://`.

## Design and content notes

- Google Fonts supplies Quicksand and Source Sans 3, with local fallback fonts
  when offline. No JavaScript is loaded.
- The search icon opens a plain HTML form that searches the published site
  through Google. Results depend on Google's indexing and do not search a local
  preview. Use the browser's Find command for local text.
- Browsers with CSS scroll animation support darken the sticky header when
  scrolling. Other browsers keep its white background and dark text.
- Social profile links use simple text badges instead of copying Google's icons.
- The Google Sites information icon and footer are omitted.
- Original wording, year groupings, and available links are preserved, including
  the paper listed under 2017 whose venue text says CSCW 2018. Older entries
  without original links remain plain text; add verified links when available.
- Publication authors use slightly darker gray than the reference screenshots
  for readability.
