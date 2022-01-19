import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {AlbumService} from '../../../service/album.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-album',
  templateUrl: './cadastro-album.component.html',
  styleUrls: ['./cadastro-album.component.scss']
})
export class CadastroAlbumComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    descricao: new FormControl(),
    fotosBase64: new FormArray([])
  });
  constructor(
    private albumService: AlbumService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
  }

  salvarAlbum() {
    this.albumService.cadastrarAlbum(this.formGroup.getRawValue()).subscribe(response => {
      this.snackBar.open(
        'Álbum cadastrado com sucesso.',
        'Cadastro',
        {duration: 2500, direction: 'ltr', verticalPosition: 'top'}
      );
      this.router.navigate(['blog', 'feed-noticias']);
    });
  }

}
