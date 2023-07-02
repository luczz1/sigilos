import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('originalText', { static: false }) originalText: ElementRef | any;

  public title = 'sigilos';
  public textWrote = '';
  textConverted = '';

  constructor() {}

  getFormattedText() {
    return this.textWrote.replace(/\n/g, '<br>');
  }

  downloadImage() {
    const element = this.originalText.nativeElement;

    html2canvas(element, {
      backgroundColor: null,
      scale: 2,
      logging: true,
      width: element.offsetWidth,
      height: element.offsetHeight,
    }).then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, 'sigilos.png');
        } else {
          console.error('Erro ao gerar o blob da imagem.');
        }
      });
    });
  }
}
