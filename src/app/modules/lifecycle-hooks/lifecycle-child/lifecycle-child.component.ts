import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked {

  @Input() userName!: string;

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  constructor() { }

  // LIFECYCLE HOOK - THIS RUNS FIRST AND THEN WHEN ANY OF THE COMPONENT'S @INPUT PROPERTIES ARE CHANGED
  // WILL NOT RUN AT ALL IF THERE ARE NO @INPUT PROPERTIES 
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges",changes);
    
  }

  // LIFECYCLE HOOK - RUNS ONLY ONCE, AFTER NGONCHANGES, BUT WILL RUN EVERYTIME A COMPONENT IS CREATED
  ngOnInit(): void {
    console.log("ngOnInit - Child Component");
  }

  // LIFECYCLE HOOK - RUNS AFTER ONINIT - SIMILAR TO OnChanges, BUT RUNS MUCH MORE OFTEN - CAN BE VERY EXPENSIVE, BETTER FOR WHEN YOU'RE USING ONPUSH CHANGE DETECTION
  ngDoCheck() {
    console.log("ngDoCheck");
  }

  // LIFECYCLE HOOK - RUNS ONCE AFTER DOCHECK. INIT HOOKS ONLY RUN ONCE. 
  // INIT OF CONTENT PASSED FROM PARENT TO CHILD COMPONENT USING @ContentChild and <NgContent>
  ngAfterContentInit() {
    console.log("ngAfterContentInit - wrapper", this.wrapper);
    console.log("ngAfterContentInit - contentWrapper", this.content);
  }

  // LIFECYCLE HOOK - RUNS ONCE AFTER NgContentInit AND THEN AGAIN AFTER EACH TIME DoCheck RUNS
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked triggered")
  }

}
