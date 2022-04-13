# ⚡ Rumble enhancer ⚡

# About

Rumble enhacer is a chrome extension which replaces <a href="https://rumble.com">rumble.com</a>'s default page for a full fledged react app.


# Advantages
## Improved interface
![Interface](https://snipboard.io/DyFqo9.jpg)

## A fair and transparent recommendation algorithm
An open source algorithm which recommends new videos for you.

## Protection for content creators
This extension is part of a project which aims to allow content creators to migrated from networks(youtube, odysee, rumble) without loosing public.
As long as your public has this extension installed. They'll get recommendations to watch your videos regardless of where it is hosted.


# Contribute

- Clone the project
- Use `yarn build` to generate the extension files
- Load a custom chrome extension directly from the applications root -> extension

# -

With the current setup you won't be able to just load local images because their addresses are
not currently translated to chrome-extension url.
So we'll be hard-coding the svg images we need for now and, probably, forever. Since there aren't enough images to justify the time spent adjusting vite and the deploy script for that

# Status

Early development phase.
