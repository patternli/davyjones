---
layout: base.html
pagination:
    data: product
    size: 1
    alias: product
permalink:  "products/{{ product.slug }}/index.html"
eleventyComputed: 
    title: "{{ product.title }}"
---

<div class="product-wrapper">
    <div class="col-75">
        Need image loop here
    </div>
    <div class="col-25 product-details">
        <h1>{{product.title}}</h1>
        <p>{{ product.short }}</p>
        <p>{{ product.colors }}</p>
        <p>{{ product.sizes }}</p>
        <p class="price">${{ product.price }}</p>
        <a href="" class="btn">Buy </a>
    </div>
</div>
<main>
<h2> Description</h2>
{{ product. body }}

<h3>You May Also Like</h3>

{{ product.type }}

{% for p in product.type  %}
{{ p.title }}
{% endfor %}

</main>

