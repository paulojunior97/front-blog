import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-upload-imagens',
  templateUrl: './upload-imagens.component.html',
  styleUrls: ['./upload-imagens.component.scss']
})
export class UploadImagensComponent implements OnInit {

  @Input()formArray: FormArray = new FormArray([]);

  disabledFoto = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  removerFoto(index: number) {
    const fotos = this.formArray;
    fotos.removeAt(index);
    this.formArray.setValue(fotos.value);
    this.disabledFoto = fotos.value.length > 2;
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.addFoto(reader.result);
  }

  private addFoto(imageSrc: string) {
    const fotos = this.formArray;
    fotos.push(
      this.formBuilder.control(imageSrc)
    );
    this.disabledFoto = fotos.value.length > 2;
  }

}
