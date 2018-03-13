# Express Boilerplate
A starter package for ExpressJS the goal is to take _out of the box_ as close to production ready (optimizing performance, security and accessibility) as possible. We start with an out of the box solution that pushes Chrome's dev tool audits as close to 100% as possible, from there we move on to other common/opinionated practices. This is intended as a starting point to reduce the bruden of trivial yet common tasks.

## Installation

```sh
git clone https://github.com/jasonsnider/express-boilerplate.git YOUR-PROJECT-NAME
cd YOUR-PROJECT-NAME
npm install
```


## Production Punchlist

Things you need to do before moving your site into production.

- [ ] Rename service worker
- [ ] Replace favicon
- [ ] Replace logos
- [ ] Replace tiles
- [ ] Update robots.txt (optional)
- [ ] Update humans.txt
- [ ] Update security.txt
- [ ] Update .browserconfig.xml
    - [ ] Update tile color (optional)
- [ ] Update .manifest.json
    - [ ] Update short name
    - [ ] Update name
    - [ ] Update background color (optional)
    - [ ] Update theme color (optional)
    - [ ] Update start_url (optional)
- [ ] Update service-worker.js
    - [ ] Customize cache strategies for offline mode (if applicable)


