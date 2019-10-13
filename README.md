# webkit-sass-percentage-grid
> Responsive percentage grid system build with sass.

## usage
- https://afeiship.github.io/webkit-sass-percentage-grid/

```scss
@import 'node_modules/webkit-sass-percentage-grid/dist/webkit-sass-percentage-grid.scss';

$webkit-sass-percentage-grid-options: (
  grid: 12,
  gutter-x: 2%,
  gutter-y: 1em,
  responsive: (
    sm: 567px,
    md: 767px,
    lg: 1200px
  )
);

@include webkit-sass-percentage-grid();
```

## resources
- https://github.com/afeiship/generator-webkit-sassui
- https://codepen.io/kccnma/pen/FdeBl
- https://itnext.io/setting-up-sass-unit-testing-in-your-project-b683a2e8ac03
