import { Component,Input } from '@angular/core';

interface FeatureDetail{
  name: string,
  isEnable: boolean
}

interface PlanDetail{
  type: string, 
  price: number, 
  features: Array<FeatureDetail>
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() planObj: PlanDetail|undefined;
}