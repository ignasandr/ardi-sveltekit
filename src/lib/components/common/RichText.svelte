<script lang="ts">
  import type { RichText } from "$lib/types";

  export let content: any;

  function parseRichText(input: RichText[]) {
    let content = "";
    input.forEach((p: any) => {
      if (p.type === "p" || !p.type) {
        content += `<p>${p.children
          .map((c: any) => {
            if (!c.type) {
              return parseText(c);
            } else if (c.type === "link") {
              return parseLink(c);
            }
          })
          .join("")}</p>`;
      } else if (p.type === "ol") {
        content += `<ol>${p.children
          .map((li: any) => {
            return `<li>${li.children
              .map((c: any) => {
                if (!c.type) {
                  return parseText(c);
                } else if (c.type === "link") {
                  return parseLink(c);
                }
              })
              .join("")}</li>`;
          })
          .join("")}</ol>`;
      } else if (p.type === "ul") {
        content += `<ul>${p.children
          .map((li: any) => {
            return `<li>${li.children
              .map((c: any) => {
                if (!c.type) {
                  return parseText(c);
                } else if (c.type === "link") {
                  return parseLink(c);
                }
              })
              .join("")}</li>`;
          })
          .join("")}</ul>`;
      }
    });
    return content;
  }

  function parseText(c: any) {
    if (c.text === "") return;
    if (c.bold) {
      return `<strong>${c.text}</strong>`;
    } else if (c.italic) {
      return `<em>${c.text}</em>`;
    } else if (c.underline) {
      return `<u>${c.text}</u>`;
    } else {
      return c.text;
    }
  }

  function parseLink(c: any) {
    return `<a href="${c.url}" ${c.newTab ? 'target="blank"' : ""}>${
      c.children[0].text
    }</a>`;
  }
</script>

<div class="rich-text">{@html parseRichText(content)}</div>

<style>
  .rich-text {
    line-height: 1.5rem;
    font-weight: 500;
  }

  :global(p) {
    text-align: justify;
  }

  :global(a) {
    font-weight: 700;
  }

  :global(ul) {
    list-style-position: inside;
    padding-left: 0;
    text-align: justify;
  }
</style>
