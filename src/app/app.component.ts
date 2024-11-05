import { Component, ViewChild } from '@angular/core';
import { GanttModule, SelectionService, GanttComponent,
  SortService 
 } 
from '@syncfusion/ej2-angular-gantt';
import { projectNewData } from '../data';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, RouterOutlet, ButtonModule ],
  providers: [SelectionService, SortService ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('ganttObj') ganttObj!: GanttComponent;
  public selectionSettings = {
    mode: 'Both',
    type: 'Multiple',
    enableToggle: true,
    persistSelection: true
  };
  public preventCellSelection(args: any) {
    if (args.data.TaskID == 4 && args.cellIndex.cellIndex == 1) {
      args.cancel = true;
    }
  };
  public preventRowSelection(args: any) {
    if (args.data.TaskID == 4) {
      args.cancel = true;
    }
  };
  public onClick(): void {
    // this.ganttObj.selectionModule.selectRow(2);
    // this.ganttObj.selectionModule.selectRows([5,6,7]);
    // this.ganttObj.clearSelection();
    console.log(this.ganttObj.selectionModule.getSelectedRowIndexes());
    console.log(this.ganttObj.selectionModule.getSelectedRecords());
  };
  public data: object[] = projectNewData;

  public columnSettings: object[] = [
    {field: "TaskID", headerText: "Task ID"},
    {field: "TaskName", headerText: "Task Name"},
    {field: "StartDate", headerText: "Start Date", format: "dd-MMM-yy"},
    {field: "Duration", textAlign: "Right"},
  ]
  public taskSettings: object = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "SubTasks",
    dependency: "Predecessor"
  }
  title = 'myangularapp';
}
