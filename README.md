# Angular Gantt Selection Demo

This repository contains a sample Angular app demonstrating selection in the Syncfusion Angular Gantt component.

## Features

- Syncfusion Gantt integration in Angular
- Row and cell selection enabled
- Multiple selection with toggle support
- Persist selection across refresh
- Custom selection rules for a row and a cell

## What this app shows

The app configures the Gantt chart with:

- `selectionSettings.mode = 'Both'`
- `selectionSettings.type = 'Multiple'`
- `selectionSettings.enableToggle = true`
- `selectionSettings.persistSelection = true`

It also blocks selection for `TaskID === 4`:

- row selection prevented
- cell selection prevented for index `1`

A button logs selected rows and records to the console.

## Prerequisites

- Node.js
- npm

## Install and run

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Dependencies

- Angular 19
- `@syncfusion/ej2-angular-gantt`
- `@syncfusion/ej2-angular-buttons`
- `@syncfusion/ej2-material-theme`

## Notes

- Data is imported from `src/data.ts`
- Uses `@ViewChild('ganttObj')` for the Gantt API
- Selection examples are included in `app.component.ts`
- Sorting is enabled with `[allowSorting]="true"`

## Resources

- Documentation: https://ej2.syncfusion.com/angular/documentation/gantt/selection/selection
- Demo: https://ej2.syncfusion.com/angular/demos/#/fluent2/gantt/selection

