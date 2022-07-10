---
layout: base.html
pagination:
    data: post
    size: 1
    alias: post
permalink:  "{{ post.slug }}/index.html"
eleventyComputed: 
    title: "{{ post.title }}"
---

<main>
    <h1>{{ post.title }}</h1>
    <div>{{ post.body  }}</div>
    <img src="{{ post.image.fields.file.url }}?w=400" />
    <p>Published on: <time>{{ post.date }}</time></p>
    
</main>

<div class="page-footer">
    <a href="/"> 
        Return Home
    </a>
</div>