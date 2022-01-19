import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../../service/post.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-post',
  templateUrl: './cadastro-post.component.html',
  styleUrls: ['./cadastro-post.component.scss']
})
export class CadastroPostComponent implements OnInit {

  formGroupPost: FormGroup = new FormGroup({
    conteudo: new FormControl(),
    links: new FormArray([]),
    imagensBase64: new FormArray([])
  });
  formGroupLink: FormGroup = new FormGroup({
    url: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required])
  });

  disabledLink = false;

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  addLink() {
    this.formGroupLink.markAllAsTouched();
    if (this.formGroupLink.valid) {
      const links = this.formGroupPost.get('links') as FormArray;
      links.push(
        this.formBuilder.group(this.formGroupLink.getRawValue())
      );
      this.formGroupLink.reset();
      this.disabledLink = links.value.length > 2;
    }
  }

  removerLink(index: number) {
    const links = this.formGroupPost.get('links') as FormArray;
    links.removeAt(index);
    this.formGroupPost.get('links').setValue(links.value);
    this.disabledLink = links.value.length > 2;
  }

  salvarPost() {
    this.postService.cadastrarPostagem(this.formGroupPost.getRawValue()).subscribe(respose => {
      this.snackBar.open(
        'Post cadastrado com sucesso.',
        'Cadastro',
        {duration: 2500, direction: 'ltr', verticalPosition: 'top'}
      );
      this.router.navigate(['blog', 'feed-noticias']);
    });
  }

}
