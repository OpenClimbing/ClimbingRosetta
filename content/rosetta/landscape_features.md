+++
title = "Landscape features"
description = "features"
date = 2021-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = 'lead'
toc = true
top = false
+++




## Landscape features



| EN                    | IT               | DE         | Description                              |
|-----------------------|------------------|------------|------------------------------------------|
| Spike                 |            | |                                          |
| Edge                 | Spigolo           | Kante |                                          |

<!-- <div>
    <img id="image" src="https://upload.wikimedia.org/wikipedia/commons/d/da/Klim_gordel.jpg" width="400" height="300" />
</div> -->
<!-- <label for="textColumnSelect">Select Text Column: </label> -->
<select id="textColumnSelect">
    <option value="1">English</option>
    <option value="2">Deutsch</option>
    <!-- Add more options as needed -->
</select>
<table id="dataTable">
    <thead>
        <tr>
            <th>Text 1</th>
            <th>Text 2</th>
            <th>X Position</th>
            <th>Y Position</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Text A</td>
            <td>Text X</td>
            <td>50</td>
            <td>50</td>
        </tr>
        <tr>
            <td>Text B</td>
            <td>Text Y</td>
            <td>100</td>
            <td>100</td>
        </tr>
        <!-- Add more rows as needed -->
    </tbody>
</table>

<div id="container"></div>
<script src="https://unpkg.com/konva@9/konva.min.js"></script>
