# Student Toolkit

Three small browser tools for studying: a pomodoro timer, a to-do list and an
exam countdown. No sign-up, no server, no database — everything runs in the
browser.

Built for a web development course. Plain HTML, CSS and JavaScript only.

## Pages

| File | What it does |
|---|---|
| `index.html` | Home, entry point to the three tools |
| `pomodoro.html` | 25-minute focus timer with a 5-minute break |
| `todo.html` | Add, tick off and delete tasks |
| `countdown.html` | Days left until an exam date |
| `about.html` | Who made it, why, and how |

## Structure

```
.
├── index.html
├── pomodoro.html
├── todo.html
├── countdown.html
├── about.html
├── css/
│   └── style.css        one stylesheet for the whole site
├── js/
│   ├── common.js        mobile menu and dark mode (every page)
│   ├── pomodoro.js      timer logic
│   ├── todo.js          list logic
│   └── countdown.js     date logic
└── images/
    └── favicon.svg
```

## Running it

Open `index.html` in a browser. No build step, no dependencies.

## Notes

- Dark mode is a single class on `<body>`; all colours are CSS variables.
- One breakpoint at 720px: cards stack, the nav collapses behind a menu button.
- Keyboard users can skip the nav with the first Tab press.
- Dates are parsed from `YYYY-MM-DD` by hand so the result is not affected by
  time zone offsets.

## License

Course project, for learning. The Pomodoro Technique is by Francesco Cirillo.
