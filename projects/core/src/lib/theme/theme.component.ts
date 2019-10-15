import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'sc-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeComponent {
}
