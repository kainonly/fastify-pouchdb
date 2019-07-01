import {Component, OnInit} from '@angular/core';
import {MainService} from '../../api/main.service';

@Component({
  selector: 'app-timing-task',
  templateUrl: './timing-task.component.html',
  styleUrls: ['./timing-task.component.scss']
})
export class TimingTaskComponent implements OnInit {
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(
    public main: MainService
  ) {
  }

  ngOnInit() {
  }

}
