# Angular Gantt Selection Demo

A sample Angular application demonstrating row and cell selection behavior in the [Angular Gantt Chart](https://www.syncfusion.com/angular-components/angular-gantt-chart) component.

## Repository Description

This repository provides an Angular example showing how to configure and control selection features in the Angular Gantt Chart, including multiple selection modes, persisted selection, and custom selection rules.

## Features

- Angular Gantt integration
- Row and cell selection support
- Multiple selection with toggle behavior
- Persisted selection across refresh
- Custom logic to prevent selection for specific rows and cells

## Selection Configuration

The Gantt chart is configured with the following selection options:

- `selectionSettings.mode = 'Both'`
- `selectionSettings.type = 'Multiple'`
- `selectionSettings.enableToggle = true`
- `selectionSettings.persistSelection = true`

## Getting Started

### Prerequisites

- Node.js (LTS or later)
- npm
- Angular CLI


## Install and run

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Notes

- Data is imported from `src/data.ts`
- Uses `@ViewChild('ganttObj')` for the Gantt API
- Selection examples are included in `app.component.ts`
- Sorting is enabled with `[allowSorting]="true"`

## Related Links

- [Explore Angular Gantt Chart](https://www.syncfusion.com/angular-components/angular-gantt-chart)
- [Gantt Selection Documentation](https://ej2.syncfusion.com/angular/documentation/gantt/selection/selection)
- [Gantt Chart Feature Overview](https://ej2.syncfusion.com/angular/documentation/gantt/overview)
- [Angular Gantt Chart Getting Started Guide](https://ej2.syncfusion.com/angular/documentation/gantt/getting-started)
- [Gantt API Documentation](https://ej2.syncfusion.com/angular/documentation/api/gantt/index-default#allowselection)
- [Gantt Chart Live Demos and Examples](https://ej2.syncfusion.com/angular/demos/#/tailwind3/gantt/selection)
